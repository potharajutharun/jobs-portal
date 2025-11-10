"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path: string) => pathname === path;

  const navLinks = [
    { href: "/jobs", label: "Jobs" },
    { href: "/companies", label: "Companies" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${isScrolled ? 'bg-white shadow' : 'bg-light'}`}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/logo.png"
            alt="JobPortal Logo"
            width={40}
            height={40}
            className="me-2"
          />
          <div className="d-flex">
            <span className="fw-bold fs-4 text-primary">Job</span>
            <span className="fw-bold fs-4 text-danger">Portal</span>
          </div>
        </Link>

        {/* Custom Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Manual Collapse Control */}
        <div className={`${isMenuOpen ? 'd-block' : 'd-none'} d-lg-flex flex-column flex-lg-row  w-100 align-items-lg-center`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 gap-2">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link fw-semibold ${isActiveLink(link.href) ? 'active text-primary' : 'text-dark'}`}
                  onClick={closeMenu}
                  {...(isActiveLink(link.href) && { 'aria-current': 'page' })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <Link 
              href="/login" 
              onClick={closeMenu}
              className="btn btn-outline-primary btn-md rounded-pill px-3 w-100"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              onClick={closeMenu}
              className="btn btn-primary btn-md rounded-pill px-3 text-white w-100"
            >
              Register
            </Link>          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991.98px) {
          .navbar-toggler {
            border: none;
            padding: 4px 8px;
          }
          
          .d-block {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
        }
        
        @media (min-width: 992px) {
          .d-none.d-lg-flex {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;