import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Shield,
  Network,
  Globe,
} from "lucide-react";

const jobCategories = [
  { icon: <Code className="w-5 h-5 text-purple-400" />, title: "Frontend Dev" },
  { icon: <Cpu className="w-5 h-5 text-purple-400" />, title: "Backend Dev" },
  { icon: <Database className="w-5 h-5 text-purple-400" />, title: "Data Science" },
  { icon: <Cloud className="w-5 h-5 text-purple-400" />, title: "Cloud Engg." },
  { icon: <Smartphone className="w-5 h-5 text-purple-400" />, title: "Mobile Dev" },
  { icon: <Shield className="w-5 h-5 text-purple-400" />, title: "Cybersecurity" },
  { icon: <Network className="w-5 h-5 text-purple-400" />, title: "Network Engg." },
  { icon: <Globe className="w-5 h-5 text-purple-400" />, title: "DevOps Engg." },
  { icon: <Code className="w-5 h-5 text-purple-400" />, title: "AI / ML Engg." },
];

const CategoryCarousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="py-14 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      
      {/* Glow UI Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-900 mb-6"
        >
          Popular <span className="text-purple-600">Job Categories</span>
        </motion.h2>

        <div className="flex justify-between mb-4">
          <div></div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full bg-white shadow-sm hover:bg-purple-100 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full bg-white shadow-sm hover:bg-purple-100 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Scroll Section */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3 hide-scrollbar"
          >
            {jobCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="min-w-[150px] flex-shrink-0 bg-white/90 backdrop-blur-sm border border-purple-200 shadow-sm hover:shadow-purple-300/40 hover:-translate-y-1 transition-all duration-300 rounded-xl cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center py-6 px-2">
                    <div className="mb-3 p-2 rounded-full bg-purple-100/70 ring-1 ring-purple-200 shadow-inner">
                      {cat.icon}
                    </div>
                    <h3 className="font-medium text-sm text-gray-700 text-center">{cat.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Hide Scrollbar
const style = `
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default () => (
  <>
    <style>{style}</style>
    <CategoryCarousel />
  </>
);
