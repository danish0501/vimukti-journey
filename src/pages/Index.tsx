import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
// import Legacy from "@/components/home/Legacy";
import Offerings from "@/components/home/Offerings";
// import Wellness from "@/components/home/Wellness";
import Testimonials from "@/components/home/Testimonials";
// import BlogFeed from "@/components/home/BlogFeed";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Intro />
      {/* <Legacy /> */}
      <Offerings />
      {/* <Wellness /> */}
      <Testimonials />
      {/* <BlogFeed /> */}
    </div>
  );
};

export default Index;
