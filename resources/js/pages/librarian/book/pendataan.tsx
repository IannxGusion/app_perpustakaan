import AppLayout from '@/pages/librarian/layer/user-layout';
import { Book, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { DataTable } from './pendataan_data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pendataan',
        href: '/management',
    },
];

export default function Dashboard({ ...props }: { books: Book[] }) {
    const { books } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pendataan" />

            {/* Hero Section */}
            <section className="mt-4 bg-gray-200 px-4 py-10 text-center">
                <h1 className="text-4xl font-bold">Pendataan Barang</h1>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <DataTable books={books} />
            </main>
        </AppLayout>
    );
}
