
import { Leaf, Factory, Recycle, TreeDeciduous } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Composting",
      description: "Convert fruit and vegetable waste into nutrient-rich compost for urban farming initiatives.",
      icon: <TreeDeciduous className="h-12 w-12 text-green-600" />,
      benefits: ["Reduces landfill waste", "Creates valuable soil amendments", "Supports urban farming", "Low technology requirement"]
    },
    {
      title: "Biogas Generation",
      description: "Transform organic waste into biogas for cooking and electricity generation in local communities.",
      icon: <Factory className="h-12 w-12 text-green-600" />,
      benefits: ["Renewable energy source", "Reduces methane emissions", "Creates local energy independence", "Produces liquid fertilizer as byproduct"]
    },
    {
      title: "Upcycled Products",
      description: "Create value-added products from market waste, such as paper from fruit peels or packaging from agricultural waste.",
      icon: <Recycle className="h-12 w-12 text-green-600" />,
      benefits: ["Creates employment opportunities", "Reduces virgin material use", "Develops circular economy", "Innovative product development"]
    },
    {
      title: "Animal Feed",
      description: "Process suitable market waste into nutritious animal feed for local livestock farmers.",
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      benefits: ["Reduces feed costs for farmers", "Diverts waste from landfills", "Supports local agriculture", "Creates economic opportunities"]
    }
  ];

  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Solutions</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Transforming Waste into Wealth
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Innovative approaches to convert market waste into valuable resources.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="pt-6 border-t-4 border-green-600 rounded-lg bg-white shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      {solution.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-800">Key Benefits:</h4>
                    <ul className="mt-2 space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-gray-500">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
