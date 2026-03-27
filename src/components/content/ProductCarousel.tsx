import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import pikachuImage from "@/assets/pantheon.jpg";
import charizardImage from "@/assets/eclipse.jpg";
import bulbasaurImage from "@/assets/halo.jpg";
import squirtleImage from "@/assets/oblique.jpg";
import gengarImage from "@/assets/lintel.jpg";
import eeveeImage from "@/assets/shadowline.jpg";
import electricCollection from "@/assets/organic-earring.png";
import waterCollection from "@/assets/link-bracelet.png";

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
    name: "Pikachu",
    category: "Electric",
    price: "€120",
    image: pikachuImage,
  },
  {
    id: 2,
    name: "Charizard",
    category: "Fire",
    price: "€350",
    image: charizardImage,
  },
  {
    id: 3,
    name: "Bulbasaur",
    category: "Grass",
    price: "€95",
    image: bulbasaurImage,
  },
  {
    id: 4,
    name: "Squirtle",
    category: "Water",
    price: "€95",
    image: squirtleImage,
  },
  {
    id: 5,
    name: "Gengar",
    category: "Ghost",
    price: "€180",
    image: gengarImage,
  },
  {
    id: 6,
    name: "Eevee",
    category: "Normal",
    price: "€150",
    image: eeveeImage,
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
                          src={product.category === "Electric" ? electricCollection : waterCollection}
                          alt={`${product.name} in battle`}
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
