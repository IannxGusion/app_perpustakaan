import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import CSRF from '@/components/element/csrf';
import { Textarea } from '@/components/ui/textarea';
import type { Book, Categories } from '@/types';

type EditProps = {
    book?: Book;
    categories?: Categories[];
};

export default function Edit({ book, categories = [] }: EditProps) {
    if (!book) {
        return <div className="p-6 text-center text-gray-600">Undefined book data...</div>;
    }

    return (
        <div className="flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle>Edit Buku</CardTitle>
                    <CardDescription className="mb-5">
                        <h1>Update informasi buku</h1>
                    </CardDescription>
                </CardHeader>

                <form action={route('admin.books.update', book.id)} method="POST" encType="multipart/form-data">
                    <CSRF />
                    <input type="hidden" name="_method" value="PUT" />

                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="title">Judul</Label>
                            <Input id="title" name="title" placeholder="Masukkan judul buku" defaultValue={book.title} />
                        </div>

                        <div>
                            <Label htmlFor="content">Konten buku</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Masukkan Konten buku"
                                defaultValue={book.content.length > 150 ? book.content.slice(0, 150) + '...' : book.content}
                            />
                        </div>

                        <div>
                            <Label htmlFor="cover">Sampul</Label>
                            <Input id="cover" name="cover" type="file" />
                        </div>

                        <div>
                            <Label htmlFor="author">Penulis</Label>
                            <Input id="author" name="author" placeholder="Masukkan nama penulis" defaultValue={book.author} />
                        </div>

                        <div>
                            <Label htmlFor="publisher">Penerbit</Label>
                            <Input id="publisher" name="publisher" placeholder="Masukkan nama penerbit" defaultValue={book.publisher} />
                        </div>
                    </CardContent>

                    <CardFooter className="mt-5 flex justify-end">
                        <Button type="submit">Simpan</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
