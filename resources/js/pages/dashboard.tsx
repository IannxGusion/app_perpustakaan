import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// element
import Search from '@/components/element/search';
import Highlight from '@/components/element/highlight';
import { Pack } from '@/components/element/drawer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Banner */}
            <Search />

            <Highlight />

            <Pack />

        </AppLayout>
    );
}
