import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
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
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Pikachu", category: "Electric", price: "€120", image: pikachuImage, isNew: true },
  { id: 2, name: "Charizard", category: "Fire", price: "€350", image: charizardImage },
  { id: 3, name: "Bulbasaur", category: "Grass", price: "€95", image: bulbasaurImage, isNew: true },
  { id: 4, name: "Squirtle", category: "Water", price: "€95", image: squirtleImage },
  { id: 5, name: "Gengar", category: "Ghost", price: "€180", image: gengarImage },
  { id: 6, name: "Eevee", category: "Normal", price: "€150", image: eeveeImage },
  { id: 7, name: "Jigglypuff", category: "Fairy", price: "€85", image: pikachuImage },
  { id: 8, name: "Snorlax", category: "Normal", price: "€220", image: charizardImage },
  { id: 9, name: "Mewtwo", category: "Psychic", price: "€500", image: bulbasaurImage },
  { id: 10, name: "Dragonite", category: "Dragon", price: "€380", image: squirtleImage },
  { id: 11, name: "Gyarados", category: "Water", price: "€280", image: gengarImage },
  { id: 12, name: "Arcanine", category: "Fire", price: "€240", image: eeveeImage },
  { id: 13, name: "Alakazam", category: "Psychic", price: "€210", image: pikachuImage },
  { id: 14, name: "Machamp", category: "Fighting", price: "€195", image: charizardImage },
  { id: 15, name: "Lapras", category: "Water", price: "€260", image: bulbasaurImage },
  { id: 16, name: "Vaporeon", category: "Water", price: "€175", image: squirtleImage },
  { id: 17, name: "Flareon", category: "Fire", price: "€175", image: gengarImage },
  { id: 18, name: "Jolteon", category: "Electric", price: "€175", image: eeveeImage },
  { id: 19, name: "Espeon", category: "Psychic", price: "€185", image: pikachuImage },
  { id: 20, name: "Umbreon", category: "Dark", price: "€185", image: charizardImage },
  { id: 21, name: "Lucario", category: "Fighting", price: "€230", image: bulbasaurImage },
  { id: 22, name: "Garchomp", category: "Dragon", price: "€340", image: squirtleImage },
  { id: 23, name: "Mimikyu", category: "Ghost", price: "€160", image: gengarImage },
  { id: 24, name: "Sylveon", category: "Fairy", price: "€185", image: eeveeImage },
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
                      src={product.category === "Electric" ? electricCollection : waterCollection}
                      alt={`${product.name} in battle`}
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
