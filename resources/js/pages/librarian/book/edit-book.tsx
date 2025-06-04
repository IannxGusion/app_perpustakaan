import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import CSRF from '@/components/element/csrf';
import { Textarea } from '@/components/ui/textarea';
import type { Book, Categories } from '@/types';

import TableInfo from '@/components/element/table-info';

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

                    <CardTitle className="mb-1 italic">
                        <h2>info saat ini</h2>
                    </CardTitle>

                    {/* TableInfo */}
                    <TableInfo book={book} />
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

                        <div>
                            <Label htmlFor="publication_date">Tgl. Terbit</Label>
                            <Input id="publication_date" name="publication_date" type="date" defaultValue={book.publication_date} />
                        </div>

                        <div>
                            <Label htmlFor="category_ids">Kategori</Label>
                            <div className="flex flex-col gap-2">
                                {categories.map((category, idx) => (
                                    <label key={category.id} className="flex items-center gap-2">
                                        <Checkbox
                                            name="category_ids[]"
                                            value={category.id}
                                            defaultChecked={
                                                (Array.isArray(book.categories) && book.categories.some((c) => c.id === category.id)) ||
                                                // If no categories are checked, check the first one by default
                                                ((!Array.isArray(book.categories) || book.categories.length === 0) && idx === 0)
                                            }
                                            required={idx === 0}
                                        />
                                        <span>{category.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="status">Status</Label>

                            <Select name="status" defaultValue={book.status}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Available">Available</SelectItem>
                                    <SelectItem value="Not Available">Not Available</SelectItem>
                                </SelectContent>
                            </Select>
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
