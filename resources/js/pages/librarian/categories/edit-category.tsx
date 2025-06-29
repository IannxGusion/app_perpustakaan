import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import CSRF from '@/components/element/csrf';
import type { Categories } from '@/types';

export default function Edit({ category }: { category: Categories}) {
    return (
        <div className="flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle>Edit Kategori</CardTitle>
                    <CardDescription className="mb-5">
                        <h1>Update informasi kategori</h1>
                    </CardDescription>
                </CardHeader>

                <form action={route('categories.update', category.id)} method="POST" encType="multipart/form-data">
                    <CSRF />
                    <input type="hidden" name="_method" value="PUT" />

                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="name">Nama</Label>
                            <Input id="name" name="name" placeholder="Masukkan nama kategori" defaultValue={category.name} />
                        </div>

                        <div>
                            <Label htmlFor="description">Deskripsi</Label>
                            <Input id="description" name="description" placeholder="Masukkan deskripsi kategori" defaultValue={category.description} />
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
