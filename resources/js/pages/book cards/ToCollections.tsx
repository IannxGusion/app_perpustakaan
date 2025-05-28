import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "@/types";

import { Link } from "@inertiajs/react";
import Category from "@/components/element/category";

export default function ToCollections({ book }: { book: Book }) {

    return (
        <Card key={book.id} className="p-4 flex flex-col drop-shadow-sm hover:border-2 hover:border-black hover:drop-shadow-none dark:hover:border-2 dark:hover:border-white dark:hover:drop-shadow-none">

            <CardHeader className='flex-1'>
                <div className="flex items-center space-x-2">
                    <Category categories={Array.isArray(book.categories) ? book.categories : [book.categories]} />
                </div>
            </CardHeader>

            <CardContent className='flex-1'>
                <div className="content-center justify-center">
                    <img src={`/storage/${book.cover}`}
                        alt={book.title}
                        className="object-cover w-full h-fit border border-slate-700 dark:border-slate-300" />
                </div>
            </CardContent>

            <CardFooter className='flex-1'>
                <CardTitle>
                    <p className='text-xl font-bold'>{book.title}</p>
                </CardTitle>
            </CardFooter>

            <Button asChild className="w-full h-7 bg-primary rounded-md mt-3 text text-white" >
                <Link target="_blank" href={`borrowings/download/${book.id}`}>Baca</Link>
            </Button>
        </Card>
    )
}