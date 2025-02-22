import { CompanyLogo } from "@/assets";
import { homePageRoutes } from "@/utils/constants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Handle scroll untuk menampilkan background navbar saat di-scroll
  const handleScroll = () => {
    setIsOnTop(window.scrollY <= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk toggle menu burger
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed w-full z-20 transition-colors ${
        isOnTop && !isMenuOpen ? "" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 z-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <a href="/#home" className="flex">
              <img
                className="w-44 sm:w-auto"
                src={CompanyLogo}
                alt="Abidzar Tour & Travel Company Logo"
              />
            </a>
          </div>

          {/* Burger Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 z-10"
          >
            {isMenuOpen ? (
              // Ikon Close (X)
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ikon Burger Menu
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          {/* Menu (Desktop) */}
          <div className="hidden lg:flex lg:items-center lg:justify-center space-x-10 xl:space-x-20">
            {homePageRoutes?.map((route, idx) => (
              <a
                key={idx}
                href={route?.href}
                title={route?.label}
                className="text-base text-hero font-medium transition-all duration-200 hover:text-opacity-80"
              >
                {route?.label}
              </a>
            ))}
          </div>
        </div>

        {/* Menu (Mobile) */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-transform transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {homePageRoutes?.map((route, idx) => (
              <a
                key={idx}
                href={route?.href}
                title={route?.label}
                className="text-lg text-hero font-medium transition-all duration-200 hover:text-opacity-80"
                onClick={() => setIsMenuOpen(false)} // Tutup menu saat diklik
              >
                {route?.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
