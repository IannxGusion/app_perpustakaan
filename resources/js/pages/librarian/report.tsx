import AppLayout from '@/pages/librarian/layer/user-layout';
import { Borrowing, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import DateRangePicker from '@/components/element/datepick';
import { Log } from '@/components/element/log';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laporan',
        href: '/aporan',
    },
];

export default function Dashboard({ ...props }: { borrowings: Borrowing[] }) {
    const { borrowings } = props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan" />

            <section className="mt-4 bg-gray-200 px-4 py-10 text-center">
                <h1 className="text-4xl font-bold">Laporan</h1>
            </section>

            <div className='p-5 space-y-2.5'>
                <Log borrowings={borrowings} />

                <div className="flex flex-row text-center justify-around">
                    <DateRangePicker />
                    <Button asChild className="bg-primary text h-full rounded text-white">
                        <Link target="_blank" href={route('librarian.report.download')}>
                            Buat Laporan
                        </Link>
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}
