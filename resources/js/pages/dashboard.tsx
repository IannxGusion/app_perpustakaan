//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';
import Search from '@/components/element/search';
import Highlight from '@/components/element/highlight';
import { Pack } from '@/components/element/drawer';

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

            <Search />

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
            
            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                <Highlight />

                <Pack/>

            </div>

            <Footer />
        </AppLayout>
    );
}
