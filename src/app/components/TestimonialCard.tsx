import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Andy",
    position: "Upwork Client",
    content: "Ellysia is 100% trustworthy and dedicated. A true pleasure to work with.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andy",
  },
  {
    name: "Steven & Brad",
    position: "Upwork Client",
    content: "Ellysia did a great job for us. She was willing to work nights and weekends to help us make a project deadline.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steven",
  },
  {
    name: "Sam",
    position: "Upwork Client",
    content: "Excellent work as always. Many, many thanks and look forward to working with you again!!!!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
  },
  {
    name: "Lean Ventures",
    position: "Upwork Client",
    content: "Ellysia did a fantastic job completing the website for Lean Ventures. Everything was done quickly and to a high standard. Working with Ellysia has been a pleasure. I will for sure hire her again for future jobs.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeanVentures",
  },
  {
    name: "Sam",
    position: "Upwork Client",
    content: "Ellysia is a really excellent communicator!!! She takes the time to understand what needs to be done and she just does it - quickly and efficiently. THANK YOU so very much for all your help!!!!!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
  },
  {
    name: "Gettingtoyum",
    position: "Upwork Client",
    content: "Ellysia did excellent work: professional, quick and met all deadlines. I would hire her again!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gettingtoyum",
  },
  {
    name: "Todd",
    position: "Upwork Client",
    content: "Ellysia was a very reliable and timely contractor. On her project, it took me awhile to get things ready and she always was patient but when given the work, completed it immediately. I would certainly hire her again.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Todd",
  },
  {
    name: "Eric",
    position: "Upwork Client",
    content: "Ellysia did a great job! She was able to meet an immediate need for an interim deliverable that allowed my other team member to start his part of the project. She then finished the job on time and with great quality, despite several late change requests. Thanks Ellysia!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eric",
  },
  {
    name: "Charlene",
    position: "Upwork Client",
    content: "As usual Ellysia's reponse was immediate and the job completed without any problems. Knowing that I can rely on Ellysia to work within timescales and keep me informed takes off a lot of pressure and helps me tremendously. Highly recommended contractor.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlene",
  },
  {
    name: "Karen",
    position: "Upwork Client",
    content: "Ellysia did an excellent job with every task I needed done. She asked the right questions, managed expectations and delivered high quality every time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karen",
  },
  {
    name: "Jackie",
    position: "Upwork Client",
    content: "Ellysia is a delight to work with. She communicates well, is quick to respond and fully understands requirements. I would not hesitate to work with her again.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jackie",
  },
  {
    name: "Omemee",
    position: "Upwork Client",
    content: "Ellysia was a pleasure to work with, she completed her work ahead of time on this schedule and with high quality work products. She had suggestions for improving the presentation of the graphics produced. We will be happy to work with Ellysia again in the future.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omemee",
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
    <div className="relative p-8 h-full">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Quote className="w-5 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Testimonials</h2>
        </div>

        <div className="relative h-70 sm:h-55">
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
              
              <p className="text-gray-300 leading-relaxed mb-6 text-md italic">
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
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
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