import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type { Book, Review as ReviewType } from '@/types';

// element
import ToBorrows from '@/pages/book cards/ToBorrows';
import Review from '@/components/element/review';

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

export default function Borrows_book({ book, reviews }: { book: Book, reviews: ReviewType[] }) {
    // const { book, } = props;


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pinjam Buku" />

            {/* Hero Section */}
            <section
                className="text-center py-12 px-4 mt-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/7.jpg')" }}
            >
                <h1 className="text-4xl font-bold text-white">Pinjam</h1>
            </section>

            {/* Content */}
            <main className="max-w-6xl mx-auto p-6 w-full">
                <ToBorrows book={book} />

                {/* Reviews */}
                <section className="mt-10 border p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                        Ulasan
                        <Divider className='mt-10' />
                    </h3>
                    {/* Pass reviews as prop */}
                    <Review reviews={reviews} />
                </section>
            </main>

        </AppLayout >
    );
}
