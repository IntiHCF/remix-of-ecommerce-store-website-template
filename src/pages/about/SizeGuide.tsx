import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Plant Care Guide" 
          subtitle="Everything you need to keep your plants thriving"
        />
        
        <ContentSection title="Light Requirements">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">Understanding Light Levels</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Bright Indirect Light</h4>
                  <p className="text-muted-foreground">
                    Near a window but not in direct sunlight. Most tropical plants thrive here — Monsteras, Pothos, and Fiddle Leaf Figs love this spot.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Low to Medium Light</h4>
                  <p className="text-muted-foreground">
                    Further from windows or north-facing rooms. Snake Plants, ZZ Plants, and Peace Lilies are perfect for these conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="border border-border p-3 text-left font-light">Plant</th>
                    <th className="border border-border p-3 text-left font-light">Light</th>
                    <th className="border border-border p-3 text-left font-light">Water</th>
                    <th className="border border-border p-3 text-left font-light">Humidity</th>
                    <th className="border border-border p-3 text-left font-light">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plant: "Monstera", light: "Bright indirect", water: "Weekly", humidity: "Medium-High", difficulty: "Easy" },
                    { plant: "Snake Plant", light: "Low to bright", water: "Every 2-3 weeks", humidity: "Low", difficulty: "Very Easy" },
                    { plant: "Pothos", light: "Low to bright", water: "Weekly", humidity: "Low-Medium", difficulty: "Very Easy" },
                    { plant: "Fiddle Leaf Fig", light: "Bright indirect", water: "Weekly", humidity: "Medium", difficulty: "Moderate" },
                    { plant: "Peace Lily", light: "Low to medium", water: "Weekly", humidity: "Medium", difficulty: "Easy" },
                    { plant: "ZZ Plant", light: "Low to bright", water: "Every 2-3 weeks", humidity: "Low", difficulty: "Very Easy" },
                    { plant: "Bird of Paradise", light: "Bright direct", water: "Weekly", humidity: "Medium", difficulty: "Moderate" },
                    { plant: "Calathea", light: "Medium indirect", water: "Keep moist", humidity: "High", difficulty: "Advanced" },
                    { plant: "String of Pearls", light: "Bright indirect", water: "Every 2 weeks", humidity: "Low", difficulty: "Moderate" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-muted/10">
                      <td className="border border-border p-3">{row.plant}</td>
                      <td className="border border-border p-3">{row.light}</td>
                      <td className="border border-border p-3">{row.water}</td>
                      <td className="border border-border p-3">{row.humidity}</td>
                      <td className="border border-border p-3">{row.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Watering & Feeding">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Watering Tips</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Tropical Plants</span>
                  <span className="text-foreground">When top 2-3cm dry</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Succulents</span>
                  <span className="text-foreground">When fully dry</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Ferns</span>
                  <span className="text-foreground">Keep consistently moist</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Feeding Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Spring/Summer</span>
                  <span className="text-foreground">Monthly with liquid feed</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Autumn</span>
                  <span className="text-foreground">Every 6-8 weeks</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Winter</span>
                  <span className="text-foreground">No feeding needed</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Help?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Not sure what your plant needs? Our plant specialists are here to help. 
              Send us a photo and we'll diagnose any issues and provide personalized care advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-none">
                Download Care Cards
              </Button>
              <Button className="rounded-none">
                Ask a Plant Expert
              </Button>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;
