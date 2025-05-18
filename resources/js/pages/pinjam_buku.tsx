import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type { Book } from '@/types';

// element
import { Footer } from '@/components/element/footer';
import ToPinjam from '@/components/element/book cards/ToPinjam';

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
                <ToPinjam book={book} />

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
