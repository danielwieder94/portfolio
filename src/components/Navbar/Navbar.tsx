import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ReactComponent as MySvg } from "../../assets/brain_logo.svg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
interface NavbarProps {
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container text-slate-300/75 test-sm font-semibold">
        <div className="navbar-logo ">
          <a href="#">
            {/* <MySvg /> */}
            <span>Daniel Wieder</span>
          </a>
        </div>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={currentSection === item.href ? " active" : ""}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="mobile-nav-button">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
