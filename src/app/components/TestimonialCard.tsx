import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO at TechFlow",
    content: "John's work exceeded our expectations. His attention to detail and creative solutions helped us launch our product 2 months ahead of schedule.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    position: "Product Manager at StartupXYZ",
    content: "Working with John was a game-changer for our team. He brought both design expertise and technical knowledge that elevated our entire product.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Emma Williams",
    position: "CTO at InnovateLabs",
    content: "John is one of the most talented designers I've worked with. His ability to understand user needs and translate them into beautiful interfaces is remarkable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];

export function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-3xl bg-black p-8 border border-zinc-800/50 overflow-hidden group hover:border-purple-500/30 transition-all duration-300 h-full">
      {/* Gradient from left side */}
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#8964d1] to-transparent opacity-70 blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Quote className="w-8 h-8 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Testimonials</h2>
        </div>

        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                x: currentIndex === index ? 0 : 20,
                display: currentIndex === index ? 'block' : 'none',
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-2 justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-purple-500'
                  : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}