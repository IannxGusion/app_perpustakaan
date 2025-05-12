//import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';
import Search from '@/components/element/search';
import Highlight from '@/components/element/highlight';
import { Pack } from '@/components/element/drawer';

//import LibaryVI from '@/components/element/LIbaryVI'; SVG fail

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

            <Search />

            {/* Hero Banner */}

{            /*<LibaryVI />

            SVG fail: 
            "WELCOM The"

*/
}
            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                <Highlight />

                <Pack />

            </div>

            <Footer />
        </AppLayout>
    );
}
