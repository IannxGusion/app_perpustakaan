import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogAction
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Borrowing } from "@/types"
import CSRF from "./csrf"

export default function Collect({ borrowing }: { borrowing: Borrowing }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Simpan</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-[425px]">
                <AlertDialogHeader>
                    <h1 className="font-extrabold text-2xl">{borrowing.book.title}</h1>
                    <hr />
                    <AlertDialogTitle>Simpan ke koleksi</AlertDialogTitle>
                    <AlertDialogDescription>
                        Simpan buku ini ke koleksi Anda untuk referensi di masa mendatang.
                        Anda dapat mengaksesnya kapan saja melalui halaman koleksi Anda.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <form action={route("collections.store", borrowing.id)} method="POST" encType="multipart/form-data">
                    {/* CSRF */}
                    <CSRF />

                    <input type="hidden" name="book_id" id="book_id" value={borrowing.book.id} required />
                    <div className="grid gap-4 py-4">
                        <Label htmlFor="collection_name">
                            Nama Koleksi
                        </Label>
                        <Input
                            id="collection_name"
                            name="collection_name"
                            defaultValue="New collection"
                            className="col-span-3" />
                    </div>

                    <AlertDialogFooter>
                        <AlertDialogCancel type="button">Batal</AlertDialogCancel>
                        <AlertDialogAction type="submit">Simpan</AlertDialogAction>
                    </AlertDialogFooter>
                </form>

            </AlertDialogContent>
        </AlertDialog>
    )
}