import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { socialLinks } from '../../data/mockData';

const Footer: React.FC = () => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Facebook className="h-5 w-5" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5" />;
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Youtube':
        return <Youtube className="h-5 w-5" />;
      case 'Linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-navy-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-montserrat font-bold text-xl">Shree Sai Education Trust</span>
            </div>
            <p className="font-lato text-gray-300 mb-6">
              Making a difference through compassion, action, and community engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-600 hover:bg-primary-500 transition-colors p-2 rounded-full"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            
          </div>

          <div className="col-span-1">
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-lato text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="font-lato text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="font-lato text-gray-300 hover:text-primary-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="font-lato text-gray-300 hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="font-lato text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="font-lato text-gray-300 mb-2">Paud Road, Kothrud</p>
              <p className="font-lato text-gray-300 mb-2">Pune, MH 411058</p>
              <p className="font-lato text-gray-300 mb-2">
                <a href="tel:+11234567890" className="hover:text-primary-400 transition-colors">
                  (+91) 98500 29119
                </a>
              </p>
              <p className="font-lato text-gray-300">
                <a href="mailto:info@givinghands.org" className="hover:text-primary-400 transition-colors">
                  shedgesagar2@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-navy-600 mt-8 pt-8 text-center">
          <p className="font-lato text-gray-400">
            &copy; {new Date().getFullYear()} Made with love <Heart className="inline h-4 w-4 text-red-500" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;