
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
            <Button size="lg" asChild>
              <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:3a56b2cc-318d-4c20-a82b-af5c4d6d92f0" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Download Full Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
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

// Mock education data (replace with actual data)
const education = [
  {
    degree: "Bachelor of Business Administration",
    institution: "Prithvi Narayan Campus",
    period: "2018 - 2022",
    description: "Specialized in Marketing and Digital Business Strategies with focus on consumer behavior and market analysis."
  },
  {
    degree: "Digital Marketing Certificate",
    institution: "Google Digital Garage",
    period: "2020",
    description: "Comprehensive training in digital marketing fundamentals, SEO, analytics, and online advertising."
  },
  {
    degree: "Higher Secondary Education",
    institution: "Gandaki Boarding School",
    period: "2016 - 2018",
    description: "Focused on Management and Commerce with additional courses in Computer Applications."
  }
];

// Mock experience data (replace with actual data)
const experience = [
  {
    position: "Digital Marketing Specialist",
    company: "TechNepal Solutions",
    period: "2021 - Present",
    description: "Leading digital marketing strategies for various clients across industries. Implementing SEO, content marketing, and PPC campaigns that increased client visibility by an average of 45%.",
    skills: ["SEO", "Content Strategy", "Google Analytics", "PPC", "Social Media"]
  },
  {
    position: "SEO Analyst",
    company: "WebGrowth Nepal",
    period: "2019 - 2021",
    description: "Conducted comprehensive SEO audits and implemented optimization strategies that improved client rankings. Developed content strategies resulting in 60% increase in organic traffic.",
    skills: ["Technical SEO", "Keyword Research", "Content Optimization", "Link Building"]
  },
  {
    position: "Marketing Intern",
    company: "Pokhara Digital Agency",
    period: "2018 - 2019",
    description: "Assisted in managing social media accounts for small businesses. Created content calendars and helped implement various digital marketing campaigns.",
    skills: ["Social Media", "Content Creation", "Email Marketing"]
  }
];

// Mock certification data (replace with actual data)
const certifications = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    date: "2022"
  },
  {
    name: "Hubspot Inbound Marketing",
    issuer: "HubSpot Academy",
    date: "2021"
  },
  {
    name: "SEO Fundamentals",
    issuer: "Semrush Academy",
    date: "2020"
  },
  {
    name: "Content Marketing",
    issuer: "Coursera",
    date: "2020"
  },
  {
    name: "Social Media Marketing",
    issuer: "Facebook Blueprint",
    date: "2019"
  },
  {
    name: "Email Marketing",
    issuer: "Mailchimp Academy",
    date: "2019"
  }
];

export default Resume;
