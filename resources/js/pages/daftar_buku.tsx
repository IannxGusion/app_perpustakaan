import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Book } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';

// element
import Filter from '@/pages/book cards/filter';
import React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ToDaftar from '@/pages/book cards/ToBooks';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Daftar({ ...props }: { books: Book[] }) {
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
            <section className="mt-4 bg-cover bg-center px-4 py-12 text-center" style={{ backgroundImage: "url('/images/8.jpg')" }}>
                <h1 className="text-4xl font-bold text-white">Daftar Buku</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col p-4">
                <div className="flex gap-6">
                    <Filter />
                    <div className="flex-1">
                        <div className="mb-4 flex items-center justify-between space-x-5">
                            <Input type="text" placeholder="Search..." className="w-full"></Input>

                            <Button>SSD</Button>
                            <Button>SSD</Button>
                            <Button>SSD</Button>
                            <Button>SSD</Button>
                        </div>

                        {/*<Booklist />*/}
                        <div>
                            <div className="grid w-full gap-5 border-b-2 pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {paginatedBooks.map((book) => (
                                    <ToDaftar book={book} />
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            <div className="mt-4 flex items-center justify-between px-4">
                                <div className="flex items-center gap-2">
                                    <label htmlFor="rows-per-page" className="text-sm font-extrabold">
                                        Item per halaman
                                    </label>

                                    <Select
                                        value={String(pageSize)}
                                        onValueChange={(value) => {
                                            setPageSize(Number(value));
                                            setPageIndex(0);
                                        }}
                                    >
                                        <SelectTrigger className="w-fit">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent id="rows-per-page" className="w-20 rounded border px-2 py-1">
                                            {[5, 10, 20, 30, 40, 50].map((size) => (
                                                <SelectItem key={size} value={String(size)}>
                                                    {size}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex w-fit items-center justify-center text-sm font-extrabold">
                                    Halaman {pageIndex + 1} dari {pageCount}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="hidden h-8 w-8 items-center justify-center rounded border p-0 lg:flex"
                                        onClick={() => setPageIndex(0)}
                                        disabled={pageIndex === 0}
                                    >
                                        <span className="sr-only">Go to first page</span>
                                        <ChevronsLeftIcon className="h-4 w-4" />
                                    </button>
                                    <button
                                        className="flex h-8 w-8 items-center justify-center rounded border p-0"
                                        onClick={() => setPageIndex(pageIndex - 1)}
                                        disabled={pageIndex === 0}
                                    >
                                        <span className="sr-only">Go to previous page</span>
                                        <ChevronLeftIcon className="h-4 w-4" />
                                    </button>
                                    <button
                                        className="flex h-8 w-8 items-center justify-center rounded border p-0"
                                        onClick={() => setPageIndex(pageIndex + 1)}
                                        disabled={pageIndex >= pageCount - 1}
                                    >
                                        <span className="sr-only">Go to next page</span>
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </button>
                                    <button
                                        className="hidden h-8 w-8 items-center justify-center rounded border p-0 lg:flex"
                                        onClick={() => setPageIndex(pageCount - 1)}
                                        disabled={pageIndex >= pageCount - 1}
                                    >
                                        <span className="sr-only">Go to last page</span>
                                        <ChevronsRightIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
