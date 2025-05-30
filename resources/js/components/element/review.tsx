import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Review() {

  return (
    <div className="w-fit px-10">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {/* star */}
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={review.star} readOnly />
                    </Box>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* comment */}
                  <p>{review.comment}</p>
                </CardContent>
                <CardFooter>
                  <p>
                    {/* username of reviewer ->*/}{review}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}