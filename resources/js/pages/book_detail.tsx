import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Confirm from "@/components/element/confirm";
import { DatePesan } from "@/components/pesan_buku";
import type { Book } from "@/types";
import Category from "@/components/element/category";
import { Head } from "@inertiajs/react";

const ProductInfoCard = ({ book }: { book: Book }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const handleSubmitReview = () => {
        if (review.trim() === "") {
            alert("Ulasan tidak boleh kosong.");
            return;
        }

        console.log("Review sent:", { bookId: book.id, rating, review });

        setReview("");
        setRating(0);
        setSuccessMessage("✅ Ulasan Anda berhasil dikirim!");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
        <div className="min-h-screen p-5 bg-primary-50">
            <Head title="Detail Buku" />

            {/* Tombol Kembali */}
            <Button
                variant="outline"
                className="mb-6"
                onClick={() => window.location.href = route("dashboard")}
            >
                Kembali
            </Button>

            {/* Kartu Informasi Buku */}
            <Card className="flex flex-col md:flex-row overflow-hidden">
                {/* Gambar Buku */}
                <div className="md:w-1/3 w-full border-r border-gray-200 p-4 flex justify-center items-start bg-white">
                    <img src={`/storage/${book.cover}`}
                        alt={book.title}
                        className="object-cover w-full h-fit border border-slate-700 dark:border-slate-300" />
                </div>

                {/* Konten Buku */}
                <CardContent className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                    {/* Informasi Buku */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Category categories={Array.isArray(book.categories) ? book.categories : [book.categories]} />
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
                        <p className="text-sm text-gray-600 italic">{book.author}</p>
                        <p className="text-sm text-gray-500 mb-4">{book.publisher}</p>

                        {/* Sinopsis */}
                        <details className="mb-4">
                            <summary className="cursor-pointer font-semibold text-primary hover:underline">📖 Sinopsis</summary>
                            <p className="text-sm text-gray-700 mt-2">
                                {book.content.length > 300 ? book.content.slice(0, 300) + "..." : book.content}
                            </p>
                        </details>

                        {/* Rating */}
                        <div className="mb-4">
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`text-xl cursor-pointer transition ${i < rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                        onClick={() => setRating(i + 1)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                {rating > 0
                                    ? `Anda memberi rating ${rating} bintang`
                                    : "Klik bintang untuk memberi rating"}
                            </p>
                        </div>

                        {/* Ulasan */}
                        <Textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="mb-2"
                            rows={3}
                            placeholder="Tulis ulasan anda di sini..."
                        />
                        <Button onClick={handleSubmitReview} className="bg-primary text-white hover:bg-primary/90 transition">
                            Kirim Ulasan
                        </Button>

                        {successMessage && (
                            <p className="text-green-600 text-sm mt-2">{successMessage}</p>
                        )}
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
        </div>
    );
};

export default ProductInfoCard;
