// src/components/Footer.js
import React from "react";
import { ChevronDown } from "lucide-react";

const Footer = ({ isMobile }) => {
  const footerColumns = [
    {
      title: "Quick Links",
      links: ["Home", "About Us", "Find Courts", "How It Works", "Contact Us"]
    },
    {
      title: "Sports",
      links: ["Basketball", "Badminton", "Tennis", "Futsal", "Pickleball"]
    },
    {
      title: "Support",
      links: [
        "FAQ",
        "Help Center",
        "Privacy Policy",
        "Terms of Service",
        "Refund Policy"
      ]
    }
  ];

  const FooterAccordion = ({ title, links }) => (
    <div className="col-span-1">
      <details className="group">
        <summary className="flex justify-between items-center font-bold text-gray-800 cursor-pointer list-none">
          {title}
          <ChevronDown
            size={16}
            className="group-open:rotate-180 transition-transform"
          />
        </summary>
        <ul className="mt-2 space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );

  const FooterColumn = ({ title, links }) => (
    <div>
      <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const NewsletterSignup = () => (
    <div>
      <h3 className="font-bold text-gray-800 mb-3">Stay Updated</h3>
      <div>
        <div className="flex mb-2">
          <input
            type="email"
            placeholder="Your email"
            className="py-2 px-3 bg-gray-100 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full text-sm"
          />
          <button className="bg-green-600 text-white font-bold py-2 px-3 rounded-r-md text-sm">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500">
          Get the latest updates and offers
        </p>
      </div>
    </div>
  );

  return (
    <footer className="bg-white border-t border-gray-200 pt-8 md:pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8">
          {/* Column 1 */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-blue-500 text-white font-bold py-1 px-3 rounded inline-block mb-3 md:mb-4 text-sm md:text-base">
              BookLap
            </div>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              The premier sports court booking platform in Indonesia.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm"
              >
                f
              </a>
              <a
                href="#"
                className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm"
              >
                in
              </a>
              <a
                href="#"
                className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm"
              >
                ig
              </a>
            </div>
          </div>

          {/* Mobile Footer Accordion or Desktop Footer Columns */}
          {isMobile ? (
            <>
              {footerColumns.map((column, index) => (
                <FooterAccordion
                  key={index}
                  title={column.title}
                  links={column.links}
                />
              ))}
              <div className="col-span-2">
                <NewsletterSignup />
              </div>
            </>
          ) : (
            <>
              {footerColumns.map((column, index) => (
                <FooterColumn
                  key={index}
                  title={column.title}
                  links={column.links}
                />
              ))}
              <NewsletterSignup />
            </>
          )}
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6 text-center text-gray-600 text-xs md:text-sm">
          © 2025 BookLap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
