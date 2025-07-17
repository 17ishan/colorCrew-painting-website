import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Painters", href: "#painters" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#E0F2FE] shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1E293B]">ColorCrew</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#1E293B] hover:text-[#4338CA] font-medium transition duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            className="bg-[#6366F1] text-white px-4 py-2 rounded-md hover:bg-[#4338CA] transition font-semibold"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="text-[#1E293B]" /> : <Menu className="text-[#1E293B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F8FAFC] px-6 pb-6 rounded-b-xl shadow-inner">
          <ul className="flex flex-col space-y-4 mt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#1E293B] hover:text-[#4338CA] font-medium transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#book"
                className="block text-center bg-[#6366F1] text-white px-4 py-2 rounded-md hover:bg-[#4338CA] font-semibold transition"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
