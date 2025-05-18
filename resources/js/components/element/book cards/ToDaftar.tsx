import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquareTerminal } from "lucide-react";
import { Book } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Link } from "@inertiajs/react";

export default function ToDaftar({ book }: { book: Book }) {
    return (
        <Card key={book.id} className="p-4 flex flex-col drop-shadow-sm hover:border-2 hover:border-black hover:drop-shadow-none">

            <CardHeader className='flex-1'>
                <div className="flex items-center space-x-2">
                    {book.category ? (
                        <Badge className="flex items-center px-2 py-1 text-sm font-medium text-white bg-black rounded">
                            <SquareTerminal className="mr-1" size={16} />
                            {book.category.name}
                        </Badge>
                    ) : (
                        <Badge className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded">
                            Anonymous
                        </Badge>
                    )}
                </div>
            </CardHeader>

            <CardContent className='flex-1'>
                <div className="content-center justify-center">
                    <img src={book.cover} alt={book.title}
                        className="object-cover w-full h-fit border border-slate-700 dark:border-slate-300" />
                </div>
            </CardContent>

            <CardFooter className='flex-1'>
                <CardTitle>
                    <p className='text-xl font-bold'>{book.title}</p>
                </CardTitle>
            </CardFooter>

            <Button asChild>
                <Link href={route('book.show', book['id'])}>Pinjam</Link>
            </Button>
        </Card>
    )
}