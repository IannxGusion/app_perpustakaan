import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Book } from '@/types';
import { Loader2Icon, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';

import { Link } from '@inertiajs/react';
//import Category from "./category";
import Heading from '../heading';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

export default function SearchBlock() {
    const { auth } = usePage<SharedData>().props;

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query.trim() === '') {
                setBooks([]);
                return;
            }

            setLoading(true);

            fetch(`dashboard/search?query=${encodeURIComponent(query)}`)
                .then((res) => res.json())
                .then((data) => {
                    setBooks(data.books);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }, 300); // debounce 300ms

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <section>
            <Dialog>
                <DialogTrigger>
                    <Button variant="secondary">
                        <Search />
                        Cari buku atau penulis..
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="mt-2 mr-4">
                        <DialogTitle>
                            <div className="relative mx-auto w-full">
                                <Input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="buku atau penulis.."
                                    className="w-full rounded border bg-gray-100 py-2 pr-4 pl-10 shadow-sm dark:bg-black dark:text-white"
                                />
                                <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={20} />
                            </div>
                        </DialogTitle>
                        <DialogDescription>
                            <ScrollArea className="h-[200px] p-4">
                                {loading && (
                                    <Button size="sm" disabled>
                                        <Loader2Icon className="animate-spin" />
                                        Loading
                                    </Button>
                                )}
                                {!loading && books.length === 0 && query && <p>Tidak ditemukan.</p>}

                                <Command>
                                    {books.map((book) => (
                                        <CommandList>
                                            <CommandGroup>
                                                <CommandItem asChild>
                                                    {auth.user ? (
                                                        <Link href={route('books.show', book['id'])}>
                                                            <Heading
                                                                title={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
                                                                description={book.author}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <Heading
                                                            title={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
                                                            description={book.author}
                                                        />
                                                    )}
                                                </CommandItem>
                                            </CommandGroup>
                                        </CommandList>
                                    ))}
                                </Command>
                            </ScrollArea>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    );
}
