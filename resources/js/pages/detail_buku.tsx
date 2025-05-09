import React, { useState } from "react";
import Image from "@/components/image";
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
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

const ProductInfoCard = () => {
    const [rating, setRating] = useState(0); // Add state for rating

    return (
        <div className="max-w-100 mx-auto p-4">
            <h2 className="text-gray-400 text-sm mb-2">Product Info Card</h2>

            {/* Gambar Sampul */}
            <div className="border p-4 shadow rounded bg-white">
                <Image className="flex mb-4" />

                {/* Tag */}
                <div className="flex space-x-2 mb-4">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">School</span>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">Romance</span>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">Action</span>
                </div>

                {/* Info Buku */}
                <div className="text-justify">
                    <h3 className="text-lg font-semibold">Dilan - Dia Adalah Dilanku Tahun 1990</h3>
                    <p className="text-sm text-gray-600">pidi baiq</p>
                    <p className="text-sm text-gray-600 mb-2">pastel books</p>

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
                            Milea (Vanesha Prescilla) bertemu dengan Dilan (Iqbaal Ramadhan) di sebuah SMA di Bandung. Itu adalah tahun 1990, saat Milea pindah dari Jakarta ke Bandung. Perkenalan yang tidak biasa kemudian membawa Milea mulai mengenal keunikan Dilan lebih jauh. Dilan yang pintar, baik hati dan romantis... semua dengan caranya sendiri. Cara Dilan mendekati Milea tidak sama dengan teman-teman lelakinya yang lain, bahkan Beni, pacar Milea di Jakarta. Bahkan cara berbicara Dilan yang terdengar kaku, lambat laun justru membuat Milea kerap merindukannya jika sehari saja ia tak mendengar suara itu. Perjalanan hubungan mereka tak selalu mulus. Beni, gank motor, tawuran, Anhar, Kang Adi, semua mewarnai perjalanan itu. Dan Dilan... dengan caranya sendiri...selalu bisa membuat Milea percaya ia bisa tiba di tujuan dengan selamat. Tujuan dari perjalanan ini. Perjalanan mereka berdua. Katanya, dunia SMA adalah dunia paling indah. Dunia Milea dan Dilan satu tingkat lebih indah daripada itu.
                            Gambar, Dilan 1990
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
                                    <AlertDialogTrigger asChild>
                                        <Button className="bg-primary text-white">Pinjam</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Konfirmasi Peminjaman</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Apakah Anda yakin ingin meminjam buku ini?
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction asChild>
                                                <Link
                                                    href={route('dashboard')}
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
                                                >
                                                    Pinjam
                                                </Link>
                                            </AlertDialogAction>
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
