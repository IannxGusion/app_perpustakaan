import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Category from './category';
import { Book } from '@/types';

export function CarouselPlugin({ books }: { books: Book[] }) {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs justify-self-center"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {books.map((book) => (
                    <CarouselItem key={book.id}>
                        <div className="p-1">
                            <Card className="p-2">
                                <CardHeader className="py-2 px-3">
                                    <div className="flex items-center space-x-2">
                                        <Category categories={Array.isArray(book.categories) ? book.categories : [book.categories]} />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-2 flex items-center justify-center">
                                    <img
                                        src={`/storage/${book.cover}`}
                                        alt={book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}
                                        className="h-32 w-full border border-slate-700 object-cover dark:border-slate-300"
                                    />
                                </CardContent>
                                <CardFooter className="py-2 px-3">
                                    <p className="text-base font-bold truncate">{book.title.length > 50 ? book.title.slice(0, 50) + '...' : book.title}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="text-muted-foreground py-2 text-center text-sm">Buku Yang Paling Banyak Dibaca</div>
        </Carousel>
    );
}
