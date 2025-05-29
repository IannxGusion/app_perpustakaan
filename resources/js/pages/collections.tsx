import AppLayout from '@/layouts/user-layout';
import { Collection, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogAction
} from "@/components/ui/alert-dialog"
import TablePagination from '@mui/material/TablePagination';
import React from 'react';
import { Label } from '@/components/ui/label';
import CSRF from '@/components/element/csrf';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// element
import CollectionCard from '@/components/element/collectionCard';
import ToCollections from './book cards/ToCollections';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Koleksi',
        href: '/collections',
    },
];

export default function Collections({ collections }: { collections: Collection[] }) {
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

    // Extract all books from collections (safely)
    const books = collections
        .map((collection) => collection.borrowing?.book)
        .filter((book): book is NonNullable<typeof book> => book !== undefined && book !== null);

    // Slice books for current page
    const paginatedBooks = books.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Koleksi" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi</h1>
            </section>

            <div className="flex justify-end px-8">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline"><Plus className="mr-2 h-4 w-4"/>Tambah Koleksi</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="sm:max-w-[425px]">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Tambah Koleksi</AlertDialogTitle>
                            <AlertDialogDescription>
                                Koleksi untuk referensi di masa mendatang.
                                Anda dapat mengakses kapan saja melalui halaman koleksi Anda.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <form action={route("collections.store")} method="POST" encType="multipart/form-data">
                            {/* CSRF */}
                            <CSRF />

                            <div className="grid gap-4 py-4">
                                <Label htmlFor="collection_name">
                                    Nama Koleksi
                                </Label>
                                <Input
                                    id="collection_name"
                                    name="collection_name"
                                    defaultValue="New collection"
                                    className="col-span-3" />
                            </div>

                            <AlertDialogFooter>
                                <AlertDialogCancel type="button">Batal</AlertDialogCancel>
                                <AlertDialogAction type="submit">Simpan</AlertDialogAction>
                            </AlertDialogFooter>
                        </form>

                    </AlertDialogContent>
                </AlertDialog>
            </div>

            <main className="flex h-[calc(100vh-16rem)] flex-1 gap-4 rounded-xl px-6 pb-6">
                <section className="flex w-full overflow-hidden border border-gray-300 dark:border-sidebar-border rounded-lg shadow-sm">

                    {/* Sidebar with scroll */}
                    <ScrollArea className="border-r h-96 w-1/4 bg-white dark:bg-gray-900">
                        <div className="flex flex-col space-y-5 h-full p-6">
                            {collections.map((collection) => (
                                <CollectionCard key={collection.id} collection={collection} />
                            ))}
                        </div>
                    </ScrollArea>

                    {/* Main Content Area */}
                    <div className="flex flex-col flex-1 overflow-auto bg-slate-50 dark:bg-gray-950 p-6">

                        {/* Books Grid */}
                        <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b pb-10">
                            {paginatedBooks.length > 0 ? (
                                paginatedBooks.map((book) => (
                                    <ToCollections key={book.id} book={book} />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-muted-foreground">
                                    Tidak ada buku untuk ditampilkan.
                                </p>
                            )}
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
                                sx={{
                                    color: 'inherit',
                                    '.MuiTablePagination-toolbar': {
                                        backgroundColor: 'transparent',
                                        color: 'inherit',
                                    },
                                    '.MuiTablePagination-selectLabel, .MuiTablePagination-input, .MuiTablePagination-displayedRows': {
                                        color: 'inherit',
                                    },
                                    '.MuiTablePagination-actions button': {
                                        color: 'inherit',
                                    },
                                }}
                            />
                        </div>
                    </div>

                </section>
            </main>
        </AppLayout>
    );
}