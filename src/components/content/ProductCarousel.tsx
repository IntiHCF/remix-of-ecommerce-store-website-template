import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import monsteraImage from "@/assets/pantheon.jpg";
import snakePlantImage from "@/assets/eclipse.jpg";
import pothosImage from "@/assets/halo.jpg";
import fiddleLeafImage from "@/assets/oblique.jpg";
import peaceLilyImage from "@/assets/lintel.jpg";
import zzPlantImage from "@/assets/shadowline.jpg";
import hangingPlantImage from "@/assets/organic-earring.png";
import officePlantImage from "@/assets/link-bracelet.png";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: "€45",
    image: monsteraImage,
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Office Plants",
    price: "€32",
    image: snakePlantImage,
  },
  {
    id: 3,
    name: "Golden Pothos",
    category: "Hanging Plants",
    price: "€24",
    image: pothosImage,
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    category: "Indoor Plants",
    price: "€65",
    image: fiddleLeafImage,
  },
  {
    id: 5,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: "€28",
    image: peaceLilyImage,
  },
  {
    id: 6,
    name: "ZZ Plant",
    category: "Office Plants",
    price: "€38",
    image: zzPlantImage,
  },
];

const ProductCarousel = () => {
  return (
    <section className="w-full mb-16 px-6">
      <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {products.map((product) => (
               <CarouselItem
                 key={product.id}
                 className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
               >
                 <Link to={`/product/${product.id}`}>
                  <Card className="border-none shadow-none bg-transparent group">
                    <CardContent className="p-0">
                      <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                        />
                        <img
                          src={product.category === "Hanging Plants" ? hangingPlantImage : officePlantImage}
                          alt={`${product.name} in context`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/[0.03]"></div>
                        {(product.id === 1 || product.id === 3) && (
                          <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-black">
                            NEW
                          </div>
                        )}
                      </div>
                     <div className="space-y-1">
                       <p className="text-sm font-light text-foreground">
                         {product.category}
                       </p>
                       <div className="flex justify-between items-center">
                         <h3 className="text-sm font-medium text-foreground">
                           {product.name}
                         </h3>
                         <p className="text-sm font-light text-foreground">
                           {product.price}
                         </p>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
                 </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </section>
  );
};

export default ProductCarousel;
