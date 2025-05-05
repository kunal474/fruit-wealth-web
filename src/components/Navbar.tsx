
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Recycle, Menu, X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Waste to Wealth</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/survey" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Survey
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Solutions
            </Link>
            <Link to="/impact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
              Impact
            </Link>
            <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
              <Leaf className="mr-2 h-4 w-4" />
              Get Involved
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/survey" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={toggleMenu}
            >
              Survey
            </Link>
            <Link 
              to="/solutions" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={toggleMenu}
            >
              Solutions
            </Link>
            <Link 
              to="/impact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              onClick={toggleMenu}
            >
              Impact
            </Link>
            <Button 
              variant="default" 
              className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white"
              onClick={toggleMenu}
            >
              <Leaf className="mr-2 h-4 w-4" />
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
