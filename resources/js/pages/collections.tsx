import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Borrowing } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

import { Badge } from '@/components/ui/badge';
import { SquareTerminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Koleksi Buku',
        href: '/koleksi_buku',
    },
];

export default function KoleksiBuku({ ...props }: { borrowings: Borrowing[] }) {
    const { borrowings } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi Buku</h1>
            </section>


            <div className="space-y-6 mx-5">
                {borrowings.map((borrowing) => (
                    <div
                        key={borrowing.book.id}
                        className="flex space-x-6 bg-white px-4 py-4 rounded-lg items-start shadow-2xl"
                    >
                        <img
                            src={borrowing.book.image}
                            alt={borrowing.book.title}
                            className="w-28 h-40 object-cover shadow border border-slate-700"
                        />
                        <div className="flex flex-col justify-between flex-1">
                            <div>
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

                                <Dialog>

                                    <DialogTrigger asChild>
                                        <button>
                                            <h2 className="text-xl font-bold">
                                                {borrowing.book.title}
                                            </h2>
                                        </button>
                                    </DialogTrigger>

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

                                <p className="text-sm text-gray-600">{borrowing.book.author}</p>
                            </div>
                            <Button asChild className="w-full h-7 bg-primary rounded mt-3 text text-white" >
                                <Link target="_blank" href={`koleksi_buku/${borrowing.book.id}`}>Baca</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </AppLayout>
    );
}