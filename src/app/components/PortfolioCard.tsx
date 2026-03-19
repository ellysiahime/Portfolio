import React, { useEffect, useMemo, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Folder } from "lucide-react";
import { motion } from "motion/react";
import { Dialog, DialogContent } from "./ui/dialog";

const projects = [
  {
    title: "GrowTrack",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzczNzg5OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Portfolio",
    category: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1620403661092-1750c6d4148a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzgxNjc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Stitchlog",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzM4NDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Virtus-ip",
    category: "Figma to Wordpress CMS",
    image: "https://images.unsplash.com/photo-1769069918451-0e8ee342a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NzM4OTQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "STEAR",
    category: "Web Application Development",
    image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzM4NDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Senior Software Engineer",
    category: "Web Application Development",
    image: "https://images.unsplash.com/photo-1620403661092-1750c6d4148a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzgxNjc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Scrum Master",
    category: "Agile Leadership",
    image: "https://images.unsplash.com/photo-1769069918451-0e8ee342a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NzM4OTQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-violet-500 to-purple-500",
  },
];

export function PortfolioCard() {
  type Project = (typeof projects)[number];

  const slides = useMemo(() => {
    const result: Project[][] = [];
    for (let i = 0; i < projects.length; i += 2) {
      result.push(projects.slice(i, i + 2));
    }
    return result;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <span className="text-sm text-gray-500">{projects.length} projects</span>
        </div>

        {/* 2-up carousel */}
        <div className="relative flex-1 min-h-0">
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
              <div className="grid grid-cols-2 gap-4 h-full items-stretch">
                {slide.map((project) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => {
                      setModalProject(project);
                      setIsModalOpen(true);
                    }}
                    className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full text-left"
                  >
                    <div className="relative overflow-hidden bg-zinc-950 flex-1 min-h-[120px]">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

        {/* Dummy modal (image + title + category) */}
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
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${modalProject.color} text-white text-xs w-fit`}
                  >
                    {modalProject.category}
                  </div>
                  <h3 className="text-2xl font-bold">{modalProject.title}</h3>
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
