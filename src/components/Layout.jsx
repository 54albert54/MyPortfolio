import GradientWrapper from "./GradientWrapper";
import CTA from "./ui/CTA";
import Features from "./ui/Features";
import Footer from "./ui/Footer";
import FooterCTA from "./ui/FooterCTA";
import Hero from "./ui/Hero";

import Testimonials from "./ui/Testimonials";
import ToolKit from "./ui/ToolKit";

const Layout = () => {
  return (
    <section className="relative  bg-light w-screen max-w-[1440px] mx-auto">
      <main>
        <Hero className="w-screen" />
        <GradientWrapper>
          <Features />
          <CTA />
        </GradientWrapper>
        <Testimonials />
        <GradientWrapper>
          <ToolKit />
        </GradientWrapper>
        <FooterCTA />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
