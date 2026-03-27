import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <div className="hidden lg:block"><AboutSidebar /></div>
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader title="Our Story" subtitle="How we became the world's most trusted Pokémon adoption center" />
          <ContentSection>
            <ImageTextBlock image="/founders.png" imageAlt="Our founders" title="Founded on Passion" content="LINEA was founded by Professor Willow and Champion Red, who shared a dream of connecting every person with their perfect Pokémon partner. Starting from a small lab in Pallet Town, we've grown into the region's premier adoption center — matching thousands of trainers with loyal companions." imagePosition="left" />
          </ContentSection>
          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Expert Breeding</h3>
                <p className="text-muted-foreground leading-relaxed">Every Pokémon in our care is raised by certified breeders who prioritize health, temperament, and natural abilities. We follow the Pokémon League's highest standards for ethical breeding and care.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Trainer Matching</h3>
                <p className="text-muted-foreground leading-relaxed">We don't just sell Pokémon — we match them. Our specialists assess your lifestyle, experience level, and goals to recommend the perfect companion for your journey.</p>
              </div>
            </div>
          </ContentSection>
          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Welfare First</h3>
                <p className="text-muted-foreground">The health and happiness of every Pokémon is our top priority. No exceptions.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Education</h3>
                <p className="text-muted-foreground">We empower trainers with knowledge — battle strategies, care guides, and evolution tips.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Community</h3>
                <p className="text-muted-foreground">Join a global network of trainers who share experiences, trade tips, and battle together.</p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
