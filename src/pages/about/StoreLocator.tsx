import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    { name: "LINEA Pokémon Lab — Pallet Town", address: "1 Oak Lane, Pallet Town, Kanto", phone: "+1 (025) 555-0123", hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM", services: ["Starter Selection", "Evolution Stones", "Training Battles", "Health Checkups"] },
    { name: "LINEA Pokémon Center — Cerulean City", address: "456 Cascade Drive, Cerulean City, Kanto", phone: "+1 (025) 555-0456", hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM", services: ["Water Type Specialists", "Healing Station", "Breeding Services", "Item Shop"] },
    { name: "LINEA Safari Zone — Fuchsia City", address: "789 Safari Road, Fuchsia City, Kanto", phone: "+1 (025) 555-0789", hours: "Mon-Sat: 11AM-7PM, Sun: 12PM-6PM", services: ["Wild Encounters", "Rare Pokémon", "Photography Tours", "Gift Shop"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <div className="hidden lg:block"><AboutSidebar /></div>
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader title="Store Locator" subtitle="Visit our Pokémon labs and adoption centers in person" />
          <ContentSection title="Interactive Map"><StoreMap /></ContentSection>
          <ContentSection title="Our Locations">
            <div className="grid gap-8">
              {stores.map((store, index) => (
                <div key={index} className="bg-background rounded-lg p-8 border border-border">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                      <div className="space-y-2 text-muted-foreground"><p>{store.address}</p><p>{store.phone}</p><p>{store.hours}</p></div>
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button variant="outline" className="rounded-none">Get Directions</Button>
                        <Button className="rounded-none">Book a Visit</Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-light text-foreground">Available Services</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {store.services.map((service, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>
          <ContentSection title="Trainer Consultations">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">Book a session with our Pokémon Professors who will help you choose the right companion, build a balanced team, and plan your training journey.</p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3"><h4 className="text-lg font-light text-foreground">Starter Selection</h4><p className="text-muted-foreground text-sm">Get matched with the perfect first Pokémon based on your personality</p></div>
                <div className="space-y-3"><h4 className="text-lg font-light text-foreground">Team Building</h4><p className="text-muted-foreground text-sm">Expert advice on creating a balanced team with type coverage</p></div>
                <div className="space-y-3"><h4 className="text-lg font-light text-foreground">Battle Training</h4><p className="text-muted-foreground text-sm">Practice battles and strategy sessions with experienced trainers</p></div>
              </div>
              <div className="pt-8"><Button size="lg" className="rounded-none">Book Your Consultation</Button></div>
            </div>
          </ContentSection>
          <ContentSection title="Virtual Consultations">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-4">Can't visit in person?</h3>
              <p className="text-muted-foreground mb-6">Book a virtual consultation with one of our Pokémon Professors. We'll show you available Pokémon via video call and help you find your perfect match from the comfort of your home.</p>
              <Button variant="outline" className="rounded-none">Book Virtual Consultation</Button>
            </div>
          </ContentSection>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default StoreLocator;
