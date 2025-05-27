import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type { Book } from '@/types';

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

export default function Borrows_book({ ...props }: { book: Book }) {
    const { book, } = props;


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
            <main className="max-w-6xl mx-auto p-6">
                <ToBorrows book={book} />

                {/* Reviews */}
                <section className="mt-10 border p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                        Ulasan
                        <Divider className='mt-10' />
                    </h3>

                    {book.review ? (
                        <Review book={book} />
                    ) : null}
                </section>
            </main>

        </AppLayout >
    );
}
