import React from 'react';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Borrowing } from '@/types';
import { Head } from '@inertiajs/react';

import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import ToPinjaman from '@/components/element/book cards/ToPinjaman';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Riwayat Pinjaman',
        href: '/borrowings',
    },
];

export default function Pinjaman({ ...props }: { borrowings: Borrowing[] }) {
    const { borrowings } = props;

    // Pagination state
    const [pageIndex, setPageIndex] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(10);

    // Calculate paginated item
    const pageCount = Math.ceil(borrowings.length / pageSize);
    const paginatedBorrowings = borrowings.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Riwayat Pinjaman" />

            {/* Hero Section */}
            <section
                className="text-center py-12 px-4 mt-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/pemandangan.jpg')" }}
            >
                <h1 className="text-4xl font-bold text-white">Riwayat Pinjaman</h1>
            </section>

            {/* List */}
            <div className="border-b-2 pb-20 space-y-7 mx-5">
                {paginatedBorrowings.map((borrowing) => (
                    <ToPinjaman borrowing={borrowing} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between px-4 mt-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="rows-per-page" className="text-sm font-extrabold">
                        Item per halaman
                    </label>

                    <Select value={String(pageSize)} onValueChange={(value) => { setPageSize(Number(value)); setPageIndex(0); }}>
                        <SelectTrigger className="w-fit">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent
                            id="rows-per-page"
                            className="w-20 border rounded px-2 py-1"
                        >
                            {[5, 10, 20, 30, 40, 50].map(size => (
                                <SelectItem key={size} value={String(size)}>{size}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </div>
                <div className="flex w-fit items-center justify-center text-sm font-extrabold">
                    Halaman {pageIndex + 1} dari {pageCount}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="hidden h-8 w-8 p-0 lg:flex border rounded items-center justify-center"
                        onClick={() => setPageIndex(0)}
                        disabled={pageIndex === 0}
                    >
                        <span className="sr-only">Go to first page</span>
                        <ChevronsLeftIcon className="w-4 h-4" />
                    </button>
                    <button
                        className="h-8 w-8 p-0 border rounded items-center justify-center flex"
                        onClick={() => setPageIndex(pageIndex - 1)}
                        disabled={pageIndex === 0}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <ChevronLeftIcon className="w-4 h-4" />
                    </button>
                    <button
                        className="h-8 w-8 p-0 border rounded items-center justify-center flex"
                        onClick={() => setPageIndex(pageIndex + 1)}
                        disabled={pageIndex >= pageCount - 1}
                    >
                        <span className="sr-only">Go to next page</span>
                        <ChevronRightIcon className="w-4 h-4" />
                    </button>
                    <button
                        className="hidden h-8 w-8 p-0 lg:flex border rounded items-center justify-center"
                        onClick={() => setPageIndex(pageCount - 1)}
                        disabled={pageIndex >= pageCount - 1}
                    >
                        <span className="sr-only">Go to last page</span>
                        <ChevronsRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </AppLayout>
    );
}