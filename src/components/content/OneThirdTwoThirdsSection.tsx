import grassCollection from "@/assets/circular-collection.png";
import ghostCollection from "@/assets/lintel.jpg";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/ghost-type" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img src={ghostCollection} alt="Ghost Type Pokémon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">Ghost Type</h3>
            <p className="text-sm font-light text-foreground">Mysterious spectral Pokémon with shadow abilities</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <Link to="/category/grass-type" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img src={grassCollection} alt="Grass Type Pokémon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">Grass Type</h3>
            <p className="text-sm font-light text-foreground">Nature-powered Pokémon with botanical strength</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
