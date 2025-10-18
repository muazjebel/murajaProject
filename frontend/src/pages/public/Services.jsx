import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  const adminServices = [
    {
      icon: "👥",
      title: "User & Course Management",
      description: "Comprehensive dashboard to manage students, teachers, and courses with role-based access control."
    },
    {
      icon: "📊",
      title: "System-Wide Analytics",
      description: "Real-time insights into platform usage, student progress, and institutional performance metrics."
    },
    {
      icon: "📚",
      title: "Content Management",
      description: "Centralized system to manage Qur'an curricula, learning materials, and educational resources."
    },
    {
      icon: "🏛️",
      title: "Institution Management",
      description: "Tools to manage multiple branches, classrooms, and academic schedules efficiently."
    }
  ];

  const teacherServices = [
    {
      icon: "🎓",
      title: "Classroom Management",
      description: "Organize virtual classrooms, assign lessons, and manage student groups with ease."
    },
    {
      icon: "✅",
      title: "Attendance Tracking",
      description: "Automated attendance system with detailed reporting and absence notifications."
    },
    {
      icon: "📈",
      title: "Progress Reporting",
      description: "Track student memorization progress, generate reports, and provide personalized feedback."
    },
    {
      icon: "💬",
      title: "Communication Tools",
      description: "Direct messaging and announcement system to stay connected with students and parents."
    }
  ];

  const studentServices = [
    {
      icon: "📱",
      title: "Personal Dashboard",
      description: "Centralized hub to track your progress, upcoming sessions, and learning materials."
    },
    {
      icon: "🎯",
      title: "Easy Enrollment",
      description: "Simple course registration process with instant access to qualified teachers."
    },
    {
      icon: "📖",
      title: "Progress History",
      description: "Comprehensive record of your memorization journey with visual progress tracking."
    },
    {
      icon: "🕒",
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience with teachers across different time zones."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 text-center text-white bg-gradient-to-r from-green-600 via-emerald-700 to-green-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 mx-auto"
        >
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl leading-relaxed text-green-100 md:text-2xl">
            Comprehensive tools designed to enhance Qur'an education for institutions, teachers, and students
          </p>
        </motion.div>
      </section>

      {/* Platform Overview */}
      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-green-700">
              An Overview of Our Platform
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-700">
              Muraja is a comprehensive digital ecosystem built to streamline Qur'an education management. 
              Our platform bridges traditional Islamic learning with modern technology, providing tailored 
              solutions for every stakeholder in the educational journey.
            </p>
          </div>

          {/* Feature Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              { icon: "🕌", title: "Islamic-Centric", desc: "Designed specifically for Qur'an education needs" },
              { icon: "💻", title: "Technology Driven", desc: "Modern tools to enhance learning experience" },
              { icon: "🌍", title: "Globally Accessible", desc: "Connect students and teachers worldwide" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 text-center"
              >
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-green-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services for Institutions & Admins */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-green-700">
              Services for Institutions & Admins
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Powerful administrative tools to manage your educational institution efficiently
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {adminServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full transition-all duration-300 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="text-center">
                    <div className="mb-4 text-4xl">{service.icon}</div>
                    <CardTitle className="text-green-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services for Teachers */}
      <section className="px-6 py-20 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-green-700">
              Services for Teachers
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Specialized tools to enhance teaching effectiveness and student engagement
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {teacherServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full transition-all duration-300 bg-white border-0 shadow-xl hover:shadow-2xl">
                  <CardHeader className="text-center">
                    <div className="mb-4 text-4xl">{service.icon}</div>
                    <CardTitle className="text-green-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services for Students */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-green-700">
              Services for Students
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              User-friendly features to support your Qur'an memorization journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {studentServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full transition-all duration-300 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-emerald-50 to-white">
                  <CardHeader className="text-center">
                    <div className="mb-4 text-4xl">{service.icon}</div>
                    <CardTitle className="text-green-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 text-center text-white bg-gradient-to-r from-green-600 to-emerald-700">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-green-100">
            Join thousands of students and teachers already using Muraja to enhance their Qur'an education experience.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="px-8 py-3 text-lg font-semibold text-green-900 bg-yellow-400 hover:bg-yellow-300 rounded-xl">
              Start Learning Today
            </Button>
            <Button  className="px-8 py-3 text-lg font-semibold text-white border-2 border-yellow-400 hover:bg-yellow-400 hover:text-green-900 rounded-xl">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;