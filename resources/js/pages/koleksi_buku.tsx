//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

import type { Book } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function KoleksiBuku({ ...props }: { books: Book[] }) {
    const { books } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi Buku</h1>
            </section>

            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                <div className="space-y-6">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="flex space-x-6 bg-white px-4 py-4 rounded-lg items-start shadow-2xl"
                        >
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-28 h-40 object-cover shadow border border-slate-700"
                            />
                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mb-1">
                                        Tag
                                    </span>
                                    <h2 className="text-xl font-bold">{book.title}</h2>
                                    <p className="text-sm text-gray-600">{book.author}</p>
                                    <p className="text-sm text-gray-600">{book.publisher}</p>
                                </div>
                                <button className="w-full h-7 bg-primary rounded mt-3 text text-white">Pinjam</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </AppLayout>
    );
}
