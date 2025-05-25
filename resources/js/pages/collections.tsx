import AppLayout from '@/layouts/user-layout';
import { Collection, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import { ScrollArea } from "@/components/ui/scroll-area"

// ui
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// element
import CollectionCard from '@/components/element/collectionCard';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Koleksi',
        href: '/collections',
    },
];

export default function Dashboard({ ...props }: { collections: Collection[] }) {
    const { collections } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Koleksi" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi</h1>
            </section>

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <section className="flex flex-row border-sidebar-border/70 dark:border-sidebar-border rounded-xl border h-screen">

                    <ScrollArea className='border-r-2 h-full basis-1/4'>
                        <div className="flex flex-col space-y-5 h-full items-center justify-center p-6">
                            {/* paginate this */}
                            {collections.map((collection) => (
                                <CollectionCard key={collection.id} collection={collection} />
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="w-full h-full items-center justify-center p-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </div>

                </section>

            </div>
        </AppLayout>
    );
}