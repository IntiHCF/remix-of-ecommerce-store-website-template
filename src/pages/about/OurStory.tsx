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
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="Our Story" 
            subtitle="A journey of passion, sustainability, and bringing nature indoors"
          />
          
          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Company founders"
              title="Founded on Passion"
              content="LINEA Plants was born from a shared vision of making quality indoor plants accessible to everyone. Our founders, united by their love of botany and interior design, established the brand with a commitment to sourcing the healthiest, most beautiful plants — and helping them thrive in your home or office."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Expert Curation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every plant in our collection is hand-selected from trusted nurseries who share our standards for quality. We work directly with growers to ensure each plant arrives healthy, vibrant, and ready to thrive in its new home.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Sustainable Future</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in responsible growing practices. Our commitment to sustainable packaging, local sourcing where possible, and plastic-free shipping ensures that every order contributes to a greener world.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Quality</h3>
                <p className="text-muted-foreground">
                  We pursue the healthiest specimens, from root system to leaf tip, ensuring every plant meets our exacting standards.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Education</h3>
                <p className="text-muted-foreground">
                  We empower plant parents with knowledge — detailed care guides, workshops, and responsive support.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Community</h3>
                <p className="text-muted-foreground">
                  We're building a community of plant lovers who share tips, celebrate growth, and find joy in nurturing living things.
                </p>
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
