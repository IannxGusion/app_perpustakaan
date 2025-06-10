import AppLayout from '@/pages/librarian/layer/user-layout';
import { Borrowing, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { DataTable } from './catalogue_data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Catalogue',
        href: '/catalogue',
    },
];

export default function Dashboard({ ...props }: { borrowings: Borrowing[] }) {
    const { borrowings } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Katalog" />

            {/* Hero Section */}
            <section
                className="mt-4 bg-gray-200 px-4 py-10 text-center"
                style={{
                    backgroundColor: '#cecece',
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23004380' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            >
                <h1 className="text-4xl font-bold">Kelola kategori</h1>
            </section>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <DataTable borrowings={borrowings} />
            </main>
        </AppLayout>
    );
}
