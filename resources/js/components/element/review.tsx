import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

import type { Book } from '@/types';

export default function Review({ books = [] }: { books: Book[] }) {

  return (

    <div className='w-fit px-10'>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full">

        <CarouselContent>
          {books.map((book) => (
            <CarouselItem key={book.review.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {book.review.star}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{book.review.comment}</p>
                  </CardContent>
                  <CardFooter>
                    <p>{book.review.comment} • {book.review.created_at}</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

  );
}
