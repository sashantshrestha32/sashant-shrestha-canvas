
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const Resume = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="My Resume" 
            subtitle="My academic background and professional experience"
          />

          <div className="flex justify-center mb-8">
            <div className="space-y-4 text-center">
              <div className="w-full max-w-md mx-auto border rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/7c6317d3-7d67-4776-83a2-502f665c0738.png" 
                  alt="Sashant Shrestha CV" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <Button size="lg" asChild>
                <a href="/lovable-uploads/7c6317d3-7d67-4776-83a2-502f665c0738.png" 
                  download="Sashant_Shrestha_CV.png" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Download Full Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold ml-3">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border relative"
                  >
                    <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                    <h5 className="text-lg font-medium text-primary mb-3">{item.institution}</h5>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold ml-3">Experience</h3>
              </div>

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border relative"
                  >
                    <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{item.position}</h4>
                    <h5 className="text-lg font-medium text-primary mb-3">{item.company}</h5>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-muted dark:bg-gray-700 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Certifications" 
            subtitle="Professional certifications and achievements"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border hover-scale"
              >
                <div className="flex items-start">
                  <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{cert.name}</h4>
                    <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Updated education data
const education = [
  {
    degree: "Bachelor in Information Technology",
    institution: "London Metropolitan University",
    period: "2023 - Till now",
    description: "Pursuing a degree in Information Technology, focusing on modern digital technologies and their applications."
  },
  {
    degree: "Primary and Secondary Schooling",
    institution: "Gandaki Boarding School",
    period: "2014 - 2023",
    description: "Completed primary and secondary education with a focus on science and computer applications."
  }
];

// Updated experience data
const experience = [
  {
    position: "SEO Expert & Digital Marketer",
    company: "BG Tech, Australia",
    period: "2024 - Present",
    description: "Leading digital marketing strategies and SEO optimization for various clients across industries. Implementing comprehensive digital marketing campaigns to enhance online visibility.",
    skills: ["SEO", "Content Strategy", "Google Analytics", "PPC", "Social Media"]
  }
];

// Updated certification data
const certifications = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    date: "2023"
  },
  {
    name: "SEO Fundamentals",
    issuer: "Semrush Academy",
    date: "2023"
  },
  {
    name: "Content Marketing",
    issuer: "Coursera",
    date: "2022"
  },
  {
    name: "Social Media Marketing",
    issuer: "Facebook Blueprint",
    date: "2022"
  },
  {
    name: "Content Writing Certification",
    issuer: "Google",
    date: "2023"
  },
  {
    name: "On-Page SEO Certification",
    issuer: "Google",
    date: "2023"
  }
];

export default Resume;
