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
        <div className="hidden lg:block"><AboutSidebar /></div>
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader title="Pokémon Care" subtitle="Ensuring every Pokémon lives a healthy, happy life with their trainer" />
          <ContentSection title="Our Care Standards">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Health Checks</h3>
                <p className="text-muted-foreground leading-relaxed">Every Pokémon undergoes a full health assessment at a certified Pokémon Center before adoption. We check stats, temperament, and overall wellbeing to ensure they're ready for their new home.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Ethical Breeding</h3>
                <p className="text-muted-foreground leading-relaxed">We work only with licensed breeders who follow Pokémon League guidelines. No forced evolution, no overbreeding — just happy, naturally raised Pokémon.</p>
              </div>
            </div>
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-2xl font-light text-foreground mb-6">Our Commitment</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div><div className="text-3xl font-light text-primary mb-2">100%</div><p className="text-sm text-muted-foreground">Pokémon Center certified health checks</p></div>
                <div><div className="text-3xl font-light text-primary mb-2">5,000+</div><p className="text-sm text-muted-foreground">Happy adoptions completed</p></div>
                <div><div className="text-3xl font-light text-primary mb-2">Zero</div><p className="text-sm text-muted-foreground">Tolerance for Pokémon mistreatment</p></div>
              </div>
            </div>
          </ContentSection>
          <ContentSection title="Lifetime Support">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">When you adopt from LINEA, you gain a lifetime partner — and lifetime support from our team.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-foreground">30-Day Guarantee</h3>
                  <p className="text-muted-foreground">If your Pokémon isn't settling in, our specialists will provide free behavioral consultations and training advice.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-foreground">Rehoming Support</h3>
                  <p className="text-muted-foreground">If circumstances change, we'll help rehome your Pokémon to a loving trainer — no judgment, just care.</p>
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
