import { Borrowing } from "@/types";
import { Link } from "@inertiajs/react";

// ui
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"

import { Textarea } from "@/components/ui/textarea";
import Collect from "@/components/element/collect";
import CSRF from "@/components/element/csrf";
import Category from "@/components/element/category";

export default function ToBorrowings({ borrowing }: { borrowing: Borrowing }) {
    return (
        <Card className='flex flex-row drop-shadow-lg hover:drop-shadow-none hover:border-2 hover:border-black' key={borrowing.book.id}>
            <CardHeader className='w-56'>
                <img
                    src={`/storage/${borrowing.book.cover}`}
                    alt={borrowing.book.title}
                    className="w-full h-full object-cover shadow border border-slate-700 dark:border-slate-300" />
            </CardHeader>

            <CardContent className="w-full h-full my-8">

                <CardTitle className="flex flex-row justify-between">
                    <div className="flex items-center space-x-2">
                        <Category book={borrowing.book} />
                    </div>

                    {/* KOLEKSI */}
                    <div>
                        {borrowing.book.collected === 'Yes' && (
                            <Button variant="ghost">Disimpan</Button>
                        )}
                        {borrowing.book.collected === 'No' && (
                            <Collect borrowing={borrowing} />
                        )}
                    </div>
                </CardTitle>

                <CardDescription>

                    <Dialog>
                        <DialogTrigger>
                            <Button asChild variant={'ghost'} className='my-1 p-0 hover:cursor-pointer'>
                                <h2 className="text-xl font-bold text-black">
                                    {borrowing.book.title}
                                </h2>
                            </Button>
                        </DialogTrigger>

                        <p>{borrowing.book.author}</p>

                        <DialogContent className="sm:max-w-[600px]">
                            <ScrollArea className="h-[400px] px-10 border-r-2 mt-5">

                                <DialogHeader>
                                    <DialogTitle>Info Buku</DialogTitle>
                                </DialogHeader>

                                <table className="min-w-full border border-gray-300 mt-2">
                                    <tbody>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Judul</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.title}</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Genre</td>
                                            <td className="px-4 py-2 text-gray-900">
                                                {borrowing.book.category ? borrowing.book.category.name : "Anonymous"}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Penulis</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.author}</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Penerbit</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium text-gray-700">Tgl. Terbit</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.publication_date}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <form action={route('borrowings.return', borrowing['id'])} method="DELETE" className="w-full mt-3">
                                    <CSRF />
                                    <input type="hidden" name="book_id" id="book_id" value={borrowing.book.id} required />
                                    <input type="hidden" name="borrowing_id" id="borrowing_id" value={borrowing.id} required />
                                    <Button className="w-full" type="submit">
                                        Kembalikan
                                    </Button>
                                </form>

                                <details className="mt-10 hover:cursor-pointer rounded-sm border-2 p-2 border-primary-100">
                                    <summary className="border-b-2 font-bold text-lg">
                                        Ulas Buku
                                    </summary>
                                    <form action={route("reviews.store", borrowing.book.id)} method="POST" encType="multipart/form-data">
                                        <CSRF />

                                        <input type="hidden" name="book_id" id="book_id" value={borrowing.book.id} required />
                                        <input type="hidden" name="book_id" id="book_id" value={borrowing.book.id} required />
                                        <input type="number" name="star" id="star" defaultValue={0} className="my-2">
                                        </input>
                                        <Textarea name="comment" id="comment" placeholder="Tulis ulasan..." />
                                        <Button className="w-full mt-2" type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                </details>

                            </ScrollArea>

                        </DialogContent>
                    </Dialog>

                </CardDescription>

                <CardAction className="w-full h-full">
                    <Button asChild className="w-full h-7 bg-primary rounded mt-3 text text-white" >
                        <Link target="_blank" href={`borrowings/download/${borrowing.book.id}`}>Baca</Link>
                    </Button>
                </CardAction>
            </CardContent>
        </Card>
    )
}