import succulentsCollection from "@/assets/earrings-collection.png";
import officePlants from "@/assets/link-bracelet.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/succulents" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={succulentsCollection} 
                alt="Succulents collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Succulents & Cacti
            </h3>
            <p className="text-sm font-light text-foreground">
              Low-maintenance beauties perfect for any space
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/office-plants" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={officePlants} 
                alt="Office plants" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Office Collection
            </h3>
            <p className="text-sm font-light text-foreground">
              Air-purifying plants for a productive workspace
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
