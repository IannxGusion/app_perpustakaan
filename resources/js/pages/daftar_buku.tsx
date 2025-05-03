//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
} from 'react-icons/fa';
import { Input } from '@/components/ui/input'; // Adjust the path based on your project structure
import { FaSearch } from 'react-icons/fa'; // Corrected import for the search icon



export default function Dashboard() {
    return (

        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            
            {/* Hero Section */}
            <section className="bg-gray-50 text-center py-12 px-4">
                <h1 className="text-4xl font-bold mb-6">Halaman Utama</h1>
                <div className="relative w-full md:w-1/2 mx-auto">
                    <Input
                        type="text"
                        placeholder="Cari buku, penulis, atau topik..."
                        className="pl-10 pr-4 py-2 border rounded shadow-sm w-full"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* Hero Banner */}
                <section className="relative">
                    <img
                        src="/library-banner.jpg"
                        alt="Library"
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                        <h2 className="text-3xl font-bold">PROJECT LIBARY VI</h2>
                        <p className="mt-2 text-center w-1/2">
                            Perpustakaan adalah tempat dimana kita bisa mendapatkan semua
                            ilmu—bisa membaca, belajar, serta menguasai dunia.
                        </p>
                    </div>
                </section>

                <div className="flex items-center justify-center h-full w-full">
                </div>

                <section className="py-10 px-4">
                    <h2 className="text-2xl font-bold mb-6">Top Readings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Dilan",
                                img: "/books/dilan.jpg",
                            },
                            {
                                title: "Sadako",
                                img: "/books/sadako.jpg",
                            },
                            {
                                title: "Bleach",
                                img: "/books/bleach.jpg",
                            },
                        ].map((book, idx) => (
                            <div key={idx} className="border p-4 rounded shadow">
                                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                    Top #{idx + 1}
                                </span>
                                <img
                                    src={book.img}
                                    alt={book.title}
                                    className="mt-2 w-full h-64 object-cover"
                                />
                                <h3 className="mt-4 text-lg font-semibold">{book.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>


                <footer className="bg-gray-100 border-t border-gray-300 mt-10">
                    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">

                        {/* Logo dan Sosial Media */}
                        <div className="flex flex-col items-center md:items-start">
                            <img src="" alt="Logo" className="w-12 h-12 mb-2" />
                            <div className="flex space-x-4">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaGithub /></a>
                            </div>
                        </div>

                        {/* Navigasi */}
                        <div className="flex justify-around">
                            <div>
                                <h4 className="font-semibold mb-2">Use cases</h4>
                                <ul className="space-y-1">
                                    <li>UI design</li>
                                    <li>UX design</li>
                                    <li>Design systems</li>
                                    <li>Wireframing</li>
                                    <li>Brainstorming</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Explore</h4>
                                <ul className="space-y-1">
                                    <li>Prototyping</li>
                                    <li>Templates</li>
                                    <li>Plugins</li>
                                    <li>Design critiques</li>
                                    <li>FigJam</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Resources</h4>
                                <ul className="space-y-1">
                                    <li>Best practices</li>
                                    <li>Support</li>
                                    <li>Blog</li>
                                    <li>Community</li>
                                    <li>Resource library</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </AppLayout>
    );
}
