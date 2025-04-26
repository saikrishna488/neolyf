import { useState } from "react";
import { Search, ArrowRight, Calendar, User, MessageSquare, Heart, Share2, Bookmark } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Demo data for Neolyf Solutions smart home/hotel blog
const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Hotel Experiences with Smart Room Technology",
    excerpt: "Discover how Neolyf's integrated smart room solutions are transforming the hospitality industry with personalized guest experiences.",
    content: "Smart hotel rooms are redefining luxury and convenience in the hospitality sector. With Neolyf's integrated solutions, guests enjoy seamless control over their environment.",
    author: {
      name: "Elena Martinez",
      image: "https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_1280.png",
      role: "Hospitality Solutions Specialist"
    },
    category: "Hotel Solutions",
    tags: ["Smart Hotels", "Guest Experience", "IoT"],
    date: "April 23, 2025",
    readTime: "5 min read",
    comments: 12,
    likes: 47,
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg"
  },
  {
    id: 2,
    title: "Energy Efficiency in Smart Homes: The Neolyf Approach",
    excerpt: "Learn how our smart home systems can reduce energy consumption by up to 30% while enhancing comfort and convenience.",
    content: "Sustainability meets luxury with Neolyf's energy-efficient smart home solutions, designed to optimize resource usage without compromising on comfort.",
    author: {
      name: "Raj Patel",
      image: "https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_1280.png",
      role: "Smart Home Energy Expert"
    },
    category: "Smart Home",
    tags: ["Energy Efficiency", "Sustainability", "Home Automation"],
    date: "April 20, 2025",
    readTime: "7 min read",
    comments: 15,
    likes: 62,
    image: "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg"
  },
  {
    id: 3,
    title: "Seamless Integration: Connecting Your Smart Home Devices",
    excerpt: "The ultimate guide to creating a cohesive smart home ecosystem with Neolyf's integration platform.",
    content: "Device fragmentation has long been the achilles heel of smart home adoption. Neolyf's unified control system bridges this gap, creating truly connected living spaces.",
    author: {
      name: "Marcus Chen",
      image: "https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_1280.png",
      role: "Systems Integration Specialist"
    },
    category: "Smart Home",
    tags: ["Integration", "IoT", "Connected Living"],
    date: "April 18, 2025",
    readTime: "6 min read",
    comments: 10,
    likes: 35,
    image: "https://cdn.pixabay.com/photo/2016/04/15/11/45/hotel-1330841_1280.jpg"
  }
];

// Featured post is the first one
const featuredPost = blogPosts[0];
// Regular posts exclude the featured one
const regularPosts = blogPosts.slice(1);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        {/* Notification Alert */}
        <Alert className="mb-8">
          <AlertTitle>Neolyf Solutions Announcement</AlertTitle>
          <AlertDescription>
            Join us for the unveiling of our next-generation hotel management system on May 15th, 2025.
          </AlertDescription>
        </Alert>

        {/* Featured Post */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-2">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{featuredPost.date} · {featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{featuredPost.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.excerpt}</p>
                
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={featuredPost.author.image} alt={featuredPost.author.name} />
                    <AvatarFallback>{featuredPost.author.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{featuredPost.author.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{featuredPost.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-xs">{featuredPost.comments}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-xs">{featuredPost.likes}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Latest Posts Grid */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
            <Button variant="ghost" className="flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map(post => (
              <Card key={post.id} className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.image} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Stay Updated with Neolyf</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">Subscribe to our newsletter for the latest smart home and hotel technology updates, product releases, and industry insights.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>
    </div>
  );
}