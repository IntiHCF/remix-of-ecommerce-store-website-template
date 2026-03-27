import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Sustainability" 
          subtitle="Growing responsibly to protect our planet for future generations"
        />
        
        <ContentSection title="Our Environmental Commitment">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Responsible Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner only with nurseries who share our commitment to sustainable growing practices. No harmful pesticides, no excessive water usage — just healthy plants grown with care.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Eco Packaging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over 90% of our packaging is made from recycled or compostable materials. We've eliminated single-use plastics and use biodegradable plant wrap to protect your plants during transit.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Our Impact Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Plastic-free shipping by 2025</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">10K</div>
                <p className="text-sm text-muted-foreground">Trees planted through partner programs</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Zero</div>
                <p className="text-sm text-muted-foreground">Waste to landfill policy</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Plant Health Guarantee">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We stand behind every plant we sell. If your plant arrives damaged or doesn't thrive within 30 days, we'll replace it — no questions asked.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">30-Day Guarantee</h3>
                <p className="text-muted-foreground">
                  Every plant comes with our 30-day health guarantee. If it doesn't settle in, we'll send a replacement free of charge.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Pot Return Program</h3>
                <p className="text-muted-foreground">
                  When you upgrade your plant's pot, send us the old one. We sanitize and reuse ceramic pots, reducing waste and giving them a second life.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Certifications & Partnerships">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to sustainability is verified through partnerships with leading environmental organizations.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">1% for the Planet</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">B Corp</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">FSC Certified</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Carbon Neutral</span>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sustainability;
