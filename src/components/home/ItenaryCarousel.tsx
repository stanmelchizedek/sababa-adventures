import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import img1 from "@/assets/images/IMG-032.jpg";

export const ItenaryCarousel = () => {
    return (
        <Carousel className="container mx-auto relative">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
                        <div className="swiper-slide overflow-hidden rounded-xl relative group duration-700 cursor-pointer w-full">
                            <img
                                alt=""
                                src={img1.src}
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform brightness-90"
                            />
                            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-gray-950/50 w-full">
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                                    4 Days Serengeti Safari
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-white text-lg md:text-3xl">$1200</p>
                                    <button className="bg-transparent group-hover:bg-white text-white transition-colors group-hover:text-darkForestGreen border-2 border-white max-md:text-xs px-4 py-2 rounded-3xl font-poppins font-semibold">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="mt-6 w-fit flex gap-4 float-right">
                <CarouselPrevious className="scale-125 border-forestGreen text-primaryBrown hover:text-primaryBrown hover:bg-primaryBrown/25 font-bold" />
                <CarouselNext className="scale-125 border-forestGreen text-primaryBrown hover:text-primaryBrown hover:bg-primaryBrown/25 font-bold" />
            </div>
        </Carousel>
    )
}