import AboutPreview from "@/components/home/AboutPreview";
import ContactPreview from "@/components/home/ContactPreview";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <AboutPreview />
      <WhyChooseUs />
      <ContactPreview />
    </>
  );
}
