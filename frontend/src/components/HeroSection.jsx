import React, { useState } from "react";
import { Briefcase, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchedQuery(query));
    navigate("/browse")
  };

  return (
    <section className="relative flex flex-col items-center min-h-[calc(100vh-64px)] justify-center text-center py-16 px-6 bg-white overflow-hidden">
      
      {/* Soft Purple Glow */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-200 opacity-40 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-purple-300 opacity-40 blur-3xl rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Find Your <span className="text-purple-600">Dream Job</span> Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-600 text-lg md:text-xl"
        >
          Discover top opportunities that match your skills and goals. 
          Connect with leading companies and take the next step in your career.
        </motion.p>

        {/* Search bar */}
        <motion.form
          onSubmit={onSearch}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex items-center justify-center"
        >
          <div className="flex w-full max-w-xl bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-purple-500">
            
            <input
              id="job-search"
              type="text"
              placeholder="Search jobs, companies, or skills..."
              className="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
              onChange={(e)=> setQuery(e.target.value)}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center gap-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </motion.button>
          </div>
        </motion.form>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800"
        >
          {[
            {
              icon: <Briefcase className="w-8 h-8 mx-auto text-purple-600 mb-3" />,
              title: "10,000+ Jobs Posted",
              desc: "Updated daily with new opportunities."
            },
            {
              icon: <img src="https://img.icons8.com/color/48/people-working-together.png" className="w-8 h-8 mx-auto mb-3" />,
              title: "500+ Companies",
              desc: "Partnered with global tech leaders."
            },
            {
              icon: <img src="https://img.icons8.com/fluency/48/goal.png" className="w-8 h-8 mx-auto mb-3" />,
              title: "Career Growth",
              desc: "Your journey to success starts here."
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, translateY: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-4 rounded-lg bg-gray-50 shadow-md"
            >
              {card.icon}
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
