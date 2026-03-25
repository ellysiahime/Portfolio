import React, { useEffect, useMemo, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Folder } from "lucide-react";
import { motion } from "motion/react";
import { Dialog, DialogContent } from "./ui/dialog";

const projects = [
  {
    title: "GrowTrack",
    category: "Full Stack Development",
    image: "/images/growtrack.JPG",
    color: "from-purple-500 to-violet-500",
    description: "GrowTrack is a private full-stack academic tracker built to help monitor a child's educational progress — from exam schedules and subject scores to weekly timetables and overall performance trends. Originally developed for private family use, it serves as a centralized academic tracker with rich visual insights and data-driven progress monitoring across multiple terms and school years."
  },
  {
    title: "Portfolio",
    category: "Web Design & Development",
    image: "/images/portfolio_site.JPG",
    color: "from-pink-500 to-purple-500",
    description: "A modern, responsive portfolio website built with React (Vite), focusing on clean UI, smooth interactions, and real-world usability. Features include project showcase with modal previews, testimonial section, and optimized deployment via GitHub Pages. Designed from Figma and refined into reusable, production-ready components."
  },
  // {
  //   title: "Stitchlog",
  //   category: "Full Stack Development",
  //   image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzM4NDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   color: "from-blue-500 to-purple-500",
  //   description: ""
  // },
  {
    title: "Virtus-ip",
    category: "Figma to Wordpress CMS",
    image: "/images/virtus.JPG",
    color: "from-violet-500 to-purple-500",
    description: "Collaborated with a UI/UX designer to convert Figma designs into a responsive WordPress landing page using Elementor Pro. Implemented pixel-accurate layouts, custom sections, and mobile-responsive components while ensuring cross-browser compatibility and performance. Worked closely with the designer to maintain visual consistency and user experience. Built as part of a corporate website initiative at PETRONAS Digital."
  },
  {
    title: "STEAR",
    category: "Web Application Development",
    image: "/images/stear.JPG",
    color: "from-blue-500 to-purple-500",
    description: "Developed frontend features for the STEAR logistics optimization platform using React, TypeScript, and modern JavaScript. Built responsive dashboards, map-based interfaces, and analytics views to support demand management, route optimization, and voyage monitoring. Collaborated with product managers and backend engineers to deliver scalable UI components integrated with enterprise APIs for a data-driven logistics solution."
  },
  {
    title: "Senior Software Engineer",
    category: "Web Application Development",
    image: "/images/software_engineer.JPG",
    color: "from-pink-500 to-purple-500",
    description: "A five-year body of work delivering modern, scalable front-end solutions for enterprise applications within PETRONAS Digital. Focused on building high-impact internal platforms, dashboards, and microsites using React and Angular, while collaborating closely with backend, UX, and product teams to turn complex business requirements into clean, intuitive user experiences."
  },
  {
    title: "Scrum Master",
    category: "Agile Leadership",
    image: "/images/scrum_master.JPG",
    color: "from-violet-500 to-purple-500",
    description: "Served as Scrum Master supporting multiple cross-functional teams within PETRONAS Digital. Facilitated Agile delivery, improved sprint outcomes, and strengthened team collaboration while leveraging a deep technical background to bridge communication between engineers, product owners, and stakeholders."
  },
];

export function PortfolioCard() {
  type Project = (typeof projects)[number];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(mql.matches);
    update();

    // Support older browsers (not likely, but keeps it safe).
    if (mql.addEventListener) {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }

    mql.addListener(update);
    return () => mql.removeListener(update);
  }, []);

  const slides = useMemo(() => {
    const chunkSize = isMobile ? 1 : 2;
    const result: Project[][] = [];

    for (let i = 0; i < projects.length; i += chunkSize) {
      result.push(projects.slice(i, i + chunkSize));
    }
    return result;
  }, [isMobile]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Ensure current slide index stays in range after responsive re-grouping.
    setCurrentIndex(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;

    // Faster than the old marquee for a more responsive feel.
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative p-8 h-full">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Folder className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Featured Work</h2>
          </div>
          {/* <span className="text-sm text-gray-500">{projects.length} projects</span> */}
        </div>

        {/* 2-up carousel */}
        <div className="relative flex-1 min-h-[260px] md:min-h-0">
          {slides.map((slide, slideIndex) => (
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, x: 18 }}
              animate={
                slideIndex === currentIndex
                  ? { opacity: 1, x: 0, display: "block" }
                  : { opacity: 0, x: 18, display: "none" }
              }
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-stretch">
                {slide.map((project) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => {
                      setModalProject(project);
                      setIsModalOpen(true);
                    }}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col text-left"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-zinc-950 md:flex-1 min-h-[190px]">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* No overlap: title + category below image */}
                    <div className="p-4 flex flex-col gap-2">
                      <div
                        className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs w-fit`}
                      >
                        {project.category}
                      </div>
                      <h3 className="text-white font-semibold leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bullet indicators (each bullet = next 2 projects) */}
        <div className="flex gap-2 justify-center mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-10 bg-purple-500"
                  : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Dialog
          open={isModalOpen}
          onOpenChange={(open) => {
            setIsModalOpen(open);
            if (!open) setModalProject(null);
          }}
        >
          <DialogContent className="bg-[#0a0118] text-white border border-purple-500/20 p-6 sm:max-w-2xl">
            {modalProject ? (
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                  <ImageWithFallback
                    src={modalProject.image}
                    alt={modalProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-3">
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${modalProject.color} text-white text-xs w-fit`}
                  >
                    {modalProject.category}
                  </div>
                  <h3 className="text-2xl font-bold">{modalProject.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-md mb-6">{modalProject.description}</p>
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
