import Category from '@/components/element/category';
import Confirm from '@/components/element/confirm';
import CSRF from '@/components/element/csrf';
import HeadingSmall from '@/components/heading-small';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import type { Book } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ProductInfoCard({ book }: { book: Book }) {
    const [value, setValue] = React.useState<number | null>(0);

    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            <Head title="Detail Buku" />

            {/* Kartu Informasi Buku */}
            <Card className="flex w-full flex-col overflow-hidden md:flex-row">
                {/* Gambar Buku */}
                <div className="flex w-full items-start justify-center border-r p-4 md:w-1/3 dark:border-white">
                    <img
                        src={`/storage/${book.cover}`}
                        alt={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
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

                        <h1 className="text-2xl font-bold">{book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}</h1>
                        <p className="text-sm italic">{book.author}</p>
                        <p className="mb-4 text-sm">{book.publisher}</p>

                        {/* Sinopsis */}
                        <details className="mb-4">
                            <summary className="text-primary cursor-pointer font-semibold hover:underline">📖 Sinopsis</summary>
                            <p className="mt-2 text-sm">{book.content.length > 300 ? book.content.slice(0, 300) + '...' : book.content}</p>
                        </details>

                        <form className="space-y-1" action={route('reviews.store', book.id)} method="POST" encType="multipart/form-data">
                            {/* CSRF */}
                            <CSRF />

                            <Label htmlFor="star">
                                <HeadingSmall title={'Ulas buku ini'} />
                            </Label>
                            <Box>
                                <Rating
                                    name="star"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <input type="hidden" name="star" value={value ?? 0} />
                            </Box>
                            <Textarea className="dark:border-2 dark:border-white" placeholder="Tulis Ulasan..." name="comment" />
                            <Button type="submit" onClick={() => toast.success('Ulasan terkirim!')}>
                                Submit
                            </Button>
                        </form>
                    </div>

                    {/* Formulir Peminjaman */}
                    <div className="mt-6">
                        <Separator className="mb-4" />
                        <h3 className="mb-2 text-lg font-semibold">Formulir Peminjaman</h3>
                        <p className="mb-2 text-sm">Silakan pilih tanggal dan setujui S&K terlebih dahulu.</p>

                        {/* Checkbox S&K */}
                        <div className="mb-3 flex items-start space-x-2">
                            <Checkbox
                                id="terms"
                                className="dark:border-white"
                                checked={agreedToTerms}
                                onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
                            />
                            <label htmlFor="terms" className="text-sm">
                                Saya menyetujui{' '}
                                <button onClick={() => setShowTerms(!showTerms)} className="text-blue-600 underline hover:text-blue-800">
                                    Syarat & Ketentuan
                                </button>
                            </label>
                        </div>

                        {/* Teks Syarat & Ketentuan */}
                        {showTerms && (
                            <div className="mb-4 rounded border border-gray-300 bg-gray-100 p-3 text-sm dark:bg-gray-700">
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
                                <Confirm book={book} />
                            </>
                        ) : (
                            <p className="mb-4 text-sm text-red-500">❗ Anda harus menyetujui S&K untuk melanjutkan.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
