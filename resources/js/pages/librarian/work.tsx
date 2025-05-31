import AppLayout from '@/pages/librarian/layer/user-layout';
import { Borrowing, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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
            <section className="mt-4 bg-gray-200 px-4 py-10 text-center">
                <h1 className="text-4xl font-bold">Peminjaman</h1>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <DataTable borrowings={borrowings} />
            </main>
        </AppLayout>
    );
}
