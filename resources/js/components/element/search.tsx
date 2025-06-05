import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Book } from "@/types"
import { Search } from "lucide-react"

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
                    <div key={book.id} className="rounded border p-2 shadow-sm">
                        <h2 className="font-semibold">{book.title}</h2>
                        <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
