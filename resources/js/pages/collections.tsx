import AppLayout from '@/layouts/user-layout';
import { Collection, type BreadcrumbItem, Book } from '@/types';
import { Head, router } from '@inertiajs/react';

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

export default function Collections({ collections, books, selectedCollectionId }: {
    collections: Collection[];
    books: Book[];
    selectedCollectionId: number | null;
}) {
    // Only render layout on client
    if (typeof window === 'undefined') {
        return null;
    }

    const handleSelectCollection = (id: number) => {
        router.get('/collections', { selected_collection_id: id }, { preserveScroll: true });
    };

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
                    <ScrollArea className=" h-96 w-1/4 bg-white dark:bg-gray-900">
                        <div className="flex flex-col space-y-5 h-full p-6">
                            {collections.map((collection) => (
                                <div
                                    key={collection.id}
                                    onClick={() => handleSelectCollection(collection.id)}
                                    className={`cursor-pointer ${selectedCollectionId === collection.id ? 'bg-gray-100 dark:bg-gray-800 rounded' : ''}`}
                                >
                                    <CollectionCard collection={collection} />
                                </div>
                            ))}
                        </div>
                        
                    </ScrollArea>

                    {/* Main Content Area */}
                    <div className="border-l flex flex-col flex-1 overflow-auto bg-slate-50 dark:bg-gray-950 p-6">

                        {/* Books Grid */}
                        <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
                            {books.length > 0 ? (
                                books.map((book) => (
                                    <ToCollections key={book.id} book={book} />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-muted-foreground">
                                    Tidak ada buku untuk ditampilkan.
                                </p>
                            )}
                        </div>
                    </div>

                </section>
            </main>
        </AppLayout>
    );
}