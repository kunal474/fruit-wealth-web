
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SolutionsSection from "@/components/SolutionsSection";
import { Leaf, Recycle, TreeDeciduous, Factory } from "lucide-react";

const Solutions = () => {
  const caseStudies = [
    {
      title: "Urban Composting Initiative",
      location: "Mumbai, India",
      description: "A community-driven program that collects vegetable waste from local markets and converts it into compost for urban gardens and parks.",
      impact: "Diverts 2 tons of waste daily, produces 500kg of compost weekly, and supports 12 community gardens.",
      icon: <TreeDeciduous className="h-6 w-6 text-green-600" />,
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      title: "Market Waste Biogas Plant",
      location: "Nairobi, Kenya",
      description: "A biogas facility that processes fruit and vegetable waste from five local markets to generate cooking gas for nearby communities.",
      impact: "Processes 3.5 tons of waste daily, provides gas to 150 households, and reduces methane emissions by 75%.",
      icon: <Factory className="h-6 w-6 text-green-600" />,
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      title: "Fruit Peel Paper Production",
      location: "Barcelona, Spain",
      description: "An innovative small business creating handmade paper products from citrus peels and other market fruit waste.",
      impact: "Upcycles 200kg of peels weekly, creates employment for 15 people, and produces eco-friendly packaging.",
      icon: <Recycle className="h-6 w-6 text-green-600" />,
      imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
  ];

  const implementationSteps = [
    {
      title: "Assessment & Planning",
      description: "Conduct waste audits, engage stakeholders, and develop a tailored implementation plan.",
      steps: [
        "Survey market vendors and operators",
        "Quantify waste volumes and types",
        "Analyze local regulations and permits",
        "Identify potential partners and funding sources",
        "Develop a detailed project timeline"
      ]
    },
    {
      title: "Infrastructure Development",
      description: "Set up the necessary collection systems, processing facilities, and distribution networks.",
      steps: [
        "Design waste collection system",
        "Secure processing location",
        "Install appropriate technology",
        "Establish quality control procedures",
        "Create distribution channels for end products"
      ]
    },
    {
      title: "Community Engagement",
      description: "Train participants, raise awareness, and build support for the waste-to-wealth initiative.",
      steps: [
        "Conduct education workshops for vendors",
        "Train waste collectors and processors",
        "Develop educational materials",
        "Host community demonstrations",
        "Create incentive programs for participation"
      ]
    },
    {
      title: "Monitoring & Optimization",
      description: "Track progress, measure impact, and continuously improve operations.",
      steps: [
        "Implement data collection systems",
        "Regularly analyze performance metrics",
        "Gather participant feedback",
        "Optimize processes for efficiency",
        "Publish impact reports and success stories"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Waste to Wealth Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl">
            Innovative approaches to transform market waste into valuable resources, creating environmental and economic benefits.
          </p>
        </div>
      </div>
      
      {/* Solutions Overview */}
      <SolutionsSection />
      
      {/* Implementation Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Implementation Guide</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              A step-by-step approach to establishing waste-to-wealth initiatives in your community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {step.steps.map((substep, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium">{i + 1}</span>
                        </span>
                        <span className="text-gray-700">{substep}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Success Stories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Real-world examples of successful waste-to-wealth initiatives around the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {study.icon}
                    <span className="ml-2 text-sm font-medium text-green-600">{study.location}</span>
                  </div>
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">{study.description}</p>
                </CardContent>
                <CardFooter className="bg-green-50 border-t border-green-100">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Impact:</h4>
                    <p className="text-sm text-gray-600">{study.impact}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Resources & Tools</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Helpful materials to support your waste-to-wealth journey.
            </p>
          </div>
          
          <Tabs defaultValue="guides" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Guides</CardTitle>
                  <CardDescription>Step-by-step instructions for various waste-to-wealth solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <Leaf className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium">Community Composting Guide</h4>
                        <p className="text-sm text-gray-500">Comprehensive guide to setting up community composting programs</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Download</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <Factory className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium">Small-Scale Biogas Manual</h4>
                        <p className="text-sm text-gray-500">Technical guide for building and operating biogas digesters</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Download</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <Recycle className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium">Market Waste Collection System</h4>
                        <p className="text-sm text-gray-500">Blueprint for efficient market waste collection infrastructure</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Download</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Planning & Analysis Tools</CardTitle>
                  <CardDescription>Tools to help you plan and optimize your initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Waste Audit Template</h4>
                        <p className="text-sm text-gray-500">Spreadsheet for conducting market waste audits</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Download</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">ROI Calculator</h4>
                        <p className="text-sm text-gray-500">Financial modeling tool for waste-to-wealth projects</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Access</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Environmental Impact Calculator</h4>
                        <p className="text-sm text-gray-500">Estimate GHG emissions reduction from your project</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Access</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="research" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research & Case Studies</CardTitle>
                  <CardDescription>Academic papers and detailed case studies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Economic Benefits of Market Waste Recovery</h4>
                        <p className="text-sm text-gray-500">Research paper analyzing the economic impacts of waste recovery</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Read</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Comparative Analysis of Waste Treatment Methods</h4>
                        <p className="text-sm text-gray-500">Study comparing various waste processing technologies</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Read</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Social Impact of Community Waste Initiatives</h4>
                        <p className="text-sm text-gray-500">Research on community engagement and social benefits</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Read</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="funding" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Opportunities</CardTitle>
                  <CardDescription>Grants, loans, and investment opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Green Infrastructure Grants</h4>
                        <p className="text-sm text-gray-500">Municipal grants for waste management infrastructure</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Details</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Climate Innovation Fund</h4>
                        <p className="text-sm text-gray-500">Funding for climate-positive waste solutions</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Apply</Button>
                    </li>
                    <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-green-50 transition-colors">
                      <div>
                        <h4 className="font-medium">Impact Investor Network</h4>
                        <p className="text-sm text-gray-500">Connect with investors interested in sustainable ventures</p>
                      </div>
                      <Button variant="ghost" className="ml-auto">Connect</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Start Your Waste-to-Wealth Journey?
          </h2>
          <p className="mt-4 text-xl">
            We're here to help you implement these solutions in your community.
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="px-6 py-3 text-green-700 bg-white hover:bg-gray-100 rounded-md text-lg font-medium">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;
