import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import TrustIndicators from "@/components/trust-indicators";
import OrganizationsList from "@/components/organizations-list";
import DonationGuide from "@/components/donation-guide";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <OrganizationsList />
      <DonationGuide />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
