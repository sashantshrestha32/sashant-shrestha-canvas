
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import CvPreviewDialog from "@/components/CvPreviewDialog";

const Resume = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to the image URL
    link.href = '/lovable-uploads/c2741dc1-87f8-4499-a4b0-9b0f3a078f24.png';
    // Set the download attribute with the filename
    link.download = 'Sashant_Shrestha_CV.png';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  const cvImageUrl = '/lovable-uploads/c2741dc1-87f8-4499-a4b0-9b0f3a078f24.png';

  return (
    <PageLayout>
      {/* CV Header Section with Image */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={cvImageUrl}
                alt="Sashant Shrestha CV"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">SASHANT SHRESTHA</h1>
              <div className="space-y-2 mb-6">
                <p className="text-xl">SEO Specialist</p>
                <p className="text-xl">Accountant</p>
                <p className="text-xl">Social media management</p>
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={handleDownloadCV}
                  className="flex items-center cursor-pointer"
                >
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Button>
                <CvPreviewDialog 
                  imageUrl={cvImageUrl} 
                  filename="Sashant_Shrestha_CV.png" 
                />
              </div>
            </div>
          </div>
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

      {/* References Section */}
      <section className="section-padding bg-muted dark:bg-gray-900/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="References" 
            subtitle="Professional references"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {references.map((reference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-sm border"
              >
                <h4 className="text-xl font-semibold mb-1">{reference.name}</h4>
                <p className="text-lg text-primary mb-4">{reference.position}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium w-16">Phone:</span>
                    <span className="text-muted-foreground">{reference.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium w-16">Email:</span>
                    <span className="text-muted-foreground">{reference.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.4513064642346!2d83.98655788860606!3d28.211767651347425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595b2f387fb51%3A0x8dbe257bd0694a1f!2s6X6P%2BPJJ%2C%20%E0%A4%AA%E0%A5%8B%E0%A4%96%E0%A4%B0%E0%A4%BE%2033700!5e0!3m2!1sen!2snp!4v1712091316320!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pokhara, Nepal Map"
        ></iframe>
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
