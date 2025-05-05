//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
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


export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4">
                <h1 className="text-4xl font-bold">Pinjam Buku</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* Content */}
                <main className="max-w-6xl mx-auto p-6">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
                        {/* Book Image */}
                        <div className="flex-shrink-0">
                            <img
                                src="/books/sadako.jpg" // Ganti sesuai lokasi gambar
                                alt="Sadako"
                                className="w-64 h-auto rounded-md"
                            />
                        </div>

                        {/* Book Info */}
                        <div className="flex flex-col justify-between w-full">
                            <div>
                                <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded">
                                    Tag
                                </span>

                                <h2 className="text-2xl font-semibold mt-2">Sadako</h2>
                                <p className="text-gray-600 text-sm">penulis</p>
                                <p className="text-gray-600 text-sm">Penerbit</p>

                                <button className="mt-4 bg-blue-900 text-white px-80 py-3 rounded hover:bg-blue-800">
                                    Pinjam
                                </button>
                            </div>

                            {/* Sinopsis */}
                            <div className="mt-6 border rounded p-3 bg-gray-50">
                                <h3 className="font-semibold mb-1">Sinopsis</h3>
                                <p className="text-sm text-gray-700">
                                    Answer the frequently asked question in a single sentence, a lengthy paragraph, or even in a list.
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
            </div>

            <Footer />
        </AppLayout>
    );
}
