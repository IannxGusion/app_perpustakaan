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
            className="flex flex-row drop-shadow-lg hover:border-2 hover:border-black hover:drop-shadow-none dark:hover:border-2 dark:hover:border-white dark:hover:drop-shadow-none"
            key={borrowing.book.id}
        >
            <CardHeader className="w-56">
                <img
                    src={`/storage/${borrowing.book.cover}`}
                    alt={borrowing.book.title.length > 50 ? borrowing.book.title.slice(0, 50) + '...' : borrowing.book.title}
                    className="h-full w-full border border-slate-700 object-cover shadow dark:border-slate-300"
                />
            </CardHeader>

            <CardContent className="my-8 h-full w-full">
                <CardTitle className="flex flex-row justify-between">
                    <div className="flex items-center space-x-2">
                        <Category categories={Array.isArray(borrowing.book.categories) ? borrowing.book.categories : [borrowing.book.categories]} />
                    </div>

                    {/* KOLEKSI */}
                    <div>
                        {borrowing.book.collected === 'Yes' && (
                            <Button variant="ghost">
                                <Check />
                                Disimpan
                            </Button>
                        )}
                        {borrowing.book.collected === 'No' && <Collect borrowing={borrowing} collections={collections} />}
                    </div>
                </CardTitle>

                <CardDescription>
                    <Dialog>
                        <DialogTrigger>
                            <Button asChild variant={'ghost'} className="my-1 p-0 hover:cursor-pointer">
                                <h2 className="text-xl font-bold text-black">
                                    {borrowing.book.title.length > 50 ? borrowing.book.title.slice(0, 50) + '...' : borrowing.book.title}
                                </h2>
                            </Button>
                        </DialogTrigger>

                        <p>{borrowing.book.author}</p>

                        <DialogContent className="sm:max-w-[600px]">
                            <ScrollArea className="mt-5 h-[400px] border-r-2 px-10">
                                <DialogHeader>
                                    <DialogTitle>Info Buku</DialogTitle>
                                </DialogHeader>

                                <TableInfo book={borrowing.book} />

                                <form action={route('borrowings.return', borrowing['id'])} method="DELETE" className="w-full">
                                    <CSRF />
                                    <input type="hidden" name="book_id" id="book_id" value={borrowing.book.id} required />
                                    <input type="hidden" name="borrowing_id" id="borrowing_id" value={borrowing.id} required />
                                    <Button className="w-full" type="submit">
                                        Kembalikan
                                    </Button>
                                </form>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </CardDescription>

                <CardAction className="h-full w-full">
                    <Button asChild className="bg-primary text mt-3 h-7 w-full rounded text-white">
                        <Link target="_blank" href={`borrowings/download/${borrowing.book.id}`}>
                            Baca
                        </Link>
                    </Button>
                </CardAction>
            </CardContent>
        </Card>
    );
}
