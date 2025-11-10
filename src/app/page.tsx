"use client";

import React from "react";
import Search from "@/components/ui/Search";
import Image from "next/image";

function Page() {
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{ height: "30vh" }}
      >
        <h1 className="fw-bolder">Find Your Dream Job Now</h1>
        <h4 className="fw-medium">Lakhs of jobs for you to explore</h4>
      </div>
      <div className="d-flex justify-content-center text-center">
        <Search
          onSearch={(criteria) =>
            console.log("Searching with criteria:", criteria)
          }
        />
      </div>
      <div
        className="mx-auto my-3"
        style={{ maxWidth: "900px", height: "250px", position: "relative" }}
      >
        <Image
          src="/Gemini_Generated_Image_s8e8o3s8e8o3s8e8-fotor-bg-remover-2025102551821.png"
          alt="Job Portal Image"
          fill
          style={{ objectFit: "cover", borderRadius: "10px", }} // optional rounded corners
        />
      </div>
    </div>
  );
}

export default Page;
