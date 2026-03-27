import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "LINEA Greenhouse — Manhattan",
      address: "789 Madison Avenue, New York, NY 10065",
      phone: "+1 (212) 555-0123",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["Plant Styling Consult", "Repotting Service", "Plant Health Check", "Workshops"]
    },
    {
      name: "LINEA Garden Studio — Brooklyn",
      address: "456 Atlantic Avenue, Brooklyn, NY 11217",
      phone: "+1 (718) 555-0456",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["Plant Styling Consult", "Terrarium Bar", "Workshops", "Gift Wrapping"]
    },
    {
      name: "LINEA Pop-Up — SoHo",
      address: "123 Spring Street, New York, NY 10012",
      phone: "+1 (212) 555-0789",
      hours: "Mon-Sat: 11AM-8PM, Sun: 12PM-7PM",
      services: ["Browse & Buy", "Gift Sets", "Plant Care Advice"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Store Locator" 
          subtitle="Visit us in person and explore our plant collection"
        />
        
        <ContentSection title="Interactive Store Map">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Our Locations">
          <div className="grid gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="rounded-none">
                        Get Directions
                      </Button>
                      <Button className="rounded-none">
                        Book a Visit
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">Available Services</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Plant Styling Consultations">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Book a one-on-one session with our plant stylists. They'll help you choose the perfect plants for your space, considering light conditions, room size, and your lifestyle.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Home Styling</h4>
                <p className="text-muted-foreground text-sm">
                  Personalized plant recommendations for every room in your home
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Office Greening</h4>
                <p className="text-muted-foreground text-sm">
                  Transform your workspace with curated plant installations
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Workshops</h4>
                <p className="text-muted-foreground text-sm">
                  Learn propagation, repotting, and seasonal care in our hands-on classes
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Virtual Plant Advice">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Can't visit in person?</h3>
            <p className="text-muted-foreground mb-6">
              Book a virtual consultation with one of our plant experts. We'll assess your space via video call, 
              recommend the perfect plants, and answer all your care questions from the comfort of your home.
            </p>
            <Button variant="outline" className="rounded-none">
              Book Virtual Consultation
            </Button>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;
