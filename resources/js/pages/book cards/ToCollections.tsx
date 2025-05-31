import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from '@/types';

import Category from '@/components/element/category';
import { Link } from '@inertiajs/react';

export default function ToCollections({ book }: { book: Book }) {
    return (
        <Card
            key={book.id}
            className="flex flex-col p-4 drop-shadow-sm hover:border-2 hover:border-black hover:drop-shadow-none dark:hover:border-2 dark:hover:border-white dark:hover:drop-shadow-none"
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
                        alt={book.title}
                        className="h-fit w-full border border-slate-700 object-cover dark:border-slate-300"
                    />
                </div>
            </CardContent>

            <CardFooter className="flex-1">
                <CardTitle>
                    <p className="text-xl font-bold">{book.title}</p>
                </CardTitle>
            </CardFooter>

            <Button asChild className="bg-primary text mt-3 h-7 w-full rounded-md text-white">
                <Link target="_blank" href={`borrowings/download/${book.id}`}>
                    Baca
                </Link>
            </Button>
        </Card>
    );
}
