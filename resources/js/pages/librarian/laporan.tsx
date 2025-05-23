import { Head } from '@inertiajs/react';
import AppLayout from '@/pages/librarian/layer/user-layout';
import { type BreadcrumbItem } from '@/types';

import { DateRangePicker } from '@/components/element/datepick'
import { Button } from '@/components/ui/button';
import { Link } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan',
        href: '/aporan'
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />

            <section className="bg-gray-200 text-center py-10 px-4 mt-4">
                <h1 className="text-4xl font-bold">Laporan</h1>
                <h2 className="text-xl font-semibold mb-6">Laporan Bulan Ini</h2>
            </section>

            <DateRangePicker />

            <div className="text-center">
                <Button asChild className="h-7 bg-primary rounded mt-3 text text-white" >
                    <Link target="_blank" href={route('report.download')}>Buat Laporan</Link>
                </Button>
            </div>

            
        </AppLayout >
    );
}
