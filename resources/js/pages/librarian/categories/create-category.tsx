import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import CSRF from '@/components/element/csrf';

export default function Create() {
    return (
        <div className="flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle>Tambah kategori</CardTitle>
                </CardHeader>

                <form action={route('categories.store')} method="POST" encType="multipart/form-data">
                    <CSRF />

                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="name">Nama</Label>
                            <Input id="name" name="name" placeholder="Masukkan nama kategori" />
                        </div>

                        <div>
                            <Label htmlFor="description">Deskripsi</Label>
                            <Input id="description" name="description" placeholder="Masukkan deskripsi kategori"/>
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
