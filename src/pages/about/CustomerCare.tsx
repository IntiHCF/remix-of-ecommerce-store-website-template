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
        <div className="hidden lg:block"><AboutSidebar /></div>
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader title="Customer Care" subtitle="We're here to help you and your Pokémon" />
          <ContentSection title="Contact Information">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Phone</h3>
                <p className="text-muted-foreground">+1 (025) 555-PIKA</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Email</h3>
                <p className="text-muted-foreground">care@lineapokemon.com</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Live Chat</h3>
                <Button variant="outline" className="rounded-none">Start Chat</Button>
                <p className="text-sm text-muted-foreground">Available during business hours</p>
              </div>
            </div>
          </ContentSection>
          <ContentSection title="Frequently Asked Questions">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="shipping" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">How are Pokémon delivered?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">All Pokémon are safely transported in specially designed Poké Balls with comfort padding. Standard delivery takes 2-3 business days. Express delivery (next day) is available for €15. All shipments are insured and tracked.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">What if my Pokémon doesn't settle in?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">We offer a 30-day adjustment guarantee. If your Pokémon isn't bonding well, our specialists will provide free behavioral consultations. If needed, we facilitate a gentle rehoming process at no extra cost.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">Do you provide ongoing care support?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Yes! Every adoption includes lifetime access to our Trainer Support line. We offer free health checkup reminders, evolution guidance, and training tips. Our Pokémon Professors are always available to help.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="sizing" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">What level are the Pokémon?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Most of our Pokémon are between Level 5-15, perfect for new trainers. We also have higher-level Pokémon for experienced trainers. Each listing clearly shows the Pokémon's current level and known moves.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="care" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">What's included with my adoption?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Every adoption includes: the Pokémon in its Poké Ball, a starter food supply, a care manual with training tips, a Pokédex registration card, and a 30-day health guarantee certificate.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="authentication" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">Are your Pokémon legitimate?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Every Pokémon comes with an official Pokémon League certificate of authenticity and Pokédex registration. We are fully licensed by the Pokémon Association and undergo regular inspections.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </ContentSection>
          <ContentSection title="Contact Form">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2"><label className="text-sm font-light text-foreground">First Name</label><Input className="rounded-none" placeholder="Enter your first name" /></div>
                <div className="space-y-2"><label className="text-sm font-light text-foreground">Last Name</label><Input className="rounded-none" placeholder="Enter your last name" /></div>
              </div>
              <div className="space-y-2"><label className="text-sm font-light text-foreground">Email</label><Input type="email" className="rounded-none" placeholder="Enter your email" /></div>
              <div className="space-y-2"><label className="text-sm font-light text-foreground">Order Number (Optional)</label><Input className="rounded-none" placeholder="Enter your order number if applicable" /></div>
              <div className="space-y-2"><label className="text-sm font-light text-foreground">How can we help you?</label><Textarea className="rounded-none min-h-[120px]" placeholder="Please describe your inquiry in detail" /></div>
              <Button type="submit" className="w-full rounded-none">Send Message</Button>
            </form>
          </ContentSection>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerCare;
