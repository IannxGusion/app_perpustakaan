import AppLayout from '@/pages/librarian/layer/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Work',
        href: '/work',
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
            <Head title="Work" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-10 px-4 mt-4">
                <h1 className="text-4xl font-bold">Peminjaman</h1>
                <h2 className="text-xl font-semibold mb-6">Peminjaman Bulan Ini</h2>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <div className="space-y-4 max-w-3xl mx-auto">
                    {dataPeminjaman.map((item) => (
                        <div key={item.id} className="bg-white p-4 shadow flex justify-between items-center rounded">
                            <div>
                                <div className="font-bold">{item.nama}</div>
                                <div className="text-sm text-gray-600">{item.buku}</div>
                            </div>
                            <div className="flex space-x-2">
                                <Button variant={'outline'}>
                                    edit
                                </Button>
                                <Button variant={'destructive'}>
                                    hapus
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />

        </AppLayout>
    );
}
