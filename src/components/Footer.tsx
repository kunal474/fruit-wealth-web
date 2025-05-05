
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">Waste to Wealth</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Transforming market waste into valuable resources for a sustainable future. Join us in creating a circular economy.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/survey" className="text-gray-300 hover:text-white">
                  Survey
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-white">
                  Impact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">123 Green Street, Eco City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-300">info@wastetowealth.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-300">&copy; 2025 Waste to Wealth Initiative. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
