import Footer from "./components/Footer";
import Competitive from "./components/competitive";
import FAQs from "./components/faqs";
import Feature from "./components/feature";
import Hero from "./components/hero";
import MathologyWork from "./components/mathology_work";
import MaxWidthWrapper from "./components/max-width-wrapper";
import Navbar from "./components/navbar";
import Partner from "./components/partner";
import Platform from "./components/plateform";
import Testimonial from "./components/testemonial";
import TrustedBy from "./components/trusted_by";
import WhyMathology from "./components/why_mathology";

const App = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start bg-gray-50">
      <Navbar />
      <Hero id="hero" />
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-20 bg-gray-50 py-20">
        <Feature id="features" />
        <WhyMathology />
      </MaxWidthWrapper>
      <Platform />
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-20 bg-gray-50 py-20">
        <TrustedBy />
      </MaxWidthWrapper>
      <MathologyWork id="mathology-work" />
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-20 bg-gray-50 py-20">
        <Competitive />
        <Partner />
      </MaxWidthWrapper>
      <Testimonial id="testimonials" />
      <MaxWidthWrapper className="flex flex-col items-start justify-start gap-20 bg-gray-50 py-20">
        <FAQs id="faq" />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default App;
