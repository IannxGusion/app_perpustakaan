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
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pinjam Buku" />

            {/* Hero Section */}
            <section
                className="mt-4 bg-cover bg-center px-4 py-12 text-center"
                style={{
                    backgroundColor: '#cecece',
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23004380' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            >
                <h1 className="border-5 border-[#004380] bg-white p-2 text-4xl font-bold dark:bg-[#cecece]">
                    Pinjam Buku
                </h1>
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
