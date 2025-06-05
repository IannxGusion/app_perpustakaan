import { Borrowing, Collection } from '@/types';
import { Link } from '@inertiajs/react';

// ui
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

// elment
import Category from '@/components/element/category';
import Collect from '@/components/element/collect';
import CSRF from '@/components/element/csrf';
import TableInfo from '@/components/element/table-info';
import { Check } from 'lucide-react';

export default function ToBorrowings({ borrowing, collections }: { borrowing: Borrowing; collections: Collection[] }) {
    return (
        <Card
            className="flex flex-col md:flex-row"
            key={borrowing.book.id}
        >
            <CardHeader className="w-full md:w-56">
                <img
                    src={`/storage/${borrowing.book.cover}`}
                    alt={borrowing.book.title.length > 50 ? borrowing.book.title.slice(0, 50) + '...' : borrowing.book.title}
                    className="w-full h-64 md:h-full object-cover border border-slate-700 dark:border-slate-300 shadow"
                />
            </CardHeader>

            <CardContent className="w-full p-4 flex flex-col justify-between">
                <div>
                    <CardTitle className="flex flex-row justify-between space-y-2">
                        <div className="flex items-center space-x-2">
                            <Category categories={Array.isArray(borrowing.book.categories) ? borrowing.book.categories : [borrowing.book.categories]} />
                        </div>

                        {/* KOLEKSI */}
                        <div>
                            {borrowing.book.collected === 'Yes' ? (
                                <Button variant="ghost">
                                    <Check />
                                    Disimpan
                                </Button>
                            ) : (
                                <Collect borrowing={borrowing} collections={collections} />
                            )}
                        </div>
                    </CardTitle>

                    <CardDescription>
                        <Dialog>
                            <DialogTrigger>
                                <Button asChild variant="ghost" className="my-1 p-0 hover:cursor-pointer">
                                    <h2 className="text-lg md:text-xl font-bold">
                                        {borrowing.book.title.length > 50 ? borrowing.book.title.slice(0, 50) + '...' : borrowing.book.title}
                                    </h2>
                                </Button>
                            </DialogTrigger>

                            <p className="text-sm">{borrowing.book.author}</p>

                            <DialogContent className="sm:max-w-[600px]">
                                <ScrollArea className="mt-5 h-[400px] border-r-2 px-10">
                                    <DialogHeader>
                                        <DialogTitle>Info Buku</DialogTitle>
                                    </DialogHeader>

                                    <TableInfo book={borrowing.book} />

                                    <form action={route('borrowings.return', borrowing['id'])} method="DELETE" className="w-full mt-4">
                                        <CSRF />
                                        <input type="hidden" name="book_id" value={borrowing.book.id} required />
                                        <input type="hidden" name="borrowing_id" value={borrowing.id} required />
                                        <Button className="w-full" type="submit">
                                            Kembalikan
                                        </Button>
                                    </form>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    </CardDescription>
                </div>

                <CardAction className="mt-4 w-full">
                    <Button asChild className="h-10 w-full">
                        <Link target="_blank" href={`borrowings/download/${borrowing.book.id}`}>
                            Baca
                        </Link>
                    </Button>
                </CardAction>
            </CardContent>
        </Card>
    );
}
