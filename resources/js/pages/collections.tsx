import AppLayout from '@/layouts/user-layout';
import { Book, Collection, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import { ScrollArea } from "@/components/ui/scroll-area"
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

// element
import CollectionCard from '@/components/element/collectionCard';
import ToBooks from './book cards/ToBooks';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Koleksi',
        href: '/collections',
    },
];

export default function Dashboard({ ...props }: { collections: Collection[], books: Book[] }) {
    const { collections, books } = props;

    // Pagination state
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Slice books for current page
    const paginatedBooks = books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Koleksi" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi</h1>
            </section>

            <main className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <section className="flex h-screen overflow-hidden border border-sidebar-border/70 dark:border-sidebar-border rounded-xl">

                    {/* Sidebar with scroll */}
                    <ScrollArea className="border-r h-full w-1/4">
                        <div className="flex flex-col space-y-5 h-full p-6">
                            {/* Paginate this */}
                            {collections.map((collection) => (
                                <CollectionCard key={collection.id} collection={collection} />
                            ))}
                        </div>
                    </ScrollArea>

                    {/* Main Content Area */}
                    <div className="flex flex-col flex-1 overflow-auto p-4">

                        {/* Books Grid */}
                        <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b-2 pb-10">
                            {paginatedBooks.map((book) => (
                                <ToBooks key={book.id} book={book} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-6">
                            <TablePagination
                                component="div"
                                count={books.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[4, 8, 16, 32]}
                            />
                        </div>
                    </div>

                </section>

            </main>
        </AppLayout>
    );
}