import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type { Book } from '@/types';

import { Badge } from "@/components/ui/badge"
import { Link } from "@inertiajs/react"
import { SquareTerminal } from 'lucide-react';

// element
import { Footer } from '@/components/element/footer';
import Confirm from '@/components/element/confirm';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Daftar Buku',
        href: '/daftar_buku',
    },
    {
        title: 'Pinjam Buku',
        href: '/pinjam_buku',
    },
];

const reviews = [
    {
        title: "Review title",
        body: "Review body",
        reviewer: "Reviewer name",
        date: "Date",
        rating: 0,
    },
    {
        title: "Review title",
        body: "Review body",
        reviewer: "Reviewer name",
        date: "Date",
        rating: 0,
    },
    {
        title: "Review title",
        body: "Review body",
        reviewer: "Reviewer name",
        date: "Date",
        rating: 0,
    },
];

export default function Dashboard({ book }: { book: Book }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pinjam Buku" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Pinjam Buku</h1>
            </section>

            {/* Content */}
            <main className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
                    {/* Book Image */}
                    <div className="flex">
                        <img
                            src="#" // Ganti sesuai lokasi gambar
                            alt={book.title}
                            className="w-64 h-auto border border-slate-700"
                        />
                    </div>

                    {/* Book Info */}
                    <div className="flex flex-col justify-between w-full">
                        <div>

                            <div className="flex items-center space-x-2">
                                {book.category ? (
                                    <Badge className="flex items-center px-2 py-1 text-sm font-medium text-white bg-black rounded">
                                        <SquareTerminal className="mr-1" size={16} />
                                        {book.category.name}
                                    </Badge>
                                ) : (
                                    <Badge className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded">
                                        Anonymous
                                    </Badge>
                                )}
                            </div>

                            <h2 className="text-2xl font-semibold mt-2">
                                <Link href={route('book.detail', book['id'])} className='hover:cursor-help'>
                                    {book.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-sm">{book.publisher}</p>
                            <p className="text-gray-600 text-sm">{book.publication_date}</p>

                            {/* Confirm dialog */}
                            <Confirm book={book} />
                            
                            </div>

                        {/* Sinopsis */}
                        <div className="mt-6 border rounded p-3 bg-gray-50">
                            <h3 className="font-semibold mb-1">Sinopsis</h3>
                            <p className="text-sm text-gray-700">
                                {book.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <section className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">
                        Latest reviews (Ulasan terbaru)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {reviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-4 rounded shadow-sm border"
                            >
                                <div className="text-yellow-400 mb-1 text-lg">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </div>
                                <h4 className="font-semibold">{review.title}</h4>
                                <p className="text-sm text-gray-600">{review.body}</p>
                                <div className="text-xs text-gray-400 mt-2">
                                    {review.reviewer} • {review.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </AppLayout >
    );
}
