import Bleach from '@/components/element/Bleach';
import Confirm from '@/components/element/confirm';
import { DatePesan } from '@/components/pesan_buku';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Book } from '@/types';
import { SquareTerminal } from 'lucide-react';
import { useState } from 'react';

const ProductInfoCard = ({ ...props }: { book: Book }) => {
    const { book } = props;
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
        <div className="bg-primary-50 min-h-screen p-6">
            {/* Tombol Kembali */}
            <Button variant="outline" className="mb-6" onClick={() => (window.location.href = route('dashboard'))}>
                Kembali
            </Button>

            {/* Kartu Informasi */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md md:flex-row">
                {/* Gambar */}
                <div className="flex w-full items-start justify-center border-r border-gray-200 bg-white p-4 md:w-1/3">
                    <Bleach className="h-auto w-full rounded-md border object-cover" />
                </div>

                {/* Konten */}
                <div className="flex w-full flex-col justify-between p-6 md:w-2/3">
                    {/* Informasi Buku */}
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            {book.category ? (
                                <Badge className="flex items-center rounded-full bg-black px-3 py-1 text-xs text-white">
                                    <SquareTerminal className="mr-1" size={14} />
                                    {book.category.name}
                                </Badge>
                            ) : (
                                <Badge className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-800">Anonymous</Badge>
                            )}
                        </div>

                        <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
                        <p className="text-sm text-gray-600 italic">{book.author}</p>
                        <p className="mb-4 text-sm text-gray-500">{book.publisher}</p>

                        {/* Sinopsis */}
                        <details className="mb-4">
                            <summary className="text-primary cursor-pointer font-semibold hover:underline">📖 Sinopsis</summary>
                            <p className="mt-2 text-sm text-gray-700">{book.content}</p>
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

                        {/* Review */}
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="mb-2 w-full rounded-md border p-2 text-sm"
                            rows={3}
                            placeholder="Tulis ulasan anda di sini..."
                        />
                        <Button onClick={handleSubmitReview} className="bg-primary hover:bg-primary/90 text-white transition">
                            Kirim Ulasan
                        </Button>

                        {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
                    </div>

                    {/* Peminjaman Buku */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">Formulir Peminjaman</h3>
                        <p className="mb-2 text-sm text-gray-600">Silakan pilih tanggal dan setujui S&K terlebih dahulu.</p>

                        {/* Checkbox S&K */}
                        <div className="mb-3 flex items-start space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1"
                                checked={agreedToTerms}
                                onChange={() => setAgreedToTerms(!agreedToTerms)}
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                Saya menyetujui{' '}
                                <button onClick={() => setShowTerms(!showTerms)} className="text-blue-600 underline hover:text-blue-800">
                                    Syarat & Ketentuan
                                </button>
                            </label>
                        </div>

                        {/* Text Syarat & Ketentuan */}
                        {showTerms && (
                            <div className="mb-4 rounded border border-gray-300 bg-gray-100 p-3 text-sm text-gray-700">
                                <h4 className="mb-2 font-semibold">Syarat & Ketentuan Peminjaman</h4>
                                <ul className="ml-5 list-disc space-y-1">
                                    <li>Buku hanya dapat dipinjam selama maksimal 30 hari.</li>
                                    <li>Peminjam bertanggung jawab atas peminjaman buku.</li>
                                    <li>Jika buku kosong/error, langsung hubungi pihak admin.</li>
                                    <li>Pengembalian lewat batas waktu akan dikenakan denda.</li>
                                    <li>Setelah buku di pinjam, maka harus di kembalikan sesuai tanggal yang sudah di tentukan.</li>
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
                </div>
            </div>
        </div>
    );
};

export default ProductInfoCard;
