import AppLayout from '@/pages/admin/layer/app-sidebar-layout';
import { type BreadcrumbItem, User } from '@/types';
import { Head } from '@inertiajs/react';

import { DataTable } from "@/pages/admin/borrower/data-table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRUD Peminjam',
        href: '/borrowers',
    },
];

export default function Dashboard({ ...props }: { users: User[] }) {
    const { users } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRUD Buku" />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 p-5">

                        <DataTable users={users} />

                    </div>
                </div>
            </div>


        </AppLayout>
    );
}
