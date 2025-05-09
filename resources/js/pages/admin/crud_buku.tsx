import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

import { Payment, columns } from "@/pages/admin/data-table"
import { DataTable } from "@/pages/admin/columns"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRUD Buku',
        href: '/crud_book',
    },
];

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

export default function Dashboard() {
    const [data, setData] = useState<Payment[]>([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await getData();
            setData(fetchedData);
        }

        fetchData();
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRUD Buku" />

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
