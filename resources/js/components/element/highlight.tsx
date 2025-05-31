import { Link } from '@inertiajs/react'; // or wherever your Link comes from
import Bleach from './Bleach';
import Dilan from './dilan';
import Sadako from './sadako';

export default function Highlight() {
    const books = [
        {
            id: 1,
            d: 'Dilan',
            dilan: <Dilan />,
        },
        {
            id: 2,
            s: 'Sadako',
            sadako: <Sadako />,
        },
        {
            id: 3,
            b: 'Bleach',
            bleach: <Bleach />,
        },
    ];

    return (
        <section className="px-4 py-10">
            <h2 className="mb-6 text-2xl font-bold">Top Readings</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {books.map((book, idx) => (
                    <div key={book.id} className="rounded border p-4 shadow">
                        <span className="rounded bg-black px-2 py-1 text-xs text-white">Top #{idx + 1}</span>
                        <h3 className="mt-4 text-lg font-semibold">
                            <Link href={route('books.detail1', 1)}>
                                {book.d}
                                {book.dilan}
                            </Link>
                            <Link href={route('books.detail2', 2)}>
                                {book.s}
                                {book.sadako}
                            </Link>
                            <Link href={route('books.detail3', 3)}>
                                {book.b}
                                {book.bleach}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
