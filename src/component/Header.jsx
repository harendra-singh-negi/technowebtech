import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as DomLink } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'unset';
      return newState;
    });
  };

  const toggleProductsMenu = () => setIsProductsMenuOpen(prev => !prev);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between bg-white rounded-full shadow-md px-6 py-3">
            <DomLink to="/" className="flex items-center">
              <h1 className="text-2xl font-medium text-customBlue">Technowebtech</h1>
            </DomLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["home", "about", "features", "services", "projects"].map(section => (
                <Link key={section} smooth={true} duration={500} to={section} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
              <div className="relative group">
                <button onClick={toggleProductsMenu} className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <DomLink to="/products/sms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      School Management System
                    </DomLink>
                  </div>
                )}
              </div>
              <Link smooth={true} duration={500} to="contact" className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link smooth={true} duration={500} to="contact" className="cursor-pointer hidden md:inline-flex items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Get Started
              </Link>
              <button onClick={toggleSidebar} className="md:hidden text-gray-600 hover:text-blue-500 transition-colors" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
            onClick={toggleSidebar}
          />
          <div
            className="fixed top-0 right-0 w-[280px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out translate-x-0"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="py-4">
              <div className="flex flex-col space-y-1">
                {["home", "about", "features", "services", "projects"].map(section => (
                  <Link key={section} smooth={true} duration={500} to={section} className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-blue-50 transition-colors" onClick={toggleSidebar}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ))}
                <div className="px-4 py-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500 transition-colors"
                    onClick={toggleProductsMenu}
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProductsMenuOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <DomLink to="/products/sms" className="block py-1 text-sm text-gray-600 hover:text-blue-500 transition-colors" onClick={toggleSidebar}>
                        School Management System
                      </DomLink>
                    </div>
                  )}
                </div>
                <Link smooth={true} duration={500} to="contact" className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-blue-50 transition-colors" onClick={toggleSidebar}>
                  Contact
                </Link>
              </div>
              <div className="mt-4 px-4">
                <Link smooth={true} duration={500} to="contact" className="cursor-pointer inline-flex w-full items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors" onClick={toggleSidebar}>
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
