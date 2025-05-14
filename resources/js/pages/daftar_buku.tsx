import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Book } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@inertiajs/react"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, SquareTerminal } from 'lucide-react';

// element
import Filter from '@/components/element/daftar_buku/filter';
import { Footer } from '@/components/element/footer';
import React from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


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
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Daftar Buku</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                <div className="flex gap-6">
                    <Filter />
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-4 space-x-5">
                            <Input
                                type="text"
                                placeholder="Search..."
                                className="w-full">
                            </Input>

                            <Button>SSD</Button>
                            <Button>SSD</Button>
                            <Button>SSD</Button>
                            <Button>SSD</Button>
                        </div>

                        {/*<Booklist />*/}
                        <div>
                            <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {paginatedBooks.map((book) => (
                                    <Card key={book.id} className="p-4 flex flex-col">

                                        <CardHeader className='flex-1'>
                                            <CardTitle>

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

                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className='flex-1'>
                                            <div className="content-center justify-center">
                                                <img alt={book.title}
                                                    className="object-cover w-full h-fit border border-slate-700 dark:border-slate-300" />
                                            </div>
                                        </CardContent>

                                        <CardFooter className='flex-1'>
                                            <p className='text-xl font-bold'>{book.title}</p>
                                        </CardFooter>

                                        <Button asChild>
                                            <Link href={route('book.show', book['id'])}>Pinjam</Link>
                                        </Button>
                                    </Card>
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

                    </div>
                </div>

            </div>

            <Footer />
        </AppLayout>
    );
}