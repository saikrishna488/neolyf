"use client"
import { useState } from "react";
import { Search, ShoppingCart, Filter, Home, ChevronDown, Menu, X, Heart, Eye, Star, ArrowRight } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAtom } from "jotai";
import { productAtom } from "../states/globalstates";

// Smart home product data
const products = [
  {
    id: 1,
    name: "Neolyf Smart Curtain System",
    category: "Smart Curtains",
    price: 129.99,
    oldPrice: 159.99,
    quantity:1,
    rating: 4.8,
    reviewCount: 124,
    image: "https://cdn.pixabay.com/photo/2016/04/05/06/29/theater-1308794_1280.jpg",
    description: "Automate your curtains with voice control, scheduling, and smartphone app. Compatible with major smart home systems.",
    features: ["Voice Control", "App Control", "Scheduling", "Quiet Operation"],
    colors: ["White", "Black", "Beige"],
    inStock: true,
    isNew: true,
    isBestseller: true
  },
  {
    id: 2,
    name: "Neolyf Smart Lock Pro",
    category: "Smart Locks",
    price: 189.99,
    oldPrice: 219.99,
    quantity:1,
    rating: 4.7,
    reviewCount: 98,
    image: "https://cdn.pixabay.com/photo/2020/03/05/17/36/smart-home-4905021_1280.jpg",
    description: "Keyless entry with fingerprint, PIN code, or app. Includes guest access and activity monitoring.",
    features: ["Fingerprint", "PIN Code", "App Control", "Activity Log"],
    colors: ["Silver", "Black", "Bronze"],
    inStock: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 3,
    name: "Neolyf Touch Switch Panel",
    category: "Smart Switches",
    price: 59.99,
    oldPrice: 79.99,
    quantity:1,
    rating: 4.9,
    reviewCount: 203,
    image: "https://cdn.pixabay.com/photo/2015/09/17/14/01/hand-944189_1280.jpg",
    description: "Glass touch panel with customizable scenes and dimming. Works with or without neutral wire.",
    features: ["Touch Control", "Scene Setting", "Dimming", "LED Indicator"],
    colors: ["White", "Black"],
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 4,
    name: "Neolyf Smart Thermostat",
    category: "Climate Control",
    price: 149.99,
    oldPrice: 179.99,
    quantity:0,
    rating: 4.6,
    reviewCount: 87,
    image: "https://cdn.pixabay.com/photo/2018/09/04/10/36/smart-home-3653454_1280.jpg",
    description: "AI-powered climate control that learns your preferences and saves energy.",
    features: ["Learning Algorithm", "Energy Reports", "Remote Control", "Multi-zone Support"],
    colors: ["White", "Silver", "Black"],
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 5,
    name: "Neolyf Smart Doorbell",
    category: "Security",
    price: 99.99,
    oldPrice: 129.99,
    quantity:1,
    rating: 4.5,
    reviewCount: 76,
    image: "https://cdn.pixabay.com/photo/2019/01/30/11/52/smart-home-3964427_1280.jpg",
    description: "HD video doorbell with two-way audio, motion detection, and cloud recording.",
    features: ["HD Video", "Two-way Audio", "Motion Detection", "Night Vision"],
    colors: ["Silver", "Black", "Bronze"],
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 6,
    name: "Neolyf Smart Light Bulbs (4-pack)",
    category: "Lighting",
    price: 49.99,
    oldPrice: 69.99,
    quantity:1,
    rating: 4.7,
    reviewCount: 156,
    image: "https://cdn.pixabay.com/photo/2016/11/23/17/59/light-1854093_1280.jpg",
    description: "Color-changing smart bulbs with millions of colors and scenes. No hub required.",
    features: ["16M+ Colors", "Scenes", "Schedules", "Music Sync"],
    colors: ["White"],
    inStock: true,
    isNew: false,
    isBestseller: true
  }
];

// Categories for filtering
const categories = [
  "All Products",
  "Smart Curtains",
  "Smart Locks", 
  "Smart Switches",
  "Climate Control",
  "Security",
  "Lighting"
];

export default function SmartHomeShop() {
  const [activeCategory, setActiveCategory] = useState("All Products");
//   const [cartCount, setCartCount] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 250]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [cart,setCart]= useAtom(productAtom);
  
  // Filter products based on active category and price range
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === "All Products" || product.category === activeCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });
  
  const addToCart = (item:any) => {
    setCart((prevCount:any) => [item,...prevCount]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        activeCategory === category
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-medium text-lg mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 250]}
                    max={250}
                    step={10}
                    onValueChange={(value:any) => setPriceRange(value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">Apply Filter</Button>
              </div>
            </div>
          </aside>

          {/* Mobile Sidebar */}
          <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Browse by category or price
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveCategory(category);
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md transition ${
                          activeCategory === category
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="font-medium text-lg mb-4">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 250]}
                      max={250}
                      step={10}
                      onValueChange={(value:any) => setPriceRange(value)}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={() => setMobileSidebarOpen(false)}>
                    Apply Filter
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Main Content */}
          <main className="flex-1">
            {/* Category Title and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{activeCategory}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{filteredProducts.length} products</p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm p-2">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2 bg-blue-600">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="absolute top-2 left-2 bg-orange-500">Bestseller</Badge>
                    )}
                    {product.oldPrice && (
                      <Badge className="absolute bottom-2 left-2 bg-red-500">
                        Save ${(product.oldPrice - product.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{product.category}</div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{product.reviewCount} reviews</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{product.description}</p>
                    
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="font-normal">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="outline" className="font-normal">+{product.features.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
                          {product.oldPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                          )}
                        </div>
                        {product.inStock ? (
                          <span className="text-sm text-green-600 dark:text-green-400">In Stock</span>
                        ) : (
                          <span className="text-sm text-red-600 dark:text-red-400">Out of Stock</span>
                        )}
                      </div>
                      <Button disabled={!product.inStock} onClick={()=>addToCart(product)}>
                        Add to Cart
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Filter className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No products match your filters</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your filters or browse all products</p>
                <Button variant="outline" onClick={() => {
                  setActiveCategory("All Products");
                  setPriceRange([0, 250]);
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-8 text-center">
                <Button variant="outline" className="flex items-center gap-1 mx-auto">
                  Load More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}