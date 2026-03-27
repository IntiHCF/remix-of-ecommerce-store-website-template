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
        <div className="hidden lg:block"><AboutSidebar /></div>
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader title="Trainer Guide" subtitle="Everything you need to become a great Pokémon trainer" />
          <ContentSection title="Pokémon Types & Matchups">
            <div className="space-y-8">
              <div className="bg-muted/10 rounded-lg p-8">
                <h3 className="text-xl font-light text-foreground mb-6">Understanding Type Advantages</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Offensive Advantages</h4>
                    <p className="text-muted-foreground">Fire beats Grass, Water beats Fire, Grass beats Water. Electric is super effective against Water and Flying types.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Defensive Resistances</h4>
                    <p className="text-muted-foreground">Steel resists many types, Ghost is immune to Normal and Fighting. Understanding resistances is key to building a balanced team.</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/20">
                      <th className="border border-border p-3 text-left font-light">Type</th>
                      <th className="border border-border p-3 text-left font-light">Strong Against</th>
                      <th className="border border-border p-3 text-left font-light">Weak Against</th>
                      <th className="border border-border p-3 text-left font-light">Resistant To</th>
                      <th className="border border-border p-3 text-left font-light">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Fire", strong: "Grass, Ice, Bug, Steel", weak: "Water, Rock, Ground", resist: "Fire, Grass, Ice, Bug, Steel, Fairy", best: "Offense" },
                      { type: "Water", strong: "Fire, Ground, Rock", weak: "Electric, Grass", resist: "Fire, Water, Ice, Steel", best: "Versatile" },
                      { type: "Grass", strong: "Water, Ground, Rock", weak: "Fire, Ice, Poison, Flying, Bug", resist: "Water, Electric, Grass, Ground", best: "Status moves" },
                      { type: "Electric", strong: "Water, Flying", weak: "Ground", resist: "Electric, Flying, Steel", best: "Speed" },
                      { type: "Psychic", strong: "Fighting, Poison", weak: "Bug, Dark, Ghost", resist: "Fighting, Psychic", best: "Special Attack" },
                      { type: "Ghost", strong: "Psychic, Ghost", weak: "Dark, Ghost", resist: "Poison, Bug (immune: Normal, Fighting)", best: "Tricky plays" },
                      { type: "Dragon", strong: "Dragon", weak: "Ice, Dragon, Fairy", resist: "Fire, Water, Grass, Electric", best: "Raw power" },
                      { type: "Dark", strong: "Psychic, Ghost", weak: "Fighting, Bug, Fairy", resist: "Dark, Ghost (immune: Psychic)", best: "Mind games" },
                      { type: "Fairy", strong: "Fighting, Dragon, Dark", weak: "Poison, Steel", resist: "Fighting, Bug, Dark (immune: Dragon)", best: "Dragon counters" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-muted/10">
                        <td className="border border-border p-3 font-medium">{row.type}</td>
                        <td className="border border-border p-3">{row.strong}</td>
                        <td className="border border-border p-3">{row.weak}</td>
                        <td className="border border-border p-3">{row.resist}</td>
                        <td className="border border-border p-3">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ContentSection>
          <ContentSection title="Training & Evolution">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Training Tips</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Beginner</span><span className="text-foreground">Start with type advantages</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Intermediate</span><span className="text-foreground">Focus on EV training</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Advanced</span><span className="text-foreground">Competitive team building</span></div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Evolution Methods</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Level Up</span><span className="text-foreground">Most common method</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Evolution Stones</span><span className="text-foreground">Fire, Water, Thunder, etc.</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Friendship</span><span className="text-foreground">Bond-based evolution</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Trade</span><span className="text-foreground">Some require trading</span></div>
                </div>
              </div>
            </div>
          </ContentSection>
          <ContentSection title="Need Help?">
            <div className="space-y-6">
              <p className="text-muted-foreground">Not sure which Pokémon is right for you? Our Pokémon specialists can help match you with the perfect companion based on your experience level and goals.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="rounded-none">Download Pokédex Guide</Button>
                <Button className="rounded-none">Talk to a Specialist</Button>
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
