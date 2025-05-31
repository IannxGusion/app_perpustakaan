import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Buku dengan masing-masing route detail
export default function Search() {
    const books = [
        { id: 1, title: 'Dilan', author: 'Pidibaiq', topic: 'Romantic', route: 'books.detail1' },
        { id: 2, title: 'Sadako', author: 'Asep Dombang', topic: 'Horor', route: 'books.detail2' },
        { id: 3, title: 'Bleach', author: 'Tite Kubo', topic: 'Fantasy', route: 'books.detail3' },
    ];

    const [query, setQuery] = useState('');

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.topic.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <section>
            <div className="relative mx-auto w-full md:w-1/2">
                <Input
                    type="text"
                    placeholder="Cari buku, penulis, atau topik..."
                    className="w-full rounded border bg-gray-50 py-2 pr-4 pl-10 shadow-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" size={20} />
            </div>

            {query && (
                <div className="mx-auto mt-6 w-full rounded bg-white p-4 text-left shadow md:w-1/2">
                    <h2 className="mb-2 font-semibold">Hasil Pencarian:</h2>
                    {filteredBooks.length > 0 ? (
                        <ul>
                            {filteredBooks.map((book) => (
                                <li key={book.id} className="border-b py-2 last:border-b-0">
                                    <Link href={route(book.route, 1)} className="text-black-600 hover:underline">
                                        <strong>{book.title}</strong> oleh {book.author} ({book.topic})
                                    </Link>

                                    <Link href={route(book.route, 2)} className="text-black-600 hover:underline"></Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Tidak ada buku ditemukan.</p>
                    )}
                </div>
            )}
        </section>
    );
}
