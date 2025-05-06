// import type { Book } from '@/types';
import BookCard from '@/components/element/daftar_buku/book_card';

export default function Booklist() {
    return (
        <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 10 }, (_, index) => (
                <BookCard key={index} />
            ))}
        </div>
    );
}