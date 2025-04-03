
import { motion } from "framer-motion";
import { ArrowRight, DownloadIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const Home = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 -z-10" />
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm md:text-base font-medium text-primary mb-4 tracking-wider">
              DIGITAL MARKETING SPECIALIST
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-primary">Sashant Shrestha</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              A passionate digital marketing specialist with expertise in SEO and content strategy
              based in Pokhara, Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">
                  View Resume <DownloadIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 hidden md:block">
              <button
                onClick={scrollToServices}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Scroll Down <ChevronDown className="ml-1 h-4 w-4 animate-bounce" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary blur-sm"></div>
              <div className="relative bg-card rounded-full overflow-hidden border border-muted">
                <img
                  src="/lovable-uploads/951c18d9-c4fa-45a7-b521-84454b1b79dd.png"
                  alt="Sashant Shrestha"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted dark:bg-gray-900/50 section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="What I Do"
            subtitle="Specialized digital marketing services to help businesses grow online"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border hover-scale"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-4">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Mock Services Data (replace with actual services)
import { Search, BarChart3, PenLine, Share2, Target, GlobeIcon } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your website's visibility and rankings in search engines with tailored SEO strategies."
  },
  {
    icon: BarChart3,
    title: "Digital Analytics",
    description: "Track and analyze your online performance to make data-driven marketing decisions."
  },
  {
    icon: PenLine,
    title: "Content Strategy",
    description: "Create engaging content that resonates with your audience and drives conversions."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across social platforms to engage with your audience."
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns across major ad networks."
  },
  {
    icon: GlobeIcon,
    title: "Web Optimization",
    description: "Enhance your website performance and user experience to increase conversions."
  }
];

export default Home;
