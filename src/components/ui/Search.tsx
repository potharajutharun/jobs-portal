"use client";
import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

interface JobSearchProps {
  onSearch: (criteria: { jobTitle: string; location: string; experience: string }) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ jobTitle, location, experience });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center gap-2 p-3 shadow-md bg-white rounded-full"
      style={{ maxWidth: "1000px" }}
    >
      {/* Job Title Field */}
      <div className="position-relative " style={{ flex: "1 1 300px" }}>
        <FaSearch
          className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
          size={16}
        />
        <input
          type="text"
          className="form-control ps-5 py-3 border-0 shadow-none "
          placeholder="Enter skills / designations / companies"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ borderRadius: "10px" }}
        />
      </div>

      <div className="vr"></div>

      {/* Location Field */}
      <div className="position-relative" style={{ flex: "1 1 150px" }}>
        <FaMapMarkerAlt
          className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
          size={16}
        />
        <input
          type="text"
          className="form-control ps-5 py-3 border-0 shadow-none"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="vr"></div>
      {/* Experience Field */}
      <div className="position-relative" style={{ flex: "1 1 150px" }}>
        <FaBriefcase
          className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
          size={16}
        />
        <input
          type="number"
          className="form-control ps-5 py-3 border-0 shadow-none"
          placeholder="Experience (yrs)"
          min="0"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ borderRadius: "10px" }}
        />
      </div>

      {/* Search Button */}
      <button
        className="btn text-white px-4 py-2 "
        style={{
          background: "linear-gradient(90deg, #457eff, #3f6fff)",
          borderRadius: "50px",
          fontWeight: "500",
          letterSpacing: "0.3px",
          transition: "0.3s",
        }}
        onClick={handleSearch}
        onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = "0.9")}
        onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = "1")}
      >
        Search Jobs
      </button>
    </div>
  );
}

export default JobSearch;
