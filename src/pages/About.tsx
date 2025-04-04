
import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <PageLayout>
      {/* About Me Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about my background and expertise"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                Digital Marketing Specialist & SEO Expert
              </h3>
              
              <p className="text-muted-foreground">
                Hello! I'm Sashant Shrestha, a digital marketing specialist based in Pokhara, Nepal. 
                I specialize in helping businesses grow their online presence through effective 
                SEO strategies, content optimization, and comprehensive digital marketing solutions.
              </p>
              
              <p className="text-muted-foreground">
                With a passion for helping brands connect with their audiences, I leverage data-driven 
                approaches to drive measurable results. My goal is to create marketing strategies that 
                not only increase visibility but also drive meaningful engagement and conversions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div>
                <Button asChild>
                  <a href="/resume">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden border border-muted shadow-md">
                <img
                  src="/lovable-uploads/951c18d9-c4fa-45a7-b521-84454b1b79dd.png"
                  alt="Sashant Shrestha"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <SectionHeading
            title="My Skills"
            subtitle="Expertise and technologies I work with"
          />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const personalDetails = [
  "Based in Pokhara and Australia",
  "Digital Marketing Specialist",
  "SEO Expert",
  "Content Strategist",
  "Digital Analytics",
  "Marketing Consultation"
];

const skills = [
  { name: "Search Engine Optimization", level: 95 },
  { name: "Content Marketing", level: 90 },
  { name: "Social Media Management", level: 85 },
  { name: "Google Analytics", level: 88 },
  { name: "Email Marketing", level: 80 },
  { name: "Pay-Per-Click (PPC)", level: 82 },
  { name: "Technical SEO", level: 85 },
  { name: "Marketing Automation", level: 78 }
];

export default About;
