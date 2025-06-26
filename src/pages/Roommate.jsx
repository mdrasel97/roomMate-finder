import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Roommate = ({ roommate }) => {
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    availability,
    lifestyle,
    description,
    name,
    photoURL,
  } = roommate;

  const safeLifestyle = Array.isArray(lifestyle)
    ? lifestyle
    : lifestyle
    ? [lifestyle]
    : [];
  return (
    <motion.div
      className="card bg-base-100 shadow-md border border-primary"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="card-body">
        {/* Header: Title & Availability */}
        <div className="flex justify-between items-start w-full">
          <h2 className="card-title">{title}</h2>
          <span
            className={`badge ${
              availability === "Available"
                ? "bg-green-500 text-[10px] text-white"
                : "bg-red-500 text-[10px] text-white"
            }`}
          >
            {availability}
          </span>
        </div>

        {/* Location */}
        <p className="text-sm flex items-center gap-1">
          <FaMapMarkerAlt /> {location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="badge badge-outline">{roomType}</span>
          {safeLifestyle?.map((item, index) => (
            <span key={index} className="badge badge-outline">
              {item}
            </span>
          ))}
        </div>

        {/* Rent */}
        <p className="mt-2">
          <span className="font-semibold">Rent:</span> ${rent}/month
        </p>

        {/* Short Description */}
        <p className="text-sm line-clamp-2">{description}</p>

        {/* Footer: User info and Button */}
        <div className="flex items-center mt-4 justify-between">
          <div className="flex items-center gap-2">
            <img
              src={photoURL}
              alt={name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm">{name}</span>
          </div>

          <Link to={`/roommateDetails/${_id}`}>
            <button className="btn btn-sm bg-primary text-white hover:bg-primary">
              See More
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Roommate;
