import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePesan } from "@/components/pesan_buku";
import { Badge } from "@/components/ui/badge";
import type { Book } from "@/types";
import { SquareTerminal } from "lucide-react";
import Sadako from "@/components/element/sadako";
import Confirm from "@/components/element/confirm";

const ProductInfoCard = ({ ...props }: { book: Book }) => {
  const { book } = props;
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
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Tombol Kembali */}
      <Button
        variant="outline"
        className="mb-6"
        onClick={() => window.location.href = route("dashboard")}
      >
        ← Kembali
      </Button>

      {/* Kartu Informasi */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Gambar */}
        <div className="md:w-1/3 w-full border-r border-gray-200 p-4 flex justify-center items-start bg-white">
          <Sadako className="w-full h-auto rounded-md object-cover border" />
        </div>

        {/* Konten */}
        <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
          {/* Informasi Buku */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {book.category ? (
                <Badge className="bg-black text-white text-xs rounded-full px-3 py-1 flex items-center">
                  <SquareTerminal className="mr-1" size={14} />
                  {book.category.name}
                </Badge>
              ) : (
                <Badge className="bg-gray-200 text-gray-800 text-xs rounded-full px-3 py-1">Anonymous</Badge>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
            <p className="text-sm text-gray-600 italic">{book.author}</p>
            <p className="text-sm text-gray-500 mb-4">{book.publisher}</p>

            {/* Sinopsis */}
            <details className="mb-4">
              <summary className="cursor-pointer font-semibold text-primary hover:underline">📖 Sinopsis</summary>
              <p className="text-sm text-gray-700 mt-2">{book.content}</p>
            </details>

            {/* Rating */}
            <div className="mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl cursor-pointer transition ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
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

            {/* Review */}
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border rounded-md p-2 text-sm mb-2"
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

          {/* Peminjaman Buku */}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Formulir Peminjaman</h3>
            <p className="text-sm text-gray-600 mb-2">Silakan pilih tanggal dan setujui S&K terlebih dahulu.</p>

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
                Saya menyetujui{" "}
                <button
                  onClick={() => setShowTerms(!showTerms)}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Syarat & Ketentuan
                </button>
              </label>
            </div>

            {/* Text Syarat & Ketentuan */}
            {showTerms && (
              <div className="text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded p-3 mb-4">
                <h4 className="font-semibold mb-2">Syarat & Ketentuan Peminjaman</h4>
                <ul className="list-disc ml-5 space-y-1">
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
              <p className="text-red-500 text-sm mb-4">❗ Anda harus menyetujui S&K untuk melanjutkan.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
