import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <motion.div
      className="p-6 rounded-xl bg-white border mt-4 mx-2 border-gray-200 cursor-pointer shadow-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, boxShadow: "0 4px 18px rgba(0,0,0,0.06)" }}
      transition={{ duration: 0.2 }}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300 text-gray-500 hover:bg-gray-100"
        >
          <Bookmark size={18} />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 my-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>

        <div>
          <h1 className="font-semibold text-base text-gray-900">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Details */}
      <div>
        <h1 className="font-semibold text-lg text-gray-900">{job?.title}</h1>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-medium">
          {job?.position} Positions
        </Badge>

        <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-medium">
          {job?.jobType}
        </Badge>

        <Badge className="bg-gray-100 text-gray-700 border border-gray-300 font-medium">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-5">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${job?._id}`)}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Details
        </Button>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Save For Later
        </Button>
      </div>
    </motion.div>
  );
};

export default Job;
