// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Footer } from '@/components/element/footer';

import { Input } from '@/components/ui/input'; // Adjust the path based on your project structure
import Filter from '@/components/element/daftar_buku/filter';

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import type { Book } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Daftar({ ...props }: { books: Book[]}) {
    const { books } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Daftar Buku</h1>
            </section>

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

                <div className="flex gap-6">
                    <Filter />
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-4 space-x-5">
                            <Input
                                type="text"
                                placeholder="Search..."
                                className="w-full">
                            </Input>

                            <Button>SSD</Button>
                            <Button>SSD</Button>
                            <Button>SSD</Button>
                            <Button>SSD</Button>
                        </div>

                        {/*<Booklist />*/}
                        <div>
                            <div className="grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {books.map((book) => (
                                    <Card key={book.id} className="p-4 flex flex-col">

                                        <CardHeader className='flex-1'>
                                            <CardTitle>
                                                {book.category ? (
                                                    <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded">
                                                        {book.category.name}
                                                    </span>
                                                ) : (
                                                    <span className="inline-block bg-gray-400 text-white text-xs px-2 py-1 rounded">
                                                        Anonymous
                                                        
                                                    </span>
                                                )}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className='flex-1'>
                                            <div className="content-center justify-center">
                                                <img alt={book.title}
                                                    className="object-cover w-full h-fit border border-slate-700 dark:border-slate-300" />
                                            </div>
                                        </CardContent>

                                        <CardFooter className='flex-1'>
                                            <p>{book.title}</p>
                                        </CardFooter>

                                        <Button asChild>
                                            <Link href={route('book.show', book['id'])}>Pinjam</Link>
                                        </Button>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </AppLayout>
    );
}