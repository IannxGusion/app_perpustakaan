import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// element
import Search from '@/components/element/search';
import Highlight from '@/components/element/highlight';

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
            <section
                className="text-center py-12 px-4 mt-4 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/5.jpg')" }}
            >
                <h1 className="text-4xl font-bold text-white">Halaman Utama</h1>
                <br />
                <Search />

            </section>
            <Highlight />
        </AppLayout>
    );
}
