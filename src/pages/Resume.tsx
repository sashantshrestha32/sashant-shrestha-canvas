
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "@/components/ui/use-toast";

const Resume = () => {
  // Updated function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to the image URL (using absolute path)
    const cvUrl = '/lovable-uploads/0e7e62ed-c354-4735-80b4-5f51eb2ab770.png';
    
    // Fetch the image first to ensure it exists
    fetch(cvUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('CV file not found');
        }
        return response.blob();
      })
      .then(blob => {
        // Create object URL from the blob
        const objectUrl = URL.createObjectURL(blob);
        
        // Set link properties
        link.href = objectUrl;
        link.download = 'Sashant_Shrestha_CV.png';
        
        // Append to document, click, and clean up
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl);
        
        // Show success toast
        toast({
          title: "Download started",
          description: "Your CV is being downloaded",
        });
      })
      .catch(error => {
        console.error('Download failed:', error);
        toast({
          title: "Download failed",
          description: "Could not download the CV. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <PageLayout>
      {/* Download CV Button Section */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto flex justify-center">
          <Button 
            size="lg" 
            onClick={handleDownloadCV}
            className="flex items-center cursor-pointer"
          >
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Main Resume Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="My Resume" 
            subtitle="My academic background and professional experience"
          />

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

      {/* Social Media Management Section */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Social Media Management" 
            subtitle="My experience in social media management"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {socialMediaExperience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border relative"
              >
                <h4 className="text-xl font-semibold mb-1">{item.company}</h4>
                <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border">
            <p className="text-muted-foreground">
              As a Social Media Manager for My Era Events, The Phoenix Vibes, and Sanatan Films Pvt Ltd, 
              I oversee content strategy, creation, design, and posting across various platforms. 
              I develop engaging and visually appealing content, edit multimedia assets, and ensure 
              brand consistency. By leveraging trends, analytics, and audience insights, I optimize 
              engagement and drive social media growth, enhancing brand visibility and digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
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

      {/* Map Section - Enhanced Google Map of Pokhara */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="My Location" 
            subtitle="Based in Pokhara, Nepal"
          />
          
          <div className="rounded-lg overflow-hidden shadow-lg border border-muted">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56264.40159767707!2d83.9273775895508!3d28.209634900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1712091316320!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pokhara, Nepal Map"
              ></iframe>
            </div>
            <div className="p-4 bg-card">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <p className="font-medium">Pokhara, Nepal</p>
              </div>
            </div>
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
    position: "SEO Specialist",
    company: "BG Tech, Australia",
    period: "2025 - Till Now",
    description: "SEO Specialist at BG Tech, specializing in on-page, off-page, and technical SEO. I optimize website performance, enhance search rankings, and drive organic traffic through strategic keyword research, link building, and technical improvements. Skilled in SEO analytics, I implement data-driven strategies to boost online visibility and business growth.",
    skills: ["SEO", "Content Strategy", "Google Analytics", "Keyword Research", "Technical SEO", "Link Building"]
  }
];

// Social Media experience data
const socialMediaExperience = [
  {
    company: "The Phoenix Vibes",
    period: "2025 - Till Now"
  },
  {
    company: "Sanatan Films Pvt Ltd",
    period: "2025 - Till Now"
  },
  {
    company: "My Era Events",
    period: "2025 - Till Now"
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
    name: "Content Writing Certification",
    issuer: "Google",
    date: "2023"
  },
  {
    name: "On-Page SEO Certification",
    issuer: "Google",
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
  }
];

// References data
const references = [
  {
    name: "Er. Raju Shrestha",
    position: "BG Tech / CEO",
    phone: "61-434 884 847",
    email: "shrestharju08@gmail.com"
  },
  {
    name: "Sharada Shrestha",
    position: "Sahara Trading / Propider",
    phone: "+ 977 9846069333",
    email: "saharatrading484@gmail.com"
  }
];

export default Resume;
