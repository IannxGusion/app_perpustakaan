import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import type { Book } from '@/types';

export default function TableInfo({ book }: { book: Book }) {
    return (
        <Table className="min-w-full border border-gray-300 my-3">
            <TableBody>
                <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Judul</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900 font-bold">{book.title}</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Genre</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">
                        {Array.isArray(book.categories) &&
                            book.categories.map((category: { name: string }, idx: number) => (
                                <p className="underline" key={idx}>{category.name}</p>
                            ))
                        }
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Sampul</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">
                        <img
                            src={`/storage/${book.cover}`}
                            alt={book.title}
                            className="w-full h-full border border-slate-700 dark:border-slate-300"
                        />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Penulis</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.author}</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Penerbit</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.publisher}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Tgl. Terbit</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.publication_date}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}