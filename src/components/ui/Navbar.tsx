"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  // Load Bootstrap JS dynamically on client
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <Link href="/" className="navbar-brand d-flex align-items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="me-2"
        />
        <span className="fw-bold">JobPortal</span>
      </Link>

      {/* Hamburger button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible menu */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/companies" className="nav-link">
              Companies
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
