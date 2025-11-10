import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage() {
  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
      style={{ 
        fontFamily: "Inter, sans-serif"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 rounded-3 overflow-hidden shadow">
              <div className="row g-0">
                {/* Left Side - Benefits */}
                <div className="col-lg-5 bg-primary text-white p-4">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4">
                      <h4 className="fw-bold mb-4">On registering, you can</h4>
                      
                      <div className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                               style={{ width: "20px", height: "20px", fontSize: "12px" }}>
                            ✓
                          </div>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-1">Build your profile and let recruiters find you</h6>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-start mb-3">
                        <div className="me-3 mt-1">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                               style={{ width: "20px", height: "20px", fontSize: "12px" }}>
                            ✓
                          </div>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-1">Get job postings delivered right to your email</h6>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-start mb-4">
                        <div className="me-3 mt-1">
                          <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                               style={{ width: "20px", height: "20px", fontSize: "12px" }}>
                            ✓
                          </div>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-1">Find a job and grow your career</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                        <img
                          src="https://admin-test.easytrax.com.bd/assets/images/cdb66e793a01c198fb1d4e4fc9f1de8d.png"
                          alt="Register Illustration"
                          className="img-fluid"
                        />
                    </div>

                    {/* Footer Links */}
                    <div className="mt-auto">
                      <div className="border-top border-white border-opacity-25 pt-3">
                        <div className="row small">
                          <div className="col-6 mb-2">
                            <a href="#" className="text-white text-decoration-none">About Us</a>
                          </div>
                          <div className="col-6 mb-2">
                            <a href="#" className="text-white text-decoration-none">Contact Us</a>
                          </div>
                          <div className="col-6 mb-2">
                            <a href="#" className="text-white text-decoration-none">FAQs</a>
                          </div>
                          <div className="col-6 mb-2">
                            <a href="#" className="text-white text-decoration-none">Terms and Conditions</a>
                          </div>
                          <div className="col-6 mb-2">
                            <a href="#" className="text-white text-decoration-none">Report a Problem</a>
                          </div>
                          <div className="col-6 mb-2">
                            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
                          </div>
                        </div>
                        <div className="text-center small mt-2 opacity-75">
                          All rights reserved © 2025 Info Edge India Ltd.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Registration Form */}
                <div className="col-lg-7 bg-white p-4">
                  <div className="p-3">
                    <div className="text-center mb-4">
                      <h3 className="fw-bold text-dark">Create your Job Portal profile</h3>
                      <p className="text-muted">Search & apply to jobs from India&apos;s No.1 Job Site</p>
                    </div>

                    <form>
                      {/* Full Name */}
                      <div className="mb-3">
                        <label className="form-label fw-semibold text-dark mb-1">Full name</label>
                        <input
                          type="text"
                          className="form-control rounded-1 border-secondary"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label fw-semibold text-dark mb-1">Email ID</label>
                        <input
                          type="email"
                          className="form-control rounded-1 border-secondary"
                          placeholder="Enter your email"
                        />
                        <div className="form-text text-muted">
                          We&apos;ll send relevant jobs and updates to this email
                        </div>
                      </div>

                      {/* Password */}
                      <div className="mb-3">
                        <label className="form-label fw-semibold text-dark mb-1">Password</label>
                        <input
                          type="password"
                          className="form-control rounded-1 border-secondary"
                          placeholder="Enter your password"
                        />
                        <div className="form-text text-danger">
                          Password is required
                        </div>
                      </div>

                      {/* Mobile Number */}
                      <div className="mb-3">
                        <label className="form-label fw-semibold text-dark mb-1">Mobile number</label>
                        <div className="input-group">
                          <span className="input-group-text rounded-1 border-secondary bg-light me-1">+91</span>
                          <input
                            type="tel"
                            className="form-control rounded-1 border-secondary"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                        <div className="form-text text-muted">
                          Recruiters will contact you on this number
                        </div>
                      </div>

                    

                      {/* SMS Consent */}
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="smsConsent" />
                        <label className="form-check-label small text-muted" htmlFor="smsConsent">
                          Send me important updates & promotions via SMS, email, and WhatsApp
                        </label>
                      </div>

                      {/* Terms */}
                      <div className="mb-4">
                        <p className="small text-muted text-center">
                          By clicking Register, you agree to the{' '}
                          <a href="#" className="text-primary text-decoration-none">Terms and Conditions</a>
                          {' '}&{' '}
                          <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
                          {' '}of JobPortal.com
                        </p>
                      </div>

                      {/* Register Button */}
                      <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-1 py-2 fw-semibold mb-3"
                        style={{ backgroundColor: '#0047AB', borderColor: '#0047AB' }}
                      >
                        Register now
                      </button>

                      {/* Divider */}
                      <div className="position-relative text-center mb-3">
                        <div className="border-top"></div>
                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 small text-muted">
                          Or
                        </span>
                      </div>

                      {/* Continue with Google */}
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 rounded-1 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      >
                        <span className="text-danger fw-bold">G</span>
                        Continue with Google
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;