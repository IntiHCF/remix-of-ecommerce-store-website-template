import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Customer Care" 
          subtitle="We're here to help you with all your plant needs"
        />
        
        <ContentSection title="Contact Information">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM EST<br />Sat: 10AM-4PM EST</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Email</h3>
              <p className="text-muted-foreground">care@lineaplants.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Live Chat</h3>
              <Button variant="outline" className="rounded-none">
                Start Chat
              </Button>
              <p className="text-sm text-muted-foreground">Available during business hours</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="shipping" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How are plants shipped and how long does delivery take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All plants are carefully packaged in custom boxes with protective wrapping. Standard delivery takes 2-4 business days. Express shipping (next day) is available for €15. We ship Monday-Wednesday to avoid plants sitting in warehouses over weekends.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What if my plant arrives damaged?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 30-day plant health guarantee. If your plant arrives damaged or doesn't thrive within 30 days, send us a photo and we'll send a free replacement. No need to return the original plant.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Do you offer plant care support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Every plant comes with a detailed care card. You can also reach our plant specialists via email or chat for personalized advice. We offer free plant health check-ups — just send us a photo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sizing" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What pot sizes do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our plants come in various sizes from small desktop plants (9cm pot) to large statement plants (27cm pot). Each product page lists the exact pot diameter and estimated plant height.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="care" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How should I care for my new plant after delivery?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unpack immediately and place in a spot with appropriate light. Wait 2-3 days before watering to let the plant acclimate. Avoid repotting for at least 2 weeks. Check our Plant Care Guide for species-specific advice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="authentication" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Are your plants pet-safe?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each product page clearly indicates whether the plant is pet-friendly. We have a dedicated "Pet Safe" collection for homes with furry friends. Popular pet-safe options include Spider Plants, Calathea, and Boston Ferns.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>

        <ContentSection title="Contact Form">
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">First Name</label>
                  <Input className="rounded-none" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Last Name</label>
                  <Input className="rounded-none" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Email</label>
                <Input type="email" className="rounded-none" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Order Number (Optional)</label>
                <Input className="rounded-none" placeholder="Enter your order number if applicable" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">How can we help you?</label>
                <Textarea 
                  className="rounded-none min-h-[120px]" 
                  placeholder="Please describe your inquiry in detail"
                />
              </div>
              
              <Button type="submit" className="w-full rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerCare;
