import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
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