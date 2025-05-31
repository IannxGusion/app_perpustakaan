import AppLayout from '@/pages/librarian/layer/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import DateRangePicker from '@/components/element/datepick';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan',
        href: '/aporan',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />

            <section className="mt-4 bg-gray-200 px-4 py-10 text-center">
                <h1 className="text-4xl font-bold">Laporan</h1>
            </section>

            <DateRangePicker />

            <div className="text-center">
                <Button asChild className="bg-primary text mt-3 h-7 rounded text-white">
                    <Link target="_blank" href={route('librarian.report.download')}>
                        Buat Laporan
                    </Link>
                </Button>
            </div>
        </AppLayout>
    );
}
