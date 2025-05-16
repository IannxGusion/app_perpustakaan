import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaSearch } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

const books = [
    { id: 1, title: 'Dilan', author: 'Pidibaiq', topic: 'Romantic' },
    { id: 2, title: 'Sadako', author: 'Asep Dombang', topic: 'Horor' },
    { id: 3, title: 'Bleach', author: 'Tite Kubo', topic: 'Fantasy' },
];

export default function Search2() {
    const [query, setQuery] = useState('');

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.topic.toLowerCase().includes(query.toLowerCase())
    );
}