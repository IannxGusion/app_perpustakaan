/*import React from 'react';
import type { Book } from '@/types';

interface PageProps {
    books: Book[];
}

const Page: React.FC<PageProps> = ({ books }) => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Books</h1>
            <ul className="space-y-4">
                {books.map((book) => (
                    <li
                        key={book.id}
                        className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="text-xl font-semibold text-gray-900">{book.title}</div>
                        <div className="mt-2 text-gray-600">{book.content}</div>
                        <div className="mt-1 text-sm text-gray-500">
                            Category: {book.category && book.category.category
                                ? book.category.category.map((cat: any) => cat.category_name).join(', ')
                                : 'N/A'}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
*/