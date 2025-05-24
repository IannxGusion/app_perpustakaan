import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type { Book, ErrReview } from '@/types';

// element
import ToPinjam from '@/pages/book cards/ToBorrows';
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


type Props = {
  book: Book;
  reviews: ErrReview[];
};

export default function Pinjam_buku({...props}: Props) {
  const { book, reviews } = props;

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
                <section className="mt-10 border p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                        Ulasan
                        <Divider className='mt-10'/>
                    </h3>

                    <Review reviews={reviews}/>

                </section>
            </main>

        </AppLayout >
    );
}
