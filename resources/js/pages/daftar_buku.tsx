//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';
import BookList from '@/components/element/booklist';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* Hero Section */}
                <section className="bg-gray-200 text-center py-12 px-4">
                    <h1 className="text-4xl font-bold">Daftar Buku</h1>
                </section>
            </div>

            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Daftar Buku</h1>
                <div className="flex gap-6">

                    <div className="w-64 bg-white p-4 border rounded-lg shadow-sm">
                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Keywords</h3>
                            <div className="flex flex-wrap gap-1">
                                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Spring ×</span>
                                <span className="bg-gray-200 px-2 py-1 rounded text-sm">Smart ×</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Modern</h3>
                            <input type="checkbox" /> Teratas <br />
                            <input type="checkbox" /> Banyak dibaca <br />
                            <input type="checkbox" /> Sembunyikan Koleksi
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Genre</h3>
                            <input type="checkbox" /> Horor <br />
                            <input type="checkbox" /> Romantis <br />
                            <input type="checkbox" /> Komik
                        </div>

                        <div>
                            <h3 className="font-bold mb-2">Tipe</h3>
                            <input type="checkbox" /> Komik <br />
                            <input type="checkbox" /> Novel <br />
                            <input type="checkbox" /> Cerpen
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border p-2 rounded w-64"
                            />
                            <div className="space-x-2">
                                <button className="bg-blue-700 text-white px-3 py-1 rounded">New</button>
                                <button className="bg-gray-200 px-3 py-1 rounded">Price ↑</button>
                                <button className="bg-gray-200 px-3 py-1 rounded">Price ↓</button>
                                <button className="bg-gray-200 px-3 py-1 rounded">Rating</button>
                            </div>
                        </div>
                        <BookList />
                    </div>
                </div>
            </div>

            <Footer />
        </AppLayout>
    );
}
