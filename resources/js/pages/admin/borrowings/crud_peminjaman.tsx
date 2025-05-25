import AppLayout from '@/pages/admin/layer/app-sidebar-layout';
import { type BreadcrumbItem, Borrowing } from '@/types';
import { Head } from '@inertiajs/react';

import { DataTable } from "@/pages/admin/borrowings/data-table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRUD Peminjaman',
        href: '/crud_borrowing',
    },
];

export default function Dashboard({ ...props }: { borrowings: Borrowing[] }) {
    const { borrowings } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRUD Buku" />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">

                        <DataTable borrowings={borrowings} />

                    </div>
                </div>
            </div>


        </AppLayout>
    );
}
