import AppLayout from '@/layouts/user-layout';
import type { Book, Review as ReviewType } from '@/types';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// element
import Review from '@/components/element/review';
import ToBorrows from '@/pages/book cards/ToBorrows';

import Divider from '@mui/material/Divider';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Daftar Buku',
        href: '/books',
    },
    {
        title: 'Pinjam Buku',
        href: '/borrow',
    },
];

export default function Borrows_book({ book, reviews }: { book: Book; reviews: ReviewType[] }) {
    // const { book, } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pinjam Buku" />

            {/* Hero Section */}
            <section className="mt-4 bg-cover bg-center px-4 py-12 text-center" style={{ backgroundImage: "url('/images/7.jpg')" }}>
                <h1 className="text-4xl font-bold text-white">Pinjam</h1>
            </section>

            {/* Content */}
            <main className="mx-auto w-full max-w-6xl p-6">
                <ToBorrows book={book} />

                {/* Reviews */}
                <section className="mt-10 rounded-lg border p-5">
                    <h3 className="mb-4 text-xl font-semibold">
                        Ulasan
                        <Divider className="mt-10" />
                    </h3>
                    {/* Pass reviews as prop */}
                    <Review reviews={reviews} />
                </section>
            </main>
        </AppLayout>
    );
}
