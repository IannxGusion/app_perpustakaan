import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from '@/types';

import { Link } from '@inertiajs/react';
//import Category from "./category";
import Heading from "../heading";

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
            <div className="relative mx-auto w-full md:w-1/2 mb-10">
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari buku, penulis, atau genre..."
                    className="w-full rounded border bg-white dark:bg-black dark:text-white py-2 pr-4 pl-10 shadow-sm"
                />
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={20} />
            </div>

            {loading && <p>Loading...</p>}
            {!loading && books.length === 0 && query && <p>Tidak ditemukan.</p>}
            <div className="mt-4 space-y-2 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.map(book => (
                    <Card
                        key={book.id}
                        className="flex flex-col p-4"
                    >
                        <CardHeader className="flex-1">
                            <div className="flex items-center space-x-2">
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <div className="content-center justify-center">
                                <img
                                    src={`/storage/${book.cover}`}
                                    alt={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
                                    className="h-fit w-full border border-slate-700 object-cover dark:border-slate-300"
                                />
                            </div>
                        </CardContent>

                        <CardFooter className="flex-1 justify-center">
                            <CardTitle>
                                <Heading title={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title} description={book.author} />
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
