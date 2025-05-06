//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';
import Daftar_buku_file from '@/components/element/daftar_buku_file';
//import Booklist from '@/components/element/booklist';
//import type { Book, Category_relation } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Daftar() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4">
                <h1 className="text-4xl font-bold">Daftar Buku</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">
                <Daftar_buku_file />
            </div>

            <Footer />
        </AppLayout>
    );
}