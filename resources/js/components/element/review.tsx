import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Review as ReviewType } from '@/types';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { formatDistanceToNow } from 'date-fns';
import { Button } from '../ui/button';
import { ChevronsUpDown } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

interface ReviewProps {
    reviews: ReviewType[];
}

export default function Review({ reviews }: ReviewProps) {
    if (!reviews || reviews.length === 0) {
        return <div className="text-gray-500">Belum ada ulasan.</div>;
    }

    return (
        <div className="w-full px-10">
            <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent>
                    {reviews.map((review) => (
                        <CarouselItem key={review.id} className="w-full">
                            <div className="p-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            <Box sx={{ '& > legend': { mt: 2 } }}>
                                                <Rating name="read-only" value={review.star} readOnly />
                                            </Box>
                                        </CardTitle>
                                    </CardHeader>
                                    {review.comment && (
                                        <CardContent>
                                            <p>
                                                {review.comment.length > 300 ? (
                                                    <>
                                                        {review.comment.slice(0, 300) + '...'}
                                                        <Dialog>
                                                            <DialogTrigger>
                                                                <Button variant="link">
                                                                    read more
                                                                    <ChevronsUpDown />
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent>
                                                                <DialogHeader>
                                                                    <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                        <Rating name="read-only" value={review.star} readOnly />
                                                                    </Box>
                                                                    <DialogTitle className='font-light'>Ulasan dari <span className='font-bold'>{review.user.name}</span></DialogTitle>
                                                                    <DialogDescription>
                                                                        <ScrollArea className="h-[200px] rounded-md border p-4">
                                                                            {review.comment}
                                                                        </ScrollArea>
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </>
                                                ) : (
                                                    review.comment
                                                )}
                                            </p>
                                        </CardContent>
                                    )}
                                    <CardFooter>
                                        <p className="line-clamp-3 text-xs break-all text-gray-500">
                                            {review.user.name} - {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
                                        </p>
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
