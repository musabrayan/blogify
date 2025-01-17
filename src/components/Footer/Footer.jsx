import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative overflow-hidden py-8 sm:py-10 md:py-12 bg-secondaryBg border-t-2 border-t-highlight">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Copyright Section */}
          <div className="w-full px-4 mb-8 sm:mb-0 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo />
              </div>
              <div>
                <p className="text-sm text-secondaryText">
                  &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by Musab.
                </p>
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="w-full px-4 mb-8 sm:mb-0 sm:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-gray-500">
                Blog
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    to="/"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    to="/"
                  >
                    Archive
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    to="/all-posts"
                  >
                    Featured Posts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect Section */}
          <div className="w-full px-4 mb-8 sm:mb-0 sm:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-gray-500">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    href="https://www.linkedin.com/in/musab-rayan-87a391267/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    href="mailto:musabrayan1703@gmail.com"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    to="/"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="w-full px-4 sm:w-1/2 lg:w-1/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-gray-500">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    to="/"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
                    to="/"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;