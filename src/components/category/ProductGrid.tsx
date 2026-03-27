import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
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
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Monstera Deliciosa", category: "Indoor Plants", price: "€45", image: monsteraImage, isNew: true },
  { id: 2, name: "Snake Plant", category: "Office Plants", price: "€32", image: snakePlantImage },
  { id: 3, name: "Golden Pothos", category: "Hanging Plants", price: "€24", image: pothosImage, isNew: true },
  { id: 4, name: "Fiddle Leaf Fig", category: "Indoor Plants", price: "€65", image: fiddleLeafImage },
  { id: 5, name: "Peace Lily", category: "Indoor Plants", price: "€28", image: peaceLilyImage },
  { id: 6, name: "ZZ Plant", category: "Office Plants", price: "€38", image: zzPlantImage },
  { id: 7, name: "Rubber Plant", category: "Indoor Plants", price: "€42", image: monsteraImage },
  { id: 8, name: "Calathea Orbifolia", category: "Indoor Plants", price: "€35", image: snakePlantImage },
  { id: 9, name: "String of Hearts", category: "Hanging Plants", price: "€22", image: pothosImage },
  { id: 10, name: "Bird of Paradise", category: "Indoor Plants", price: "€85", image: fiddleLeafImage },
  { id: 11, name: "Boston Fern", category: "Hanging Plants", price: "€26", image: peaceLilyImage },
  { id: 12, name: "Philodendron", category: "Office Plants", price: "€30", image: zzPlantImage },
  { id: 13, name: "Aloe Vera", category: "Succulents", price: "€18", image: monsteraImage },
  { id: 14, name: "Dracaena", category: "Office Plants", price: "€48", image: snakePlantImage },
  { id: 15, name: "Spider Plant", category: "Hanging Plants", price: "€20", image: pothosImage },
  { id: 16, name: "Chinese Evergreen", category: "Indoor Plants", price: "€34", image: fiddleLeafImage },
  { id: 17, name: "Jade Plant", category: "Succulents", price: "€22", image: peaceLilyImage },
  { id: 18, name: "Parlor Palm", category: "Office Plants", price: "€36", image: zzPlantImage },
  { id: 19, name: "Echeveria Set", category: "Succulents", price: "€28", image: monsteraImage },
  { id: 20, name: "Areca Palm", category: "Indoor Plants", price: "€55", image: snakePlantImage },
  { id: 21, name: "English Ivy", category: "Hanging Plants", price: "€19", image: pothosImage },
  { id: 22, name: "Croton", category: "Indoor Plants", price: "€32", image: fiddleLeafImage },
  { id: 23, name: "Haworthia", category: "Succulents", price: "€16", image: peaceLilyImage },
  { id: 24, name: "Kentia Palm", category: "Office Plants", price: "€72", image: zzPlantImage },
];

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card 
                className="border-none shadow-none bg-transparent group cursor-pointer"
              >
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
                    {product.isNew && (
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
          ))}
        </div>
      
      <Pagination />
    </section>
  );
};

export default ProductGrid;
