import { useState } from "react";
import Dilan from "@/components/element/dilan";
import { Button } from "@/components/ui/button"
import { DatePesan } from "@/components/pesan_buku";
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
import { Badge } from "@/components/ui/badge"
import type { Book } from '@/types';
import { SquareTerminal } from 'lucide-react';

const ProductInfoCard = ({ ...props }: { book: Book }) => {
    const [rating, setRating] = useState(0); // Add state for rating
    const { book } = props;

    return (
        <div className="max-w-100 mx-auto p-4">

            {/* Gambar Sampul */}
            <div className="border p-4 shadow rounded bg-white">
                <Dilan className="flex mb-4 border border-slate-700" />

                {/* Tag */}
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

                {/* Info Buku */}
                <div className="text-justify">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className="text-sm text-gray-600 mb-2">{book.publisher}</p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`cursor-pointer text-lg ${i < rating ? "text-yellow-500" : "text-gray-400"}`}
                                onClick={() => setRating(i + 1)}
                                aria-label={`Rate ${i + 1} star${i === 0 ? "" : "s"}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600">
                        {rating > 0
                            ? `You rated this book ${rating} star${rating > 1 ? "s" : ""}.`
                            : "Click on a star to rate this book!"}
                    </p>

                    {/* Review */}
                    <div className="mt-4">
                        <textarea
                            className="w-full border rounded p-2 text-sm"
                            rows={4}
                            placeholder="Write your review here..."
                        ></textarea>
                        <Button className="mt-2 bg-primary text-white">Submit Review</Button>
                    </div>

                    {/* Sinopsis */}
                    <details className="mb-4">
                        <summary className="cursor-pointer font-medium">Sinopsis</summary>
                        <p className="mt-2 text-sm">
                            {book.content}
                        </p>
                    </details>

                    <details className="mb-4">
                        <summary className="cursor-pointer font-medium bg-primary text-white px-4 py-2 rounded">
                            Pinjam Buku
                        </summary>
                        <div className="mt-2 border p-4 rounded shadow bg-white">
                            <h4 className="text-lg font-semibold mb-2">Tanggal peminjaman</h4>
                            <DatePesan />

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
                    </details>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoCard;
