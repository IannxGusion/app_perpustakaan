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

export default function Review() {
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <Rating name="read-only" value={0} readOnly />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Review body</p>
                    </CardContent>
                    <CardFooter>
                      <p>Reviewer name • Date</p>
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
