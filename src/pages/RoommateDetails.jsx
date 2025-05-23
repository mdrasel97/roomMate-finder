import { useContext, useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const RoommateDetails = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    availability,
    lifestyle,
    contact,
    description,
    email,
  } = useLoaderData();

  // const { id } = useParams();
  // const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);

  // handleLike
  const handleLike = async () => {
    try {
      const res = await fetch(
        `https://roommate-finder-server-mu.vercel.app/roommates/${_id}/like`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.ok) {
        // setLikeCount((prev) => prev + 1);
        setLikeCount((prev) => (typeof prev === "number" ? prev + 1 : 1));
        setShowContact(true);
      }
    } catch (error) {
      // console.error("Failed to like", err);
      toast.error(error);
    }
  };

  useEffect(() => {
    fetch(`https://roommate-finder-server-mu.vercel.app/roommates/${_id}`)
      .then((res) => res.json())
      .then((data) => setLikeCount(data.likeCount));
  }, [_id]);

  // if (!likeCount) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="p-6 max-w-2xl mx-auto border border-primary mt-20 rounded shadow">
      <div className="p-4">
        {/* Like Count Display */}
        <h2 className="text-xl font-semibold mb-4">
          {likeCount} interested in people
        </h2>
      </div>

      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Rent:</strong> ${rent}/month
      </p>
      <p>
        <strong>Room Type:</strong> {roomType}
      </p>
      <p>
        <strong>Lifestyle:</strong> {lifestyle}
      </p>
      <p>
        <strong>Availability:</strong> {availability}
      </p>
      {/* Show contact only after like */}
      {showContact && (
        <p>
          <strong>Contact:</strong> {contact}
        </p>
      )}
      <p className="mt-4">{description}</p>

      {/* <button className="btn btn-primary">Like</button> */}
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded text-white ${
          user.email === email
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary hover:bg-secondary"
        }`}
        disabled={user.email === email}
      >
        👍 Like
      </button>
    </div>
  );
};

export default RoommateDetails;
