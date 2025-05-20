import { Button } from "@/components/ui/button";
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

import type { Book } from '@/types';
import CSRF from "./csrf";

export default function Confirm({ book }: { book: Book }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className='w-full mt-4 hover:cursor-pointer'>
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
                    <AlertDialogCancel type="button">Batal</AlertDialogCancel>

                    <form action={route("borrow.store")} method="POST" encType="multipart/form-data">
                        {/* CSRF */}
                        <CSRF />

                        <input type="hidden" name="book_id" id="book_id" value={book.id} required />
                        <AlertDialogAction type="submit" onClick={() => {
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
    )
}