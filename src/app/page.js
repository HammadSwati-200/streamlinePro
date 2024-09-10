import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { CarouselSpacing } from "@/components/Testimonial";
import PricingPlans from "@/components/PricingPlans";
import FinalCTA from "@/components/FinalCta";
import FAQs from "@/components/Faqs";
import FooterComponent from "@/components/FooterComponent";
import ScrollToTop from "@/components/ScroolToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Navbar className="z-10" />
      <Hero />
      <Features />
      <CarouselSpacing />
      <PricingPlans />
      <FinalCTA />
      <FAQs />
      <FooterComponent />
      <ScrollToTop />
    </div>
  );
}
