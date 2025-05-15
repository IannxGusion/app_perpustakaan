import { Multiple } from '@/components/element/multiple';
import { CarouselPlugin } from '@/components/element/plugin';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/pages/librarian/layer/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Donut } from '@/components/element/donut';
import { Footer } from '@/components/element/footer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Peminjaman {
    id: number;
    nama: string;
    buku: string;
}

const dataPeminjaman: Peminjaman[] = [
    { id: 1, nama: "Fu'ad husnan abad", buku: "Meminjam Buku horor" },
    { id: 2, nama: "Fu'ad husnan abad", buku: "Meminjam Buku horor" },
    { id: 3, nama: "Fu'ad husnan abad", buku: "Meminjam Buku horor" },
];


export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-10 px-4 mt-4">
                <h1 className="text-4xl font-bold">Peminjaman</h1>
                <h2 className="text-xl font-semibold mb-6">Peminjaman Bulan Ini</h2>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8 bg-gray-100">
                <div className="space-y-4 max-w-3xl mx-auto">
                    {dataPeminjaman.map((item) => (
                        <div key={item.id} className="bg-white p-4 shadow flex justify-between items-center rounded">
                            <div>
                                <div className="font-bold">{item.nama}</div>
                                <div className="text-sm text-gray-600">{item.buku}</div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                                    EDIT
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                    hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />

        </AppLayout>
    );
}
