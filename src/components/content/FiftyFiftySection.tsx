import waterCollection from "@/assets/link-bracelet.png";
import electricCollection from "@/assets/organic-earring.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/water-type" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={waterCollection} 
                alt="Water Type Pokémon" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">Water Type</h3>
            <p className="text-sm font-light text-foreground">Powerful aquatic Pokémon ready for any battle</p>
          </div>
        </div>
        <div>
          <Link to="/category/electric-type" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={electricCollection} 
                alt="Electric Type Pokémon" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">Electric Type</h3>
            <p className="text-sm font-light text-foreground">Shocking companions with electrifying abilities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
