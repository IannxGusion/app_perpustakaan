import { DatePesan } from "@/components/pesan_buku";

import { Badge } from "@/components/ui/badge"
import type { Book } from '@/types';
import { SquareTerminal } from 'lucide-react';

// element
import Dilan from "@/components/element/dilan";
import Confirm from '@/components/element/confirm';

export default function BookDetail({ ...props }: { book: Book }) {
    const { book } = props;

    return (
        <div className="max-w-100 mx-auto p-4">

            {/* Gambar Sampul */}
            <div className="border p-4 shadow rounded bg-white">
                <Dilan className="flex mb-4 border border-slate-700" />

                {/* Tag */}
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

                {/* Info Buku */}
                <div className="text-justify">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className="text-sm text-gray-600 mb-2">{book.publisher}</p>

                    {/* Sinopsis */}
                    <details className="mb-4">
                        <summary className="cursor-pointer font-medium">Sinopsis</summary>
                        <p className="mt-2 text-sm">
                            {book.content.length > 300 ? book.content.slice(0, 300) + "..." : book.content}
                        </p>
                    </details>

                    <details className="mb-4">
                        <summary className="cursor-pointer font-medium bg-primary text-white px-4 py-2 rounded">
                            Pinjam Buku
                        </summary>
                        <div className="mt-2 border p-4 rounded shadow bg-white">
                            <h4 className="text-lg font-semibold mb-2">Tanggal peminjaman</h4>
                            <DatePesan />

                            {/* Confirm dialog */}
                            <Confirm book={book} />

                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}