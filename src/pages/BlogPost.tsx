
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id || "0");
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // If no post is found, navigate back to the blog list
  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <motion.section 
        className="section-padding py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
          
          {/* Hero Section */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, i) => (
                <span 
                  key={i} 
                  className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full inline-flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex text-muted-foreground text-sm">
              <span className="flex items-center mr-4">
                <Calendar className="h-3 w-3 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-3 w-3 mr-1" />
                {post.author}
              </span>
            </div>
          </div>
          
          {/* Post Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed mb-6">{post.excerpt}</p>
            
            {post.content.map((section, index) => (
              <div key={index} className="mb-10">
                {section.subheading && (
                  <h2 className="text-2xl font-bold mb-4">{section.subheading}</h2>
                )}
                
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
                
                {section.image && (
                  <div className="my-8 rounded-lg overflow-hidden">
                    <img 
                      src={section.image} 
                      alt={section.imageAlt || "Blog content image"} 
                      className="w-full h-auto object-cover"
                    />
                    {section.imageCaption && (
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        {section.imageCaption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {/* Call to Action */}
            <div className="bg-muted p-6 rounded-lg my-10">
              <h3 className="text-xl font-bold mb-2">Want to learn more?</h3>
              <p className="mb-4">Feel free to reach out to me if you have any questions or need assistance with your digital marketing strategy.</p>
              <Button onClick={() => navigate("/contact")}>Contact Me</Button>
            </div>
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
};

export default BlogPost;
