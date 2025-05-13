import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Sk() {

    return (
        <div className="flex h-screen justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Syarat dan Ketentuan</CardTitle>
                    <CardDescription>
                        Dengan meminjam buku ini, Anda setuju untuk mematuhi semua syarat dan ketentuan yang berlaku. Pastikan untuk mengembalikan buku tepat waktu dan dalam kondisi baik.
                        <br />
                        <br />
                        Jika Anda tidak setuju dengan syarat dan ketentuan ini, silakan batalkan peminjaman.
                    </CardDescription>
                </CardHeader>

                <form action={route("borrow.store")} method="POST" encType="multipart/form-data">
                    {/* CSRF */}
                    <input
                        type="hidden"
                        name="_token"
                        value={typeof window !== "undefined" ? (document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '') : ''}
                    />
                    
                    <input type="hidden" name="book_id" id="book_id" value={1} required />
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">
                            confirm
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}