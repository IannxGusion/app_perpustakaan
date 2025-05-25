import { SquareTerminal } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Book } from "@/types";

// ui
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// element
import Confirm from "@/components/element/confirm";

export default function ToBorrows({ book }: { book: Book }) {
    return (
        <Card className="flex flex-col md:flex-row gap-6 p-6 rounded-lg shadow-md">

            {/* Book Image */}
            <CardHeader className="flex-1/2">
                <img
                    src={`/storage/${book.cover}`}
                    alt={book.title}
                    className="w-full border border-slate-700 dark:border-slate-300"
                />
            </CardHeader>

            {/* Book Info */}
            <CardContent className="flex flex-col justify-between w-full">
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

                <CardTitle>
                    <h2 className="text-2xl font-semibold mt-2">
                        <Link href={route('books.detail', book['id'])} className='hover:cursor-help'>
                            {book.title}
                        </Link>
                    </h2>
                </CardTitle>

                <CardDescription>
                    <p className="text-sm">{book.author}</p>
                </CardDescription>

                {/* Confirm dialog */}
                <Confirm book={book} />

                {/* Sinopsis */}
                <CardFooter className="flex-col mt-6 rounded p-3 border-2 border-slate-100">
                    <div className="flex justify-start items-start">
                        <h3 className="font-semibold text-start">Sinopsis</h3>
                    </div>
                    <p className="text-sm">
                        {book.content.length > 300 ? book.content.slice(0, 300) + "..." : book.content}
                    </p>
                </CardFooter>
            </CardContent>

        </Card>
    )
}