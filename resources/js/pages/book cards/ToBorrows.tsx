import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Confirm from "@/components/element/confirm";
import { DatePesan } from "@/components/pesan_buku";
import type { Book } from "@/types";
import Category from "@/components/element/category";
import { Head } from "@inertiajs/react";
import CSRF from "@/components/element/csrf";
import { Button } from "@mui/material";
import { toast } from "sonner";

export default function ProductInfoCard({ book }: { book: Book }) {
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            <Head title="Detail Buku" />

            {/* Kartu Informasi Buku */}
            <Card className="flex flex-col md:flex-row overflow-hidden w-full">
                {/* Gambar Buku */}
                <div className="md:w-1/3 w-full border-r border-gray-200 p-4 flex justify-center items-start bg-white">
                    <img src={`/storage/${book.cover}`}
                        alt={book.title.length > 50 ? book.title.slice(0, 50) + "..." : book.title}
                        className="object-cover w-full h-fit border border-slate-700 dark:border-slate-300" />
                </div>

                {/* Konten Buku */}
                <CardContent className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                    {/* Informasi Buku */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Category categories={Array.isArray(book.categories) ? book.categories : [book.categories]} />
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800">
                            {book.title.length > 50 ? book.title.slice(0, 50) + "..." : book.title}
                        </h1>
                        <p className="text-sm text-gray-600 italic">{book.author}</p>
                        <p className="text-sm text-gray-500 mb-4">{book.publisher}</p>

                        {/* Sinopsis */}
                        <details className="mb-4">
                            <summary className="cursor-pointer font-semibold text-primary hover:underline">📖 Sinopsis</summary>
                            <p className="text-sm text-gray-700 mt-2">
                                {book.content.length > 300 ? book.content.slice(0, 300) + "..." : book.content}
                            </p>
                        </details>

                        <form action={route("reviews.store", book.id)} method="POST" encType="multipart/form-data">
                            {/* CSRF */}
                            <CSRF />

                            <input type="hidden" name="book_id" id="book_id" value={book.id} required />
                            <Button type="submit" onClick={() => toast.success("Ulasan terkrim!")}>
                                Submit
                            </Button>
                        </form>
                    </div>

                    {/* Formulir Peminjaman */}
                    <div className="mt-6">
                        <Separator className="mb-4" />
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Formulir Peminjaman</h3>
                        <p className="text-sm text-gray-600 mb-2">Silakan pilih tanggal dan setujui S&K terlebih dahulu.</p>

                        {/* Checkbox S&K */}
                        <div className="mb-3 flex items-start space-x-2">
                            <Checkbox
                                id="terms"
                                checked={agreedToTerms}
                                onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                Saya menyetujui{" "}
                                <button
                                    onClick={() => setShowTerms(!showTerms)}
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    Syarat & Ketentuan
                                </button>
                            </label>
                        </div>

                        {/* Teks Syarat & Ketentuan */}
                        {showTerms && (
                            <div className="text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded p-3 mb-4">
                                <h4 className="font-semibold mb-2">Syarat & Ketentuan Peminjaman</h4>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Buku hanya dapat dipinjam selama maksimal 30 hari.</li>
                                    <li>Peminjam bertanggung jawab atas peminjaman buku.</li>
                                    <li>Jika buku kosong/error, langsung hubungi pihak admin.</li>
                                    <li>Pengembalian lewat batas waktu akan dikenakan denda.</li>
                                    <li>Setelah buku dipinjam, maka harus dikembalikan sesuai tanggal yang sudah ditentukan.</li>
                                </ul>
                            </div>
                        )}

                        {/* Date Picker dan Konfirmasi */}
                        {agreedToTerms ? (
                            <>
                                <div className="mb-4">
                                    <DatePesan />
                                </div>
                                <Confirm book={book} />
                            </>
                        ) : (
                            <p className="text-red-500 text-sm mb-4">❗ Anda harus menyetujui S&K untuk melanjutkan.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
