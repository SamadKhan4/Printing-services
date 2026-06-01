import { useEffect } from "react";
import gsap from "gsap";
import BulkCTA from "../components/home/BulkCTA.jsx";
import CategoryCards from "../components/home/CategoryCards.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import Hero from "../components/home/Hero.jsx";
import ServicesPreview from "../components/home/ServicesPreview.jsx";
import Showcase from "../components/home/Showcase.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", { y: 28, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
      gsap.from(".hero-visual", { y: 34, opacity: 0, duration: 0.95, delay: 0.15, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Hero />
      <CategoryCards />
      <WhyChooseUs />
      <FeaturedProducts />
      <ServicesPreview />
      <Showcase />
      <Testimonials />
      <BulkCTA />
    </>
  );
}
