"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "design", label: "UI/UX Design" },
  ];

  const projects = [
    {
      id: "project1",
      category: "web",
      image: "/airbnb.png",
      color: "accent-primary",
      tag: "Web Development",
      tagColor: "orange",
      title: "Airbnb Clone",
      description:
        "Fully coded Airbnb website clone using React, Node.js, and MongoDB with responsive UI and real functionality.",
      fullDescription:
        "A complete Airbnb clone built from scratch, implementing user authentication, property listing, booking system, and payment integration. The project demonstrates full-stack web development skills, responsive design, and real-time database management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "Tailwind CSS",
      ],
      features: [
        "User authentication and authorization",
        "Property listing and search functionality",
        "Booking and reservation system",
        "Secure payment integration with Stripe",
        "Responsive and mobile-friendly design",
        "Admin dashboard for managing listings",
      ],
      github: "#",
    },

    {
      id: "project2",
      category: "design",
      image: "/zepto.png",
      color: "purple",
      tag: "UI/UX Design",
      tagColor: "purple",
      title: "Zepto App Clone",
      description:
        "Visual redesign and clone of the Zepto app in Figma, recreating the user interface and app flow.",
      fullDescription:
        "A complete Figma-based clone of the Zepto app, focusing on replicating the original app's user interface, interactions, and navigation flow. The project emphasizes attention to detail, consistency, and UI best practices.",
      technologies: ["Figma", "Wireframing", "Prototyping"],
      features: [
        "High-fidelity UI recreation",
        "Interactive prototype for app flow",
        "Consistent design patterns and components",
        "Focus on user-friendly navigation",
        "Attention to detail in spacing, typography, and colors",
      ],
      figma:
        "https://www.figma.com/design/ajScJ6wNgIIdRfuzq7E0sN/aaddy?node-id=438-73&t=qZX7nwjpWoU5NARD-1",
    },
    {
      id: "project3",
      category: "design",
      image: "/netflix1.svg",
      color: "purple",
      tag: "UI/UX Design & Web Development",
      tagColor: "purple",
      title: "Netflix clone",
      description:
        "Netflix-inspired platform designed in Figma and developed as a responsive web application with modern UI and smooth user experience.",
      fullDescription:
        "A complete Netflix clone project designed in Figma and developed as a responsive web application. The project includes detailed UI/UX design, user flow planning, and a functional website that replicates the Netflix look and feel. It focuses on modern layouts, smooth interactions, and an engaging streaming-style user experience.",
      technologies: [
        "Figma",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Principles",
      ],

      features: [
        "High-fidelity UI design in Figma",
        "Responsive web implementation",
        "Netflix-style layout and navigation",
        "Clean and modern UI components",
        "User-focused design and smooth interactions",
        "Mobile and desktop optimized design",
      ],
      figma:
        "https://www.figma.com/design/ajScJ6wNgIIdRfuzq7E0sN/aaddy?node-id=0-1&t=qZX7nwjpWoU5NARD-1",
      github: "#",
    },
    {
      id: "project4",
      category: "design",
      image: "/travel.png",
      color: "blue",
      tag: "UI/UX Design",
      tagColor: "blue",
      title: "Travel Website Design",
      description:
        "A visually appealing travel website design created entirely in Figma, focusing on intuitive navigation and user experience.",
      fullDescription:
        "A complete Figma-based travel website design, emphasizing modern aesthetics, easy-to-use navigation, and engaging user interactions. The design includes destination pages, booking interface, and responsive layouts suitable for both desktop and mobile.",
      technologies: ["Figma", "Wireframing", "Prototyping", "UI Design"],
      features: [
        "High-fidelity UI screens for a travel website",
        "Interactive prototype showcasing user flow",
        "Responsive design for desktop and mobile",
        "Clean and modern visual aesthetics",
        "Consistent design system and components",
        "Focus on user-friendly booking and exploration experience",
      ],
    },
    {
      id: "project5",
      category: "design",
      image: "/Snapdeal.svg",
      color: "red",
      tag: "UI/UX Design",
      tagColor: "red",
      title: "Snapdeal Website Clone",
      description:
        "A complete Snapdeal website interface recreated in Figma, focusing on layout, navigation, and shopping experience.",
      fullDescription:
        "This project is a Figma-based clone of the Snapdeal website, replicating its homepage, product listing, and category navigation. The design emphasizes clean layouts, intuitive navigation, and interactive elements to showcase a realistic web shopping experience.",
      technologies: ["Figma", "Wireframing", "Prototyping", "UI Design"],
      features: [
        "High-fidelity recreation of Snapdeal website pages",
        "Interactive prototype to demonstrate user flow",
        "Consistent visual components and spacing",
        "Focus on user-friendly browsing and shopping experience",
        "Responsive web design considerations",
        "Attention to typography, colors, and layout",
      ],
      figma:
        "https://www.figma.com/design/ajScJ6wNgIIdRfuzq7E0sN/aaddy?node-id=1197-103&t=Hx5ZK3AXxXdMbnJI-1",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text leading-relaxed pb-3">
              My Portfolio
            </h2>
            <div className="section-divider"></div>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary">
              Showcasing my latest projects and creations
            </p>
          </div>

          {/* Filter Buttons - All in One Line */}
          <div className="mb-10 sm:mb-12">
            {/* Filter Container */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* All Filters in One Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  className={`filter-btn text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 min-w-[140px] sm:min-w-[180px] ${
                    filter === "all" 
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30 scale-105" 
                      : "bg-white/10 text-text-secondary hover:bg-white/20 border border-white/20 scale-100"
                  }`}
                  onClick={() => setFilter("all")}
                >
                  <i className="fas fa-th-large mr-2"></i>
                  All Projects
                </button>

                <button
                  className={`filter-btn text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 min-w-[140px] sm:min-w-[180px] ${
                    filter === "web"
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                      : "bg-white/10 text-text-secondary hover:bg-white/20 border border-white/20 scale-100"
                  }`}
                  onClick={() => setFilter("web")}
                >
                  <i className="fas fa-code mr-2"></i>
                  Web Development
                </button>
                
                <button
                  className={`filter-btn text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 min-w-[140px] sm:min-w-[180px] ${
                    filter === "design"
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                      : "bg-white/10 text-text-secondary hover:bg-white/20 border border-white/20 scale-100"
                  }`}
                  onClick={() => setFilter("design")}
                >
                  <i className="fas fa-palette mr-2"></i>
                  UI/UX Design
                </button>
              </div>

              {/* Active Filter Indicator */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                <i className="fas fa-filter"></i>
                <span>
                  Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                  {filter !== "all" && (
                    <span className="ml-1 text-accent-primary font-semibold">
                      in {filters.find(f => f.id === filter)?.label}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Projects Grid - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-lift flex flex-col"
                style={{
                  opacity: 1,
                  transform: "scale(1) translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {/* Project Image - Responsive height */}
                <div className="project-image">
                  <div className="relative h-48 sm:h-52 lg:h-56 rounded-t-xl sm:rounded-t-2xl overflow-hidden group">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Project Content - Responsive padding */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span
                      className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-500 border border-orange-500/30"
                    >
                      {project.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-xs sm:text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    <button
                      className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 flex-1 sm:flex-none"
                      onClick={() => setSelectedProject(project)}
                    >
                      <i className="fas fa-eye mr-2"></i>
                      <span className="hidden sm:inline">View Details</span>
                      <span className="sm:hidden">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Project Button - Responsive */}
            {/* <div
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-lift border-2 border-dashed border-orange-500/30 flex items-center justify-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] cursor-pointer group"
              onClick={() =>
                alert(
                  "To add a new project, edit the Projects.jsx component and add your project to the projects array!"
                )
              }
            >
              <div className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent-primary/20 transition-all group-hover:rotate-90 duration-500">
                  <i className="fas fa-plus text-3xl sm:text-4xl text-accent-primary"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 gradient-text">
                  Add New Project
                </h3>
                <p className="text-text-secondary text-sm sm:text-base">
                  Click to learn how to add your projects
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}