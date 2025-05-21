//import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
//import Typography from '@mui/material/Typography';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

import type { ErrReview } from '@/types';

export default function Review({ reviews = [] }: { reviews?: ErrReview[] }) {
  //const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      {/*<Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />*/}

      <div className='w-fit px-10'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full">

          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <Rating name="read-only" value={review.star} readOnly />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{review.comment}</p>
                    </CardContent>
                    <CardFooter>
                      <p>{review.user.name} • {review.created_at}</p>
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

    </Box>
  );
}
