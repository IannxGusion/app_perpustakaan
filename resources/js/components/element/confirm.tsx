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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import type { Book } from '@/types';
import { toast } from 'sonner';
import CSRF from './csrf';

export default function Confirm({ book }: { book: Book }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="mt-4 w-full hover:cursor-pointer">
                <Button variant="outline" className="bg-primary text-white">
                    Pinjam Buku
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Konfirmasi</AlertDialogTitle>
                    <AlertDialogDescription>Apakah Anda yakin ingin meminjam buku ini?</AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel type="button">Batal</AlertDialogCancel>

                    <form action={route('borrowings.store', book.id)} method="POST" encType="multipart/form-data">
                        {/* CSRF */}
                        <CSRF />

                        <input type="hidden" name="book_id" id="book_id" value={book.id} required />
                        <AlertDialogAction type="submit" onClick={() => toast.success('Anda telah berhasil meminjam buku di perpustakaan kami!!')}>
                            Pinjam
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
