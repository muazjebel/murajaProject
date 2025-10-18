import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Animated component wrapper
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      {children}
    </div>
  );
};

// Floating animation component
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
        animation: `float 6s ease-in-out ${delay}s infinite`
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  // Team Members
  const teamMembers = [
    {
      name: "Muaz Jebel",
      role: "Developer",
      image: "/src/assets/muaz.jpg",
      description: "Passionate about creating interactive, responsive, and accessible user interfaces using React, Tailwind, and modern web technologies.",
    },
    {
      name: "Abdi Ahmed",
      role: "Developer",
      image: "/src/assets/abdi.jpg",
      description: "Focused on building secure and efficient backend systems with Node.js and Express, ensuring smooth API integration.",
    }
  ];

  // Advisors
  const advisors = [
    {
      name: "Hamza jhad",
      role: "Backend Developer",
      image: "/src/assets/hamza.jpg",
      description: "Over 15 years of experience in Islamic education and curriculum development, specializing in Tajweed and Qur'an memorization.",
    },
    {
      name: "Ammar Adnew",
      role: "Frontend Developer",
      image: "/images/advisor2.jpg",
      description: "Expert in modern teaching methodologies with a focus on digital learning platforms for Islamic studies.",
    }
  ];

  // Impact Statistics
  const impactStats = [
    { number: "500+", label: "Students Served", icon: "👨‍🎓" },
    { number: "25+", label: "Qualified Teachers", icon: "👨‍🏫" },
    { number: "1,000+", label: "Sessions Completed", icon: "📚" },
    { number: "15+", label: "Partner Institutions", icon: "🏛️" }
  ];

  // Partners
  const partners = [
    { name: "Al-Huda Madrasah", logo: "/images/alhuda-logo.png" },
    { name: "Noor Islamic Center", logo: "/images/noor-logo.png" },
    { name: "Qur'an Academy", logo: "/images/quran-academy-logo.png" },
    { name: "Islamic Foundation", logo: "/images/islamic-foundation-logo.png" },
    { name: "Madrasah Al-Iman", logo: "/images/aliman-logo.png" }
  ];

  // Add CSS for floating animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
        50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
      }
      
      @keyframes slideIn {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      .hover-lift {
        transition: all 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }
      
      .gradient-text {
        background: linear-gradient(45deg, #16a34a, #22c55e, #4ade80);
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden text-gray-800 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Animation */}
      <section className="relative px-6 py-20 pt-24 overflow-hidden text-center text-white bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 md:px-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              📖
            </div>
          ))}
        </div>
        
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto">
          <FloatingElement>
            <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">
              About <span className="gradient-text">Muraja</span>
            </h1>
          </FloatingElement>
          <p className="text-xl leading-relaxed md:text-2xl animate-slideIn">
            Revolutionizing Qur'an education through technology - connecting students with qualified teachers for effective memorization and revision.
          </p>
          
          {/* Animated scroll indicator */}
          <div className="mt-12 animate-bounce">
            <div className="flex justify-center w-6 h-10 border-2 border-yellow-300 rounded-full">
              <div className="w-1 h-3 mt-2 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission & Story Section */}
      <section className="px-6 py-20 bg-white md:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold gradient-text">Our Mission & Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-green-700">Muraja was born from a simple observation:</strong> In today's digital age, students of the Qur'an face unique challenges in maintaining consistent memorization and finding qualified teachers for revision (muraja'ah).
                </p>
                <p className="leading-relaxed">
                  Many students who memorize the Qur'an struggle with regular revision due to busy schedules, limited access to qualified teachers, and the lack of structured tracking systems.
                </p>
                
                {/* Animated feature list */}
                <div className="space-y-3">
                  {[
                    "Easy access to certified Qur'an teachers worldwide",
                    "Structured revision tracking and progress monitoring",
                    "Flexible scheduling for busy students and professionals",
                    "Secure digital environment for Qur'an learning"
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 space-x-3 rounded-lg bg-green-50 hover-lift"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animation: `slideIn 0.6s ease-out ${index * 0.2}s both`
                      }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <FloatingElement delay={0.5}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-2xl blur-lg opacity-30 animate-glow"></div>
                <img
                  src="/src/assets/quran.png"
                  alt="Qur'an Education"
                  className="relative w-full border-4 border-white shadow-2xl rounded-2xl hover-lift"
                />
              </div>
            </FloatingElement>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-green-50 to-emerald-100 md:px-20">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold gradient-text">Our Impact</h2>
          <p className="mb-16 text-xl text-gray-600">
            Making a difference in Qur'an education through technology and dedication
          </p>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <FloatingElement key={index} delay={index * 0.2}>
                <div className="p-8 bg-white border border-green-100 shadow-xl rounded-2xl hover-lift">
                  <div className="mb-4 text-4xl animate-bounce">{stat.icon}</div>
                  <div className="mb-2 text-4xl font-bold text-green-700 md:text-5xl">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </FloatingElement>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 md:px-20">
        <AnimatedSection className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-4xl font-bold text-center gradient-text">Our Team</h2>
          <p className="mb-16 text-xl text-center text-gray-600">
            Dedicated professionals working together to revolutionize Qur'an education
          </p>
          
          {/* Project Team */}
          <div className="mb-20">
            <h3 className="mb-12 text-3xl font-semibold text-center text-gray-800">Project Team</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <FloatingElement key={index} delay={index * 0.3}>
                  <Card className="overflow-hidden border-0 shadow-2xl hover-lift group">
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 transition-all duration-300 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 blur-md group-hover:blur-lg"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-32 h-32 transition-transform duration-300 border-4 border-white rounded-full shadow-lg group-hover:scale-110"
                        />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-green-700">{member.name}</h3>
                      <p className="mb-4 text-lg font-semibold text-yellow-600">{member.role}</p>
                      <p className="leading-relaxed text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </FloatingElement>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h3 className="mb-12 text-3xl font-semibold text-center text-gray-800">Our Advisors</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {advisors.map((advisor, index) => (
                <FloatingElement key={index} delay={index * 0.4}>
                  <Card className="overflow-hidden border-0 shadow-2xl hover-lift group">
                    <CardContent className="p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 transition-all duration-300 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 blur-md group-hover:blur-lg"></div>
                        <img
                          src={advisor.image}
                          alt={advisor.name}
                          className="relative w-32 h-32 transition-transform duration-300 border-4 border-white rounded-full shadow-lg group-hover:scale-110"
                        />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-green-700">{advisor.name}</h3>
                      <p className="mb-4 text-lg font-semibold text-emerald-600">{advisor.role}</p>
                      <p className="leading-relaxed text-gray-600">{advisor.description}</p>
                    </CardContent>
                  </Card>
                </FloatingElement>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Community & Partners Section */}
      <section className="px-6 py-20 bg-white md:px-20">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold gradient-text">Community & Partners</h2>
          <p className="mb-16 text-xl text-gray-600">
            Working together with esteemed institutions to advance Qur'an education
          </p>
          
          <div className="flex flex-wrap justify-center gap-12">
            {partners.map((partner, index) => (
              <FloatingElement key={index} delay={index * 0.1}>
                <div className="flex items-center justify-center w-40 p-6 border border-green-100 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover-lift h-28">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full transition-all duration-300 max-h-16 filter grayscale hover:grayscale-0"
                  />
                </div>
              </FloatingElement>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Call to Action Section */}
      <section className="relative px-6 py-20 overflow-hidden text-center text-white bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 md:px-20">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              🌟
            </div>
          ))}
        </div>
        
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold">Join Our Qur'an Learning Community</h2>
          <p className="mb-8 text-xl">
            Whether you're a student seeking to memorize or a qualified teacher ready to guide others, 
            become part of our growing network dedicated to preserving and teaching the Qur'an.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
            <Button className="px-10 py-4 text-lg font-semibold text-green-900 transition-all duration-300 transform bg-yellow-500 shadow-2xl hover:bg-yellow-400 rounded-xl hover-lift hover:scale-105">
              📖 Register as Student
            </Button>
            <Button className="px-8 py-3 text-lg font-semibold text-white border-2 border-yellow-400 hover:bg-yellow-400 hover:text-green-900 rounded-xl">
              👨‍🏫 Register as Teacher
            </Button>
          </div>
          <p className="mt-6 text-lg text-yellow-200 animate-pulse">
            Start your journey in Qur'an memorization and revision today 🌙
          </p>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;