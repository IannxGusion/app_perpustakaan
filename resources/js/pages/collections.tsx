import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Koleksi</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="border-sidebar-border/70 dark:border-sidebar-border rounded-xl border h-screen">
                    <div className="flex items-center justify-center h-full w-full">
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="h-full w-full"
                        >
                            <ResizablePanel defaultSize={20} minSize={20}>
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
                            </ResizablePanel>

                            <ResizableHandle withHandle />

                            <ResizablePanel defaultSize={50} minSize={50}>
                                <div className="flex-row h-full items-center justify-center p-6">
                                    {/* paginate this */}
                                    <Card className='w-full h-full'>
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
                                    <Card className='w-full h-full'>
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
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}