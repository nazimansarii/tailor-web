import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Scissors,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6" />
              <span className="font-serif text-xl font-semibold">Tailor</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Crafting elegant, custom-made clothing with precision and passion
              since 2012.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                to="#"
                className="text-foreground hover:text-cyan-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-foreground hover:text-cyan-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-foreground hover:text-cyan-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-muted-foreground hover:text-cyan-600transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="font-serif font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Custom Suits
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Dress Alterations
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Wedding Attire
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Repairs & Modifications
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span className="text-muted-foreground">
                  Dhanpur Bazar, Handia Prayagraj, UP (221503)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <a
                  to="tel:6307204723"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  +91 6307204723
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 " />
                <a
                  to="mailto:najimansari9120@gmail.com"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  najimansari9120@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Tailor Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
