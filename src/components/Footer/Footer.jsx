import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-secondaryBg border-t-2 border-t-highlight">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
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

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Blog
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Categories
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Archive
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/all-posts"
                  >
                    Featured Posts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Connect
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="https://www.linkedin.com/in/musab-rayan-87a391267/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Me
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="mailto:musabrayan1703@gmail.com"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-1/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
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
    </section>
  );
}

export default Footer;
