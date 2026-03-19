import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function BioCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-black p-8 border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-300">
      {/* Gradient background - from top left to bottom right */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-70 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-40"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM4MDU3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Profile"
            className="relative w-32 h-32 rounded-2xl object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm mb-4">
            Available for work
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            John Doe
          </h1>
          <p className="text-xl text-purple-300 mb-4">Product Designer & Developer</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I craft beautiful and functional digital experiences. With 5+ years of experience in design and development, 
            I help startups and companies build products that users love.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:hello@johndoe.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-zinc-700/50 text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}