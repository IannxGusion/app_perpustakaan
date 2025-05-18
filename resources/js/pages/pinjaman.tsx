import React from 'react';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Borrowing } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

import { Badge } from '@/components/ui/badge';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, SquareTerminal } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pinjaman',
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
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi Buku</h1>
            </section>

            {/* List */}
            <div className="space-y-7 mx-5">
                {paginatedBorrowings.map((borrowing) => (
                    <Card className='flex flex-row drop-shadow-lg hover:border-2 hover:border-black' key={borrowing.book.id}>
                        <CardHeader className='w-56'>
                            <img
                                src={borrowing.book.image}
                                alt={borrowing.book.title}
                                className="w-full h-full object-cover shadow border border-slate-700" />
                        </CardHeader>

                        <CardContent className="w-full h-full my-8">

                            <CardTitle>
                                <div className="flex items-center space-x-2">
                                    {borrowing.book.category ? (
                                        <Badge className="flex items-center px-2 py-1 text-sm font-medium text-white bg-black rounded">
                                            <SquareTerminal className="mr-1" size={16} />
                                            {borrowing.book.category.name}
                                        </Badge>
                                    ) : (
                                        <Badge className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded">
                                            Anonymous
                                        </Badge>
                                    )}
                                </div>
                            </CardTitle>

                            <CardDescription>

                                <Dialog>

                                    <DialogTrigger>
                                        <Button asChild variant={'ghost'} className='my-1 p-0 hover:cursor-pointer'>
                                            <h2 className="text-xl font-bold text-black">
                                                {borrowing.book.title}
                                            </h2>
                                        </Button>
                                    </DialogTrigger>

                                    <p>{borrowing.book.author}</p>

                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Info Buku</DialogTitle>
                                        </DialogHeader>

                                        <table className="min-w-full border border-gray-300">
                                            <tbody>
                                                <tr className="border-b border-gray-300">
                                                    <td className="px-4 py-2 font-medium text-gray-700">Judul</td>
                                                    <td className="px-4 py-2 text-gray-900">{borrowing.book.title}</td>
                                                </tr>
                                                <tr className="border-b border-gray-300">
                                                    <td className="px-4 py-2 font-medium text-gray-700">Genre</td>
                                                    <td className="px-4 py-2 text-gray-900">
                                                        {borrowing.book.category ? borrowing.book.category.name : "Anonymous"}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-300">
                                                    <td className="px-4 py-2 font-medium text-gray-700">Penulis</td>
                                                    <td className="px-4 py-2 text-gray-900">{borrowing.book.author}</td>
                                                </tr>
                                                <tr className="border-b border-gray-300">
                                                    <td className="px-4 py-2 font-medium text-gray-700">Penerbit</td>
                                                    <td className="px-4 py-2 text-gray-900">{borrowing.book.publisher}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-medium text-gray-700">Tgl. Terbit</td>
                                                    <td className="px-4 py-2 text-gray-900">{borrowing.book.publication_date}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </DialogContent>
                                </Dialog>

                            </CardDescription>

                            <CardAction className="w-full h-full">
                                <Button asChild className="w-full h-7 bg-primary rounded mt-3 text text-white" >
                                    <Link target="_blank" href={`borrowings/${borrowing.book.id}`}>Baca</Link>
                                </Button>
                            </CardAction>
                        </CardContent>
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

            <Footer />
        </AppLayout>
    );
}