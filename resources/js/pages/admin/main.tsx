import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/pages/admin/layer/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Donut } from '@/components/element/donut';
import { Multiple } from '@/components/element/multiple';
import { CarouselPlugin } from '@/components/element/plugin';

import type { Book } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'main',
        href: '/main',
    },
];

export default function Dashboard({ ...props }: { books: Book[] }) {
    const { books } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Main" />

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Donut books={books}/>
                    <div className=" border-sidebar-border/70 dark:border-sidebar-border relative  overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <Multiple/>
                </div>

                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                    <CarouselPlugin />
                </div>
            </div>
        </AppLayout>
    );
}
