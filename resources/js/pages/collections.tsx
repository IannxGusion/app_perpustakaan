import AppLayout from '@/layouts/user-layout';
import { Collection, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"

// ui
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
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

    const paginatedCollections = collections.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Koleksi" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi</h1>
            </section>

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="border-sidebar-border/70 dark:border-sidebar-border rounded-xl border h-screen">
                    <div className="flex items-center justify-center h-full w-full">
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="h-full w-full"
                        >
                            <ResizablePanel defaultSize={20} minSize={20}>
                                <ScrollArea className='h-full'>
                                    <div className="flex h-full items-center justify-center p-6">
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
                                </ScrollArea>
                            </ResizablePanel>

                            <ResizableHandle withHandle />

                            <ResizablePanel defaultSize={50} minSize={50}>
                                <div className="space-y-5 flex-row h-full items-center justify-center p-6">
                                    {/* paginate this */}
                                    {paginatedCollections.map((collection) => (
                                        <CollectionCard key={collection.id} collection={collection} />
                                    ))}
                                </div>
                                <div className="flex justify-center mt-4">
                                    <TablePagination
                                        component="div"
                                        count={collections.length}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        rowsPerPage={rowsPerPage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        rowsPerPageOptions={[4, 8, 16, 32]}
                                    />
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}