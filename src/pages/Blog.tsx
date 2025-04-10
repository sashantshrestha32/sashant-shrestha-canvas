
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading 
            title="Blog" 
            subtitle="Insights and tips on digital marketing, SEO, and more"
          />

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-12">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card dark:bg-gray-800 rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {post.categories.map((category, i) => (
                      <span 
                        key={i} 
                        className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex text-muted-foreground text-sm mb-3">
                      <span className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="link" className="p-0 hover:text-primary">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
