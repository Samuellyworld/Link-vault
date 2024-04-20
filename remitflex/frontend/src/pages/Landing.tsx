import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SplashSection from "@/components/splash-section";

const LandingPage: () => JSX.Element = () => {
  return (
    <>
      <Header />
      <Hero />
      <SplashSection />
      <Footer />
    </>
  );
};

export default LandingPage;
