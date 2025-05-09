import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DataTable } from "@/components/data-table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRUD Pustakawan',
        href: '/crud_pustakawan',
    },
];

import data from "./data.json"

export default function Dashboard() {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRUD Pustakawan" />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

                        <DataTable data={data} />
                    </div>
                </div>
            </div>


        </AppLayout>
    );
}
