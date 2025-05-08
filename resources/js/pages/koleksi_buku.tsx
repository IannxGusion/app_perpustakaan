//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';
import Search from '@/components/element/search';
import Highlight from '@/components/element/highlight';
import React from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type Book = {
    title: string;
    author: string;
    publisher: string;
    imageUrl: string;
};

const books: Book[] = [
    {
        title: "Dragon Ball",
        author: "penulis",
        publisher: "Penerbit",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/2/22/Dragon_Ball_vol._1.png",
    },
    {
        title: "Ratu Ilmu Hitam",
        author: "penulis",
        publisher: "Penerbit",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/id/3/35/Ratu_Ilmu_Hitam_2019.jpg",
    },
    {
        title: "Dilan 1990",
        author: "penulis",
        publisher: "Penerbit",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/id/0/03/Dilan_1990_poster.jpg",
    },
];

export default function KoleksiBuku() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="min-h-screen w-full bg-gray-100 p-8">
                <div className="bg-white w-full h-full p-6 shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold text-center mb-8">Koleksi Buku</h1>
                    <div className="space-y-6">
                        {books.map((book, index) => (
                            <div
                                key={index}
                                className="flex space-x-6 bg-white px-4 py-4 rounded-lg shadow-sm items-start"
                            >
                                <img
                                    src={book.imageUrl}
                                    alt={book.title}
                                    className="w-28 h-40 object-cover rounded-md shadow"
                                />
                                <div className="flex flex-col justify-between flex-1">
                                    <div>
                                        <span className="inline-block bg-black text-white text-xs px-2 py-0.5 rounded mb-1">
                                            Tag
                                        </span>
                                        <h2 className="text-xl font-bold">{book.title}</h2>
                                        <p className="text-sm text-gray-600">{book.author}</p>
                                        <p className="text-sm text-gray-600">{book.publisher}</p>
                                    </div>
                                    <button className="w-full h-7 bg-blue-800 rounded mt-3 text text-white">Pinjam</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </AppLayout>
    );
}
