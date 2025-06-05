import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Book } from '@/types';

import { Link } from '@inertiajs/react';

export default function SearchBlock() {
    const [query, setQuery] = useState("")
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query.trim() === "") {
                setBooks([])
                return
            }

            setLoading(true)

            fetch(`dashboard/search?query=${encodeURIComponent(query)}`)
                .then(res => res.json())
                .then(data => {
                    setBooks(data.books)
                    setLoading(false)
                })
                .catch(() => setLoading(false))
        }, 300) // debounce 300ms

        return () => clearTimeout(timeout)
    }, [query])

    return (
        <section>
            <div className="relative mx-auto w-full md:w-1/2">
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari buku, penulis, atau genre..."
                    className="w-full rounded border bg-gray-50 py-2 pr-4 pl-10 shadow-sm"
                />
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={20} />
            </div>

            <div className="mt-4 space-y-2">
                {loading && <p>Loading...</p>}
                {!loading && books.length === 0 && query && <p>Tidak ditemukan.</p>}
                {books.map(book => (
                    <Card
                        key={book.id}
                        className="flex flex-col p-4"
                    >
                        <CardContent className="flex-1">
                            <div className="content-center justify-center">
                                <img
                                    src={`/storage/${book.cover}`}
                                    alt={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
                                    className="h-fit w-full border border-slate-700 object-cover dark:border-slate-300"
                                />
                            </div>
                        </CardContent>

                        <CardFooter className="flex-1">
                            <CardTitle>
                                <p className="text-xl font-bold">{book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}</p>
                            </CardTitle>
                        </CardFooter>

                        {book.status === 'Available' && (
                            <Button asChild>
                                <Link href={route('books.show', book['id'])}>Pinjam</Link>
                            </Button>
                        )}

                        {book.status === 'Not Available' && <Button variant={'ghost'}>Tidak tersedia</Button>}
                    </Card>
                ))}
            </div>
        </section>
    )
}
