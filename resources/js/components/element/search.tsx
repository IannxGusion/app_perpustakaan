import { Input } from "@/components/ui/input"
import { Book } from "@/types"
import { Search } from "lucide-react"

export default function SearchBlock({ books }: { books: Book[] }) {
    return (
        <section>
            {books.map((book) => (
                <p>
                    {book.title}
                </p>
            ))}
            <div className="relative mx-auto w-full md:w-1/2">
                <Input
                    type="text"
                    placeholder="Cari buku, penulis, atau genre..."
                    className="w-full rounded border bg-gray-50 py-2 pr-4 pl-10 shadow-sm"
                />
                <Search className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={20} />
            </div>

            {/* search results will be displayed here */}
            <div>
            </div>

        </section>
    )
}
