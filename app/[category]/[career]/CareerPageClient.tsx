"use client";

import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Clock, Award, MapPin, BookOpen, Briefcase, Users, ArrowRight, Check, GraduationCap, Target, Rocket } from "lucide-react";
import { formatCareerName } from "@/app/data/careers";
import { CareerDetail } from "@/app/data/careerDetails";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface CareerPageClientProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  careerDetail: CareerDetail | null;
  categoryData: any;
}

const CANAM_RED = "#C20000";
const CANAM_RED_LINE = "#DA1313";

export function CareerPageClient({
  category,
  career,
  careerName,
  categoryName,
  careerDetail,
  categoryData,
}: CareerPageClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 font-poppins text-sm">
            <Link href="/" className="text-[#757575] hover:text-[#C20000] transition-colors">Home</Link>
            <span className="text-[#757575]">/</span>
            <Link href={`/${category}`} className="text-[#757575] hover:text-[#C20000] transition-colors">{categoryName}</Link>
            <span className="text-[#757575]">/</span>
            <span className="font-medium" style={{ color: CANAM_RED }}>{careerName}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-[#EEEEEE]"
        style={{ background: "rgba(238, 238, 238, 0.50)", minHeight: "460px" }}
      >
        <div className="absolute left-0 top-0 h-full pointer-events-none" style={{ width: "39%" }}>
          <Image src="/assets/hero-bg-pattern.png" alt="" fill className="object-cover opacity-50" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center" style={{ minHeight: "460px" }}>
          {/* Left: Text */}
          <div className="relative z-10 w-full lg:w-[45%] py-14">
            <div className="mb-5">
              <p className="font-poppins text-[#757575] text-base font-medium mb-2">Start Your Journey with</p>
              <div className="w-12 h-0.5 bg-[#C20000]" />
            </div>
            <h1
              className="font-poppins text-[#505050] mb-5"
              style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, lineHeight: "1.2", maxWidth: "565px" }}
            >
              Premium{" "}
              <strong className="font-bold underline underline-offset-2">{careerName}</strong>{" "}
              Counselling for Your Dream University
            </h1>
            <p
              className="font-poppins text-[#505050] mb-7"
              style={{ fontSize: "16px", fontWeight: 500, lineHeight: "28px", maxWidth: "560px" }}
            >
              {careerDetail?.description ||
                `Get expert guidance for ${careerName.toLowerCase()} career paths. From university selection to visa assistance, we help you achieve your goals.`}
            </p>
            <div className="flex items-center gap-2">
              <button
                className="font-poppins font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "#C50000" }}
              >
                Book Free Consultation
              </button>
              <ArrowRight className="w-4 h-4" style={{ color: "#C50000" }} />
            </div>
          </div>

          {/* Right: Illustrations */}
          <div className="hidden lg:block absolute right-0 top-0 h-full" style={{ width: "55%", overflow: "hidden" }}>
            <div className="absolute" style={{ left: "0", top: "80px", width: "50%", height: "380px" }}>
              <Image src="/assets/hero-city.png" alt="City" fill className="object-contain object-bottom" />
            </div>
            <div className="absolute right-0 top-0 bottom-0" style={{ width: "60%" }}>
              <Image src="/assets/hero-student.png" alt="Student" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-8 border-b border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: "Avg. Salary", value: careerDetail?.salary || "₹5–20 LPA" },
              { icon: Clock, label: "Duration", value: careerDetail?.duration || "3–5 Years" },
              { icon: Target, label: "Difficulty", value: "Medium" },
              { icon: Rocket, label: "Growth", value: "High" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white" style={{ borderRadius: "12px", border: "1px solid #EEEEEE" }}>
                <div className="p-2 rounded-lg" style={{ background: "rgba(194, 0, 0, 0.08)" }}>
                  <stat.icon className="w-5 h-5" style={{ color: CANAM_RED }} />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[#505050]">{stat.value}</p>
                  <p className="font-poppins text-xs text-[#757575]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 bg-white">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}>
              Why Choose {careerName}?
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>
              Launch your career with personalized guidance from industry experts
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: TrendingUp, title: "Salary Range", value: careerDetail?.salary || "Competitive" },
              { icon: Clock, title: "Duration", value: careerDetail?.duration || "3–5 years" },
              { icon: Award, title: "Eligibility", value: careerDetail?.eligibility?.[0] || "12th Pass" },
              { icon: MapPin, title: "Opportunities", value: "Global & India" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col p-6 bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ borderRadius: "15px", border: "1px solid rgba(238,238,238,0.93)", background: "linear-gradient(180deg,#fff 0%,#f5f5f5 100%)" }}
              >
                <div className="inline-flex p-3 rounded-xl mb-4" style={{ background: "rgba(194,0,0,0.08)" }}>
                  <item.icon className="w-6 h-6" style={{ color: CANAM_RED }} />
                </div>
                <h3 className="font-poppins font-semibold text-[#505050] mb-1">{item.title}</h3>
                <p className="font-poppins text-[#757575] text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 border-t border-[#EEEEEE]" style={{ background: "rgba(238,238,238,0.50)" }}>
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
              Our Services
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>
              Comprehensive support throughout your {careerName.toLowerCase()} journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "/assets/icon-counselling.svg", title: "In-person and Virtual Counselling" },
              { icon: "/assets/icon-app-support.svg", title: "End-to-End Application Support" },
              { icon: "/assets/icon-visa.svg", title: "Visa Guidance" },
              { icon: "/assets/icon-institute.svg", title: "Institute and Course Selection" },
              { icon: "/assets/icon-scholarships.svg", title: "Access to Exclusive Scholarships" },
              { icon: "/assets/icon-accommodation.svg", title: "Accommodation Assistance" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 bg-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderRadius: "15px", border: "1px solid rgba(238,238,238,0.93)", background: "linear-gradient(180deg,#fff 0%,#f5f5f5 100%)" }}
              >
                <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <p className="font-poppins font-medium text-[#505050]" style={{ fontSize: "15px" }}>{service.title}</p>
                  <div className="mt-1.5" style={{ width: "40px", height: "2px", background: CANAM_RED_LINE }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Skills */}
      {careerDetail?.skills && (
        <section className="py-14 bg-white border-t border-[#EEEEEE]">
          <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
                Key Skills Required
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerDetail.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-5 bg-white" style={{ borderRadius: "12px", border: "1px solid #EEEEEE" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(194,0,0,0.10)" }}>
                    <Check className="w-4 h-4" style={{ color: CANAM_RED }} />
                  </div>
                  <p className="font-poppins font-semibold text-[#505050]" style={{ fontSize: "15px" }}>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Job Roles */}
      {careerDetail?.jobRoles && (
        <section className="py-14 border-t border-[#EEEEEE]" style={{ background: "rgba(238,238,238,0.50)" }}>
          <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
                Job Roles & Positions
              </h2>
              <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>Explore diverse career opportunities in this field</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerDetail.jobRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-white transition-all duration-300 hover:-translate-y-1"
                  style={{ borderRadius: "15px", border: "1px solid rgba(238,238,238,0.93)", background: "linear-gradient(180deg,#fff 0%,#f5f5f5 100%)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(194,0,0,0.08)" }}>
                      <Briefcase className="w-5 h-5" style={{ color: CANAM_RED }} />
                    </div>
                    <h3 className="font-poppins font-semibold text-[#505050] group-hover:text-[#C20000] transition-colors" style={{ fontSize: "15px" }}>{role}</h3>
                  </div>
                  <div style={{ width: "40px", height: "2px", background: CANAM_RED_LINE }} className="mb-3" />
                  <p className="font-poppins text-[#757575] text-sm">Launch your career as a {role.toLowerCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Companies */}
      {careerDetail?.companies && (
        <section className="py-14 bg-white border-t border-[#EEEEEE]">
          <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
                Top Recruiting Companies
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerDetail.companies.map((company, idx) => (
                <div key={idx} className="flex items-center gap-3 p-5 bg-white" style={{ borderRadius: "12px", border: "1px solid #EEEEEE" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(194,0,0,0.08)" }}>
                    <Users className="w-5 h-5" style={{ color: CANAM_RED }} />
                  </div>
                  <p className="font-poppins font-semibold text-[#505050]" style={{ fontSize: "15px" }}>{company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Colleges */}
      {careerDetail?.colleges && (
        <section className="py-14 border-t border-[#EEEEEE]" style={{ background: "rgba(238,238,238,0.50)" }}>
          <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
                Top Colleges Offering This Course
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerDetail.colleges.map((college, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-white transition-all duration-300 hover:-translate-y-1"
                  style={{ borderRadius: "15px", border: "1px solid rgba(238,238,238,0.93)", background: "linear-gradient(180deg,#fff 0%,#f5f5f5 100%)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(194,0,0,0.08)" }}>
                      <BookOpen className="w-5 h-5" style={{ color: CANAM_RED }} />
                    </div>
                    <h3 className="font-poppins font-semibold text-[#505050] group-hover:text-[#C20000] transition-colors" style={{ fontSize: "15px" }}>{college}</h3>
                  </div>
                  <div style={{ width: "40px", height: "2px", background: CANAM_RED_LINE }} className="mb-3" />
                  <Link href={`/${category}/${career}#programs`}>
                    <span className="font-poppins text-sm underline underline-offset-1 hover:opacity-70 transition-opacity" style={{ color: "#C50000" }}>
                      Explore Programs
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Programs */}
      <section id="programs" className="py-14 bg-white border-t border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
              Explore All Programs in {categoryName}
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>Browse all available programs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryData?.careers.map((careerSlug: string) => (
              <Link key={careerSlug} href={`/${category}/${careerSlug}`}>
                <div
                  className="group flex flex-col justify-between p-6 bg-white cursor-pointer h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ borderRadius: "15px", border: "1px solid rgba(238,238,238,0.93)", background: "linear-gradient(180deg,#fff 0%,#f5f5f5 100%)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl" style={{ background: "rgba(194,0,0,0.08)" }}>
                      <GraduationCap className="w-6 h-6" style={{ color: CANAM_RED }} />
                    </div>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                      style={{ background: CANAM_RED }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[#505050] mb-1 group-hover:text-[#C20000] transition-colors" style={{ fontSize: "16px" }}>
                      {formatCareerName(careerSlug)}
                    </h3>
                    <div className="mb-3" style={{ width: "40px", height: "2px", background: CANAM_RED_LINE }} />
                    <p className="font-poppins text-[#757575] text-sm">Explore career opportunities</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#EEEEEE]" style={{ background: "rgba(238,238,238,0.50)" }}>
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <div className="mb-4">
            <p className="font-poppins text-[#757575] text-sm mb-2">Start Your Journey</p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto" />
          </div>
          <h2 className="font-poppins font-bold text-[#505050] mb-4" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
            Ready to Start Your {careerName} Journey?
          </h2>
          <p className="font-poppins text-[#757575] mb-8" style={{ fontSize: "16px", lineHeight: "26px" }}>
            Get personalized career guidance from our expert counselors to help you make the right decisions for your future.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: CANAM_RED, fontSize: "16px" }}
          >
            Book Free Career Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
