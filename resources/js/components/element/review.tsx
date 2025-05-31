import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Review as ReviewType } from '@/types';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { formatDistanceToNow } from 'date-fns';

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
                                    <CardContent>
                                        <p>{review.comment}</p>
                                    </CardContent>
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
