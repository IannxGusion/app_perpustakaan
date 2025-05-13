import React from 'react';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

import type { Book } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, SquareTerminal } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function KoleksiBuku({ ...props }: { books: Book[] }) {
    const { books } = props;

    // Pagination state
    const [pageIndex, setPageIndex] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(10);

    // Calculate paginated books
    const pageCount = Math.ceil(books.length / pageSize);
    const paginatedBooks = books.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi Buku</h1>
            </section>

            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                <div className="space-y-6">
                    {paginatedBooks.map((book) => (
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

                                    <h2 className="text-xl font-bold">{book.title}</h2>
                                    <p className="text-sm text-gray-600">{book.author}</p>
                                    <p className="text-sm text-gray-600">{book.publisher}</p>
                                </div>
                                <button className="w-full h-7 bg-primary rounded mt-3 text text-white">Baca</button>
                            </div>
                        </div>
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
            </div>

            <Footer />
        </AppLayout>
    );
}
