
"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegUser } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

function Page() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"

    >
      <div
        className="card border-0 rounded-4 overflow-hidden shadow-md"
        style={{
          width: "900px",
          maxWidth: "95vw",
          height: "90vh", // slightly less than full screen to avoid vertical overflow
        }}
      >
        <div className="row g-0 h-100">
          {/* Left Side - Login Form */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white p-4">
            <div className="text-center mb-3">
              <div
                className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaRegUser className="text-white fs-3" />
              </div>
              <h2 className="fw-bold mb-2 text-dark">Welcome Back!</h2>
              <p className="text-muted mb-0">Please log in to your account</p>
            </div>

            <form className="w-100 mt-3">
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-medium text-dark"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill px-4 py-2 border-0 bg-light"
                  id="email"
                  placeholder="Enter your email"
                  style={{ fontSize: "0.9rem" }}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="form-label fw-medium text-dark"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill px-4 py-2 border-0 bg-light"
                  id="password"
                  placeholder="Enter your password"
                  style={{ fontSize: "0.9rem" }}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label
                    className="form-check-label small text-muted"
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="small text-decoration-none text-primary"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill py-2 fw-semibold shadow-sm border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  fontSize: "1rem",
                }}
              >
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <a href="/register" className="text-decoration-none small">
                Don&apos;t have an account?{" "}
                <span className="text-primary fw-semibold">Register now</span>
              </a>
            </div>
          </div>

          {/* Right Side - Social Login */}
          <div
            className="col-md-6 text-white d-flex flex-column align-items-center justify-content-center p-5 position-relative"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              overflow: "hidden",
            }}
          >
            {/* Decorative elements */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
              <div
                className="position-absolute rounded-circle bg-white opacity-10"
                style={{
                  width: "200px",
                  height: "200px",
                  top: "-50px",
                  right: "-50px",
                }}
              ></div>
              <div
                className="position-absolute rounded-circle bg-white opacity-10"
                style={{
                  width: "150px",
                  height: "150px",
                  bottom: "30px",
                  left: "-30px",
                }}
              ></div>
            </div>

            <div className="text-center position-relative z-1">
              <h3 className="fw-bold mb-3">Or login with</h3>
              <p className="mb-4 opacity-75">
                Quick and easy access to your account
              </p>
                <button
                  type="button"
                  disabled
                  className="btn btn-light rounded-pill px-4 my-2 fw-medium d-flex align-items-center justify-content-center w-100 gap-2 border-0 shadow-sm"
                >
                  <FcGoogle className="fs-3" /> Google
                </button>
                <button
                  type="button"
                  disabled
                  className="btn btn-light rounded-pill px-4 py-2 fw-medium d-flex align-items-center justify-content-center  w-100 my-2 gap-2 border-0 shadow-sm"
                >
                  <FaFacebook className="text-primary fs-3" /> Facebook
                </button>
                <button
                  type="button"
                  disabled
                  className="btn btn-light rounded-pill px-4 py-2 fw-medium d-flex align-items-center justify-content-center w-100 my-2 gap-2 border-0 shadow-sm"
                >
                  <BsTwitterX className="text-secondary fs-4" /> Twitter
                </button>          
              </div>

              <div className="mt-4 pt-2">
                <div
                  className="bg-white opacity-25 mb-3 mx-auto"
                  style={{ height: "1px", width: "60%" }}
                ></div>
                <p className="small opacity-75 mb-0">
                  Secure login with social authentication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Page;
