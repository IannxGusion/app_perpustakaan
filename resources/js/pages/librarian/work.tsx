import AppLayout from '@/pages/librarian/layer/user-layout';
import { Borrowing, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

import { DataTable } from './work_data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Work',
        href: '/work',
    },
];

export default function Dashboard({ ...props }: { borrowings: Borrowing[] }) {
    const { borrowings } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Work" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-10 px-4 mt-4">
                <h1 className="text-4xl font-bold">Peminjaman</h1>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <DataTable borrowings={borrowings} />
            </main>

            <Footer />

        </AppLayout>
    );
}
