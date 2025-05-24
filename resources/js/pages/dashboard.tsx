import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// element
import Search from '@/components/element/search';
import Highlight from '@/components/element/highlight';

//import LibaryVI from '@/components/element/LIbaryVI'; SVG fail

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
            <section className='bg-gray-200 text-center py-12 px-4 mt-4'>
            <h1 className="text-4xl font-bold">Halaman Utama</h1>
            <Search />
            </section>

            {/* Hero Banner */}

            {/* Placeholder / kotak kosong untuk dashboard content */}

            <Highlight />

        </AppLayout>
    );
}
