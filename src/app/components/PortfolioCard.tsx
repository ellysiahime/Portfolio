import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Folder } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzczNzg5OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1769069918451-0e8ee342a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwcHJvamVjdHxlbnwxfHx8fDE3NzM4OTQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzM4NDI3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Design System",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1620403661092-1750c6d4148a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzgxNjc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-pink-500 to-purple-500",
  },
];

export function PortfolioCard() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const itemWidth = 320; // width of each item including gap
    const totalWidth = itemWidth * projects.length;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled past half of the content
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative rounded-3xl bg-black p-8 border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 h-full overflow-hidden">
      {/* Diagonal gradient from bottom left to top right */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#8964d1] to-transparent opacity-70 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#8964d1] to-transparent opacity-70 blur-3xl pointer-events-none"></div>
      
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Folder className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Featured Work</h2>
          </div>
          <span className="text-sm text-gray-500">{projects.length} projects</span>
        </div>

        {/* Horizontal scrolling container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate the projects array to create seamless loop */}
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer flex-shrink-0 w-[300px]"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-950">
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
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs mb-2`}>
                  {project.category}
                </div>
                <h3 className="text-white font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
