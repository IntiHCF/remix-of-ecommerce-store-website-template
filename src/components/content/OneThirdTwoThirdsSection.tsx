import tropicalCollection from "@/assets/circular-collection.png";
import hangingPlant from "@/assets/organic-earring.png";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/hanging-plants" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={hangingPlant} 
                alt="Hanging plants" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Hanging Plants
            </h3>
            <p className="text-sm font-light text-foreground">
              Trailing beauties that bring life from above
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/indoor-plants" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={tropicalCollection} 
                alt="Tropical plant collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Tropical Collection
            </h3>
            <p className="text-sm font-light text-foreground">
              Statement plants that transform any room into a lush retreat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
