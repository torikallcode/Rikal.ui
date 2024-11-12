import React, { useState } from 'react';

export const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccordion = (item) => {
    setActiveAccordion(activeAccordion === item ? null : item);
  };

  return (
    <div>
      <div className="py-16 text-center">
        <button
          type="button"
          onClick={toggleMenu}
          className={`inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-800 rounded-lg shadow-sm gap-x-2 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''
            } hover:bg-gray-950 focus:outline-none focus:bg-gray-900`}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? 'Close' : 'Open'}
        </button>
      </div>

      <div
        className={`transition-transform duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <div className="px-6">
          <a
            className="text-xl font-semibold text-black dark:text-white focus:outline-none"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>
        <nav className="flex flex-col w-full p-6">
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 dark:bg-neutral-700 dark:text-white"
                href="#"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </a>
            </li>
            {['users', 'account', 'projects'].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(item)}
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none dark:bg-neutral-800 dark:text-neutral-400"
                >
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  <svg
                    className={`transform transition-transform duration-300 ${activeAccordion === item ? 'rotate-180' : ''
                      } ml-auto`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ${activeAccordion === item ? 'block' : 'hidden'
                    }`}
                >
                  <ul className="pt-2 ps-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <li key={i}>
                        <a
                          className="block py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 dark:text-neutral-400"
                          href="#"
                        >
                          Link {i + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
