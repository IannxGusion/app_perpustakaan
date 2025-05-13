import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type { Book } from '@/types';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@inertiajs/react"
import { SquareTerminal } from 'lucide-react';

// element
import { Footer } from '@/components/element/footer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Daftar Buku',
        href: '/daftar_buku',
    },
    {
        title: 'Pinjam Buku',
        href: '/pinjam_buku',
    },
];

const reviews = [
    {
        title: "Review title",
        body: "Review body",
        reviewer: "Reviewer name",
        date: "Date",
        rating: 0,
    },
    {
        title: "Review title",
        body: "Review body",
        reviewer: "Reviewer name",
        date: "Date",
        rating: 0,
    },
    {
        title: "Review title",
        body: "Review body",
        reviewer: "Reviewer name",
        date: "Date",
        rating: 0,
    },
];

export default function Dashboard({ book }: { book: Book }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pinjam Buku" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Pinjam Buku</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                {/* Content */}
                <main className="max-w-6xl mx-auto p-6">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
                        {/* Book Image */}
                        <div className="flex">
                            <img
                                src="#" // Ganti sesuai lokasi gambar
                                alt={book.title}
                                className="w-64 h-auto border border-slate-700"
                            />
                        </div>

                        {/* Book Info */}
                        <div className="flex flex-col justify-between w-full">
                            <div>

                                <div className="flex items-center space-x-2">
                                    {book.category ? (
                                        <Badge className="flex items-center px-2 py-1 text-sm font-medium text-white bg-sky-300 rounded">
                                            <SquareTerminal className="mr-1" size={16} />
                                            {book.category.name}
                                        </Badge>
                                    ) : (
                                        <Badge className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded">
                                            Anonymous
                                        </Badge>
                                    )}
                                </div>

                                <h2 className="text-2xl font-semibold mt-2">
                                    <Link href={route('book.detail', book['id'])}>
                                        {book.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 text-sm">{book.publisher}</p>
                                <p className="text-gray-600 text-sm">{book.publication_date}</p>

                                <AlertDialog>
                                    <AlertDialogTrigger asChild className='w-full mt-4'>
                                        <Button variant="outline" className="bg-primary text-white">Pinjam Buku</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>

                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Syarat dan Ketentuan</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Dengan meminjam buku ini, Anda setuju untuk mematuhi semua syarat dan ketentuan yang berlaku. Pastikan untuk mengembalikan buku tepat waktu dan dalam kondisi baik.
                                                <br />
                                                <br />
                                                Jika Anda tidak setuju dengan syarat dan ketentuan ini, silakan batalkan peminjaman.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>

                                        <AlertDialogFooter>
                                            <AlertDialogCancel type="button">Cancel</AlertDialogCancel>

                                            <form action={route("borrow.store")} method="POST" encType="multipart/form-data">
                                                {/* CSRF */}
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    value={typeof window !== "undefined" ? (document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '') : ''}
                                                />
                                                <input type="hidden" name="book_id" id="book_id" value={book.id} required />
                                                <AlertDialogAction type="submit"
                                                    onClick={() => {
                                                        localStorage.setItem('alertMessage', JSON.stringify({
                                                            message: 'Buku berhasil dipinjam!',
                                                            timestamp: new Date().toISOString()
                                                        }));
                                                        // Display a toast notification instead of an alert
                                                        const toast = document.createElement('div');
                                                        toast.textContent = ' Anda telah berhasil meminjam buku di perpustakaan kami!!';
                                                        toast.style.position = 'fixed';
                                                        toast.style.bottom = '20px';
                                                        toast.style.right = '20px';
                                                        toast.style.backgroundColor = '#004380';
                                                        toast.style.color = 'white';
                                                        toast.style.padding = '10px 20px';
                                                        toast.style.borderRadius = '5px';
                                                        toast.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
                                                        document.body.appendChild(toast);
                                                        setTimeout(() => {
                                                            document.body.removeChild(toast);
                                                        }, 3000);
                                                    }}
                                                    >Pinjam
                                                </AlertDialogAction>
                                            </form>

                                        </AlertDialogFooter>

                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>

                            {/* Sinopsis */}
                            <div className="mt-6 border rounded p-3 bg-gray-50">
                                <h3 className="font-semibold mb-1">Sinopsis</h3>
                                <p className="text-sm text-gray-700">
                                    {book.content}
                                </p>
                                Pinjam
                            </div>
                        </div>
                    </div>

                    {/* Reviews */}
                    <section className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">
                            Latest reviews (Ulasan terbaru)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {reviews.map((review, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-4 rounded shadow-sm border"
                                >
                                    <div className="text-yellow-400 mb-1 text-lg">
                                        {"★".repeat(review.rating)}
                                        {"☆".repeat(5 - review.rating)}
                                    </div>
                                    <h4 className="font-semibold">{review.title}</h4>
                                    <p className="text-sm text-gray-600">{review.body}</p>
                                    <div className="text-xs text-gray-400 mt-2">
                                        {review.reviewer} • {review.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div >

            <Footer />
        </AppLayout >
    );
}
