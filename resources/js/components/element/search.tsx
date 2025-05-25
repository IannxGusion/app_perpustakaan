import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaSearch } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

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
            book.topic.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section>
            <div className="relative w-full md:w-1/2 mx-auto">
                <Input
                    type="text"
                    placeholder="Cari buku, penulis, atau topik..."
                    className="pl-10 pr-4 py-2 border rounded shadow-sm w-full bg-gray-50"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {query && (
                <div className="mt-6 bg-white rounded shadow p-4 w-full md:w-1/2 mx-auto text-left">
                    <h2 className="font-semibold mb-2">Hasil Pencarian:</h2>
                    {filteredBooks.length > 0 ? (
                        <ul>
                            {filteredBooks.map((book) => (
                                <li key={book.id} className="py-2 border-b last:border-b-0">
                                    <Link
                                        href={route(book.route, 1)}
                                        className="text-black-600 hover:underline"
                                    >
                                        <strong>{book.title}</strong> oleh {book.author} ({book.topic})
                                    </Link>

                                    <Link
                                        href={route(book.route, 2)}
                                        className="text-black-600 hover:underline"
                                    >
                                        
                                    </Link>
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
