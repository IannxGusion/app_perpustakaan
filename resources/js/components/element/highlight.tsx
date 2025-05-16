import Dilan from "./dilan";
import Sadako from "./sadako";
import Bleach from "./Bleach";
import { Link } from "@inertiajs/react"; // or wherever your Link comes from

export default function Highlight() {
    const books = [
        {
            id: 1,
            title: "Dilan",
            dilan: <Dilan />,
        },
        {
            id: 2,
            title: "Sadako",
            sadako: <Sadako />,
        },
        {
            id: 3,
            title: "Bleach",
            bleach: <Bleach />,
        },
    ];

    return (
        <section className="py-10 px-4">
            <h2 className="text-2xl font-bold mb-6">Top Readings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {books.map((book, idx) => (
                    <div key={book.id} className="border p-4 rounded shadow">
                        <span className="bg-black text-white text-xs px-2 py-1 rounded">
                            Top #{idx + 1}
                        </span>
                        <h3 className="mt-4 text-lg font-semibold">
                            <Link href={route('book.detail', 1)}>
                                {book.title}
                                {book.dilan}
                            </Link>
                            <Link href={route('book.detail2', 2)}>
                            {book.sadako}
                            </Link>
                            <Link href={route('book.detail3', 2)}>
                            {book.bleach}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
