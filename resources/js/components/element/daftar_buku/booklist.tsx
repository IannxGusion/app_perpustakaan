import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
//import Tag from "@/components/element/tag"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Book } from '@/types';

export default function Booklist({ ...props }: { books: Book[] }) {

    const { books } = props;
    return (
        <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
                <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
                    <Card className="p-4">

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="grid grid-cols-4 gap-4 items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    {book.author}
                                </TooltipTrigger>
                                <TooltipContent>{book.author}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <CardContent>
                            {book.title}
                        </CardContent>

                        <Button>
                            Pinjam
                        </Button>

                        <CardHeader>
                            <CardTitle>{book.title}</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
    );
}