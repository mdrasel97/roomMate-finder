import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const Roommate = ({ roommate }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    availability,
    lifestyle,
    description,
  } = roommate;
  const safeLifestyle = Array.isArray(lifestyle)
    ? lifestyle
    : lifestyle
    ? [lifestyle]
    : [];
  return (
    <div className="card bg-base-100 shadow-md border border-primary">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title">{title}</h2>
          <span
            className={`badge ${
              availability === "Available"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-xxs text-white"
            }`}
          >
            {availability}
          </span>
        </div>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          <FaMapMarkerAlt /> {location}
        </p>

        {/* <div className="flex flex-wrap gap-2 mt-2">
          <span className="badge badge-outline">{roomType}</span>
          {lifeStyle?.map((item, index) => (
            <span key={index} className="badge badge-outline">
              {item}
            </span>
          ))}
        </div> */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="badge badge-outline">{roomType}</span>
          {safeLifestyle?.map((item, index) => (
            <span key={index} className="badge badge-outline">
              {item}
            </span>
          ))}
        </div>

        <p className="mt-2">
          <span className="font-semibold">Rent:</span> ${rent}/month
        </p>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center mt-4 justify-between">
          <div className="flex items-center gap-2">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/40"}
              alt={user?.displayName}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">{user?.displayName}</span>
          </div>

          <Link to={`/roommateDetails/${_id}`}>
            <button className="btn btn-sm bg-primary text-white hover:bg-primary">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roommate;
