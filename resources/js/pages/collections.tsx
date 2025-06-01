import AppLayout from '@/layouts/user-layout';
import { Book, Collection, type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

// ui
import CSRF from '@/components/element/csrf';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
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

export default function Collections({
    collections,
    books,
    selectedCollectionId,
}: {
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
            <section
                className="mt-4 bg-gray-200 px-4 py-12 text-center"
                style={{
                    backgroundColor: '#ffffff',
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'36\' height=\'72\' viewBox=\'0 0 36 72\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23004380\' fill-opacity=\'0.51\'%3E%3Cpath d=\'M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
            >
                <h1 className="text-4xl font-bold">Koleksi</h1>
            </section>

            <div className="flex justify-end px-8">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Koleksi
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="sm:max-w-[425px]">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Tambah Koleksi</AlertDialogTitle>
                            <AlertDialogDescription>
                                Koleksi untuk referensi di masa mendatang. Anda dapat mengakses kapan saja melalui halaman koleksi Anda.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <form action={route('collections.store')} method="POST" encType="multipart/form-data">
                            {/* CSRF */}
                            <CSRF />

                            <div className="grid gap-4 py-4">
                                <Label htmlFor="collection_name">Nama Koleksi</Label>
                                <Input id="collection_name" name="collection_name" defaultValue="New collection" className="col-span-3" />
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
                <section className="dark:border-sidebar-border flex w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                    {/* Sidebar with scroll */}
                    <ScrollArea className="h-96 w-1/4 bg-white dark:bg-gray-900">
                        <div className="flex h-full flex-col space-y-5 p-6">
                            {collections.map((collection) => (
                                <div
                                    key={collection.id}
                                    onClick={() => handleSelectCollection(collection.id)}
                                    className={`cursor-pointer ${selectedCollectionId === collection.id ? 'rounded bg-gray-100 dark:bg-gray-800' : ''}`}
                                >
                                    <CollectionCard collection={collection} />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    {/* Main Content Area */}
                    <div className="flex flex-1 flex-col overflow-auto border-l bg-slate-50 p-6 dark:bg-gray-950">
                        {/* Books Grid */}
                        <div className="grid w-full gap-5 pb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {books.length > 0 ? (
                                books.map((book) => <ToCollections key={book.id} book={book} />)
                            ) : (
                                <p className="text-muted-foreground col-span-full text-center">Tidak ada buku untuk ditampilkan.</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </AppLayout>
    );
}
