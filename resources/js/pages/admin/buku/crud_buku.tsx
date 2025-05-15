import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, Book } from '@/types';
import { Head } from '@inertiajs/react';

import { DataTable } from "./data-table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRUD Buku',
        href: '/crud_book',
    },
];

export default function Dashboard({ ...props }: { books: Book[] }) {
    const { books } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRUD Buku" />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">

                        <DataTable books={books} />

                    </div>
                </div>
            </div>


        </AppLayout>
    );
}
