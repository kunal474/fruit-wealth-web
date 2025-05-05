import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart as RechartsChart } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const Impact = () => {
  // Data for environmental impact chart
  const environmentalData = [
    {
      month: "Jan",
      "Waste Diverted (tons)": 42,
      "CO₂ Saved (tons)": 12,
    },
    {
      month: "Feb",
      "Waste Diverted (tons)": 48,
      "CO₂ Saved (tons)": 14,
    },
    {
      month: "Mar",
      "Waste Diverted (tons)": 53,
      "CO₂ Saved (tons)": 15,
    },
    {
      month: "Apr",
      "Waste Diverted (tons)": 58,
      "CO₂ Saved (tons)": 17,
    },
    {
      month: "May",
      "Waste Diverted (tons)": 65,
      "CO₂ Saved (tons)": 19,
    },
    {
      month: "Jun",
      "Waste Diverted (tons)": 72,
      "CO₂ Saved (tons)": 21,
    },
  ];

  // Data for economic impact chart
  const economicData = [
    {
      quarter: "Q1 2024",
      "Jobs Created": 12,
      "Revenue Generated ($1000)": 24,
    },
    {
      quarter: "Q2 2024",
      "Jobs Created": 18,
      "Revenue Generated ($1000)": 35,
    },
    {
      quarter: "Q3 2024",
      "Jobs Created": 22,
      "Revenue Generated ($1000)": 42,
    },
    {
      quarter: "Q4 2024",
      "Jobs Created": 28,
      "Revenue Generated ($1000)": 58,
    },
    {
      quarter: "Q1 2025",
      "Jobs Created": 34,
      "Revenue Generated ($1000)": 65,
    },
  ];

  // Data for waste composition pie chart
  const wasteCompositionData = [
    { name: "Fruit Waste", value: 45 },
    { name: "Vegetable Waste", value: 30 },
    { name: "Packaging", value: 15 },
    { name: "Other Organic", value: 10 },
  ];

  // Progress towards sustainable development goals
  const sdgProgress = [
    { goal: "Zero Hunger", progress: 68, description: "Supporting community food security through compost for urban farming" },
    { goal: "Good Health & Well-being", progress: 72, description: "Reducing disease vectors from improper waste disposal" },
    { goal: "Clean Water & Sanitation", progress: 54, description: "Preventing water pollution from market waste runoff" },
    { goal: "Affordable & Clean Energy", progress: 42, description: "Generating biogas from organic waste" },
    { goal: "Decent Work & Economic Growth", progress: 78, description: "Creating jobs in waste collection and processing" },
    { goal: "Sustainable Cities", progress: 65, description: "Improving urban waste management systems" },
    { goal: "Responsible Consumption", progress: 83, description: "Promoting circular economy principles" },
    { goal: "Climate Action", progress: 61, description: "Reducing greenhouse gas emissions from waste" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our Impact
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl">
            Measuring the environmental, economic, and social benefits of our waste-to-wealth initiatives.
          </p>
        </div>
      </div>
      
      {/* Key Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Impact Metrics</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Tracking our progress toward sustainable development goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-green-800">338 tons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">Total Waste Diverted</p>
                <p className="text-sm text-gray-500">From landfills since program inception</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-blue-800">98 tons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">CO₂ Emissions Saved</p>
                <p className="text-sm text-gray-500">Equivalent to planting 1,620 trees</p>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-orange-800">34 jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">Local Jobs Created</p>
                <p className="text-sm text-gray-500">In waste collection and processing</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-purple-800">12 markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">Markets Participating</p>
                <p className="text-sm text-gray-500">Across 5 cities in the region</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Detailed Impact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Detailed Impact Analysis</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Exploring the multidimensional benefits of our waste-to-wealth approach.
            </p>
          </div>
          
          <Tabs defaultValue="environmental" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
              <TabsTrigger value="economic">Economic</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>
            
            <TabsContent value="environmental" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Waste Diversion & Carbon Savings</h3>
                    <div className="h-80">
                      <RechartsChart 
                        type="bar"
                        data={environmentalData}
                        index="month"
                        categories={["Waste Diverted (tons)", "CO₂ Saved (tons)"]}
                        colors={["#16A34A", "#0891B2"]}
                        valueFormatter={(value) => `${value} tons`}
                        yAxisWidth={60}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Market Waste Composition</h3>
                    <div className="h-80">
                      <RechartsChart 
                        type="pie"
                        data={wasteCompositionData}
                        index="name"
                        categories={["value"]}
                        colors={["#84cc16", "#22c55e", "#14b8a6", "#0ea5e9"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Environmental Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Reduced Methane Emissions:</span> By diverting organic waste from landfills, we've prevented the release of 42 tons of methane gas.</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Water Conservation:</span> Our composting processes use 75% less water compared to traditional waste management.</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Reduced Transportation:</span> Localized processing has eliminated the need for 22,000 km of waste transportation.</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Urban Biodiversity:</span> Compost-enriched urban gardens have shown a 35% increase in pollinator activity.</p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="economic" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Jobs Created & Revenue Generated</h3>
                    <div className="h-80">
                      <RechartsChart 
                        type="bar"
                        data={economicData}
                        index="quarter"
                        categories={["Jobs Created", "Revenue Generated ($1000)"]}
                        colors={["#ca8a04", "#0891B2"]}
                        yAxisWidth={60}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-amber-50 border-amber-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-amber-800">$224,000</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 font-medium">Total Revenue Generated</p>
                        <p className="text-sm text-gray-500">From sale of value-added products</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-sky-50 border-sky-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-sky-800">$186,000</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 font-medium">Waste Management Savings</p>
                        <p className="text-sm text-gray-500">For participating municipalities</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Value Chain Economic Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Market Vendors:</span> 15% reduction in waste disposal costs, saving an average of $420 per vendor annually.</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Local Farmers:</span> Access to affordable organic compost has increased crop yields by an average of 22%.</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">New Businesses:</span> 8 new micro-enterprises created to process and market value-added products.</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700"><span className="font-medium">Skills Development:</span> 124 individuals trained in waste processing techniques, enhancing employment opportunities.</p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Social Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Community Engagement</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-4xl font-bold text-indigo-600">42</p>
                        <p className="text-gray-700 font-medium">Community Workshops</p>
                        <p className="text-sm text-gray-500">Educating residents on waste separation and composting</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-4xl font-bold text-indigo-600">865</p>
                        <p className="text-gray-700 font-medium">Workshop Participants</p>
                        <p className="text-sm text-gray-500">Expanding knowledge and skills in sustainable practices</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-4xl font-bold text-indigo-600">18</p>
                        <p className="text-gray-700 font-medium">School Programs</p>
                        <p className="text-sm text-gray-500">Educating youth on sustainable waste management</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-4xl font-bold text-indigo-600">9</p>
                        <p className="text-gray-700 font-medium">Community Gardens</p>
                        <p className="text-sm text-gray-500">Using compost from market waste</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Sustainable Development Goals Contribution</h3>
                    <div className="space-y-6">
                      {sdgProgress.map((sdg, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">{sdg.goal}</span>
                            <span className="text-sm text-gray-500">{sdg.progress}%</span>
                          </div>
                          <Progress value={sdg.progress} className="h-2" />
                          <p className="text-sm text-gray-600">{sdg.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Community Testimonials</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-400">
                        <p className="text-gray-700 italic mb-4">"The composting program has transformed our community garden. We're growing more produce than ever, and it's all thanks to the rich compost from our local market."</p>
                        <footer className="text-sm text-gray-500">
                          <strong>Maria Rodriguez</strong> - Community Garden Coordinator
                        </footer>
                      </blockquote>
                      
                      <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-400">
                        <p className="text-gray-700 italic mb-4">"As a market vendor, I used to pay to have my waste removed. Now it's collected for free, and I've even started using the compost for my own small farm. It's a win-win."</p>
                        <footer className="text-sm text-gray-500">
                          <strong>Joseph Nguyen</strong> - Fruit Vendor
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Future Goals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Future Goals</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our roadmap for expanding our impact in the coming years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">2025 Goal</h3>
              <p className="mt-2 text-base text-gray-500">
                Expand to 25 markets across 10 cities, diverting 1,000 tons of waste annually.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">2027 Goal</h3>
              <p className="mt-2 text-base text-gray-500">
                Create a self-sustaining financial model with 100% operational costs covered by product sales.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">2030 Goal</h3>
              <p className="mt-2 text-base text-gray-500">
                Develop an open-source toolkit for communities worldwide to implement our waste-to-wealth model.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Report Download */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Download Our Full Impact Report
          </h2>
          <p className="mt-4 text-xl">
            Get detailed insights and metrics about our waste-to-wealth initiatives.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-green-700 hover:bg-gray-100 rounded-md text-lg font-medium">
              Download 2024 Impact Report (PDF)
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Impact;
