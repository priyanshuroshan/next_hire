import React from 'react'
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/description/${job._id}`)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group p-5 rounded-xl bg-white/80 backdrop-blur-md border border-purple-200 shadow-sm hover:shadow-purple-300 cursor-pointer transition-all"
    >
      {/* Company */}
      <div>
        <h1 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-500">India</p>
      </div>

      {/* Job Title + Description */}
      <div>
        <h1 className="font-bold text-lg mt-2 text-gray-800 group-hover:text-purple-700 transition">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex gap-2 items-center mt-4 flex-wrap">
        <Badge className="bg-purple-100 text-purple-600 border border-purple-200">
          {job?.position}
        </Badge>
        <Badge className="bg-blue-100 text-blue-600 border border-blue-200">
          {job?.jobType}
        </Badge>
        <Badge className="bg-teal-100 text-teal-600 border border-teal-200">
          {job?.salary} LPA
        </Badge>
      </div>
    </motion.div>
  )
}

export default LatestJobCards
