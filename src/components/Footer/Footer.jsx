import React, { useContext } from "react";
import {
  Home,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="bg-gray-100 pl-5 dark:bg-gray-900 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:pl-5">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-primary">RoomieMatch</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Finding your perfect roommate match has never been easier. Create
              a profile, browse listings, and connect with compatible roommates.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink to={"/"} className="text-gray-300 hover:text-primary">
                  Home
                </NavLink>
              </li>
              <li>
                <Link
                  to="/addToFindRoommate"
                  className="text-gray-300 hover:text-primary"
                >
                  Add to Find Roommate
                </Link>
              </li>
              <li>
                <Link
                  to="/browseListing"
                  className="text-gray-300 hover:text-primary"
                >
                  Browse Listings
                </Link>
              </li>
              {user && (
                <li>
                  <NavLink to={"/myListing"}>My Listings </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Roommate Street, Apartment City, AC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">
                  support@roomiematch.com
                </span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} RoomieMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
