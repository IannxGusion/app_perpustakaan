import Category from '@/components/element/category';
import Confirm from '@/components/element/confirm';
import { DatePesan } from '@/components/pesan_buku';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import type { Book } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const ProductInfoCard = ({ book }: { book: Book }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const handleSubmitReview = () => {
        if (review.trim() === '') {
            alert('Ulasan tidak boleh kosong.');
            return;
        }

        console.log('Review sent:', { bookId: book.id, rating, review });

        setReview('');
        setRating(0);
        setSuccessMessage('✅ Ulasan Anda berhasil dikirim!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="bg-primary-50 min-h-screen p-5">
            <Head title="Detail Buku" />

            {/* Tombol Kembali */}
            <Button variant="outline" className="mb-6" onClick={() => (window.location.href = route('dashboard'))}>
                Kembali
            </Button>

            {/* Kartu Informasi Buku */}
            <Card className="flex flex-col overflow-hidden md:flex-row">
                {/* Gambar Buku */}
                <div className="flex w-full items-start justify-center border-r border-gray-200 bg-white p-4 md:w-1/3">
                    <img
                        src={`/storage/${book.cover}`}
                        alt={book.title}
                        className="h-fit w-full border border-slate-700 object-cover dark:border-slate-300"
                    />
                </div>

                {/* Konten Buku */}
                <CardContent className="flex w-full flex-col justify-between p-6 md:w-2/3">
                    {/* Informasi Buku */}
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <Category categories={Array.isArray(book.categories) ? book.categories : [book.categories]} />
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
                        <p className="text-sm text-gray-600 italic">{book.author}</p>
                        <p className="mb-4 text-sm text-gray-500">{book.publisher}</p>

                        {/* Sinopsis */}
                        <details className="mb-4">
                            <summary className="text-primary cursor-pointer font-semibold hover:underline">📖 Sinopsis</summary>
                            <p className="mt-2 text-sm text-gray-700">
                                {book.content.length > 300 ? book.content.slice(0, 300) + '...' : book.content}
                            </p>
                        </details>

                        {/* Rating */}
                        <div className="mb-4">
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`cursor-pointer text-xl transition ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => setRating(i + 1)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="mt-1 text-sm text-gray-600">
                                {rating > 0 ? `Anda memberi rating ${rating} bintang` : 'Klik bintang untuk memberi rating'}
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
                        <Button onClick={handleSubmitReview} className="bg-primary hover:bg-primary/90 text-white transition">
                            Kirim Ulasan
                        </Button>

                        {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
                    </div>

                    {/* Formulir Peminjaman */}
                    <div className="mt-6">
                        <Separator className="mb-4" />
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">Formulir Peminjaman</h3>
                        <p className="mb-2 text-sm text-gray-600">Silakan pilih tanggal dan setujui S&K terlebih dahulu.</p>

                        {/* Checkbox S&K */}
                        <div className="mb-3 flex items-start space-x-2">
                            <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={() => setAgreedToTerms(!agreedToTerms)} />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                Saya menyetujui{' '}
                                <button onClick={() => setShowTerms(!showTerms)} className="text-blue-600 underline hover:text-blue-800">
                                    Syarat & Ketentuan
                                </button>
                            </label>
                        </div>

                        {/* Teks Syarat & Ketentuan */}
                        {showTerms && (
                            <div className="mb-4 rounded border border-gray-300 bg-gray-100 p-3 text-sm text-gray-700">
                                <h4 className="mb-2 font-semibold">Syarat & Ketentuan Peminjaman</h4>
                                <ul className="ml-5 list-disc space-y-1">
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
                            <p className="mb-4 text-sm text-red-500">❗ Anda harus menyetujui S&K untuk melanjutkan.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductInfoCard;
