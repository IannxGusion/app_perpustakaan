import AppLayout from '@/pages/admin/layer/app-sidebar-layout';
import { type BreadcrumbItem, Book } from '@/types';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import { DataTable } from '@/pages/admin/books/data-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CRUD Buku',
        href: '/main/books',
    },
];

export default function Dashboard({ ...props }: { books: Book[] }) {
    const { books } = props;
    const { errors } = usePage().props as { errors: Record<string, string> };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CRUD Buku" />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 p-5 py-4 md:gap-6 md:py-6">
                        {/* Render error for JSON import */}
                        {errors.json && (
                            <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">
                                {errors.json_file}
                            </div>
                        )}

                        <DataTable books={books} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
