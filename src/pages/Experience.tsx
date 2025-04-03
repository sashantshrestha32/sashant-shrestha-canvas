
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Professional Experience" 
            subtitle="A detailed look at my professional journey"
          />

          <div className="max-w-3xl mx-auto">
            {/* Timeline Experience */}
            <div className="relative border-l-2 border-primary pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-16 relative"
                >
                  <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full border-4 bg-background border-primary flex items-center justify-center">
                    <Briefcase className="h-3 w-3 text-primary" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-primary mb-4">{exp.company}</h4>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Achievements:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="bg-muted dark:bg-gray-800 px-3 py-1 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link to="/resume">
                  View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Testimonials" 
            subtitle="What clients say about my work"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border relative"
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

// Updated experience data with BG Tech in Australia
const experiences = [
  {
    period: "January 2024 - Present",
    role: "SEO Expert & Digital Marketer",
    company: "BG Tech, Australia",
    description: "Leading comprehensive digital marketing strategies and SEO optimization for a diverse client portfolio across multiple industries.",
    responsibilities: [
      "Develop and implement SEO strategies to improve client website rankings",
      "Create and manage content marketing campaigns across multiple platforms",
      "Analyze website performance using Google Analytics and other tools",
      "Manage PPC campaigns across Google, Facebook, and Instagram",
      "Conduct comprehensive SEO audits for client websites"
    ],
    achievements: [
      "Increased organic traffic by 70% for key clients within 6 months",
      "Reduced PPC costs by 30% while maintaining conversion rates",
      "Streamlined content creation process improving delivery time by 40%"
    ],
    skills: ["SEO", "Content Marketing", "Google Analytics", "PPC", "Social Media Marketing", "Email Marketing"]
  }
];

// Updated testimonials with Er. Raju Shrestha
const testimonials = [
  {
    text: "Sashant is an exceptional SEO expert who has transformed our online presence. His deep understanding of digital marketing strategies has been invaluable to our company's growth and client acquisition efforts.",
    name: "Er. Raju Shrestha",
    role: "CEO, BG Tech"
  },
  {
    text: "Working with Sashant has been a game-changer for our e-commerce business. His social media strategies and PPC campaigns significantly increased our conversion rates. He's not just knowledgeable but also keeps up with the latest trends in digital marketing.",
    name: "Anita Gurung",
    role: "Marketing Director, Himalayan Crafts"
  },
  {
    text: "Sashant's content strategy completely revitalized our blog. The SEO-optimized content he created consistently drives quality traffic to our website. His analytical approach combined with creative insights makes him a standout digital marketer.",
    name: "Bikash Poudel",
    role: "Founder, TechStartup Nepal"
  }
];

export default Experience;
