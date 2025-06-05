import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from '@/types';

import Category from '@/components/element/category';
import { Link } from '@inertiajs/react';

export default function ToBooks({ book }: { book: Book }) {
    return (
        <Card
            key={book.id}
            className="flex flex-col p-4"
        >
            <CardHeader className="flex-1">
                <div className="flex items-center space-x-2">
                    <Category categories={Array.isArray(book.categories) ? book.categories : [book.categories]} />
                </div>
            </CardHeader>

            <CardContent className="flex-1">
                <div className="content-center justify-center">
                    <img
                        src={`/storage/${book.cover}`}
                        alt={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
                        className="h-fit w-full border border-slate-700 object-cover dark:border-slate-300"
                    />
                </div>
            </CardContent>

            <CardFooter className="flex-1">
                <CardTitle>
                    <p className="text-xl font-bold">{book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}</p>
                </CardTitle>
            </CardFooter>

            {book.status === 'Available' && (
                <Button asChild>
                    <Link href={route('books.show', book['id'])}>Pinjam</Link>
                </Button>
            )}

            {book.status === 'Not Available' && <Button variant={'ghost'}>Tidak tersedia</Button>}
        </Card>
    );
}
