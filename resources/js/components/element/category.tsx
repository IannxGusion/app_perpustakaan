import { Book } from "@/types";
import { Badge } from "@/components/ui/badge";
import { SquareTerminal } from "lucide-react";

export default function Category({ book }: { book: Book }) {
    return (
        <>
            {book.category ? (
                <Badge
                    className="flex items-center px-2 py-1 text-sm font-medium text-white rounded"
                    style={{ backgroundColor: book.category.colour }}
                >
                    <SquareTerminal className="mr-1" size={16} />
                    {book.category.name}
                </Badge>
            ) : (
                <Badge className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded">
                    Anonymous
                </Badge>
            )}
        </>
    )
}