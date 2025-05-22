import { useContext, useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../components/Loading/Loading";

const RoommateDetails = () => {
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
  } = useLoaderData();

  // const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(0);

  // handleLike
  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/roommates/${_id}/like`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        setLikeCount((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Failed to like", err);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/roommates/${_id}`)
      .then((res) => res.json())
      .then((data) => setLikeCount(data.likeCount));
  }, [_id]);

  // if (!likeCount) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <div className="p-4">
        {/* Like Count Display */}
        <h2 className="text-xl font-semibold mb-4">
          {likeCount} people interested in
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
      <p>
        <strong>Contact:</strong> {contact}
      </p>
      <p className="mt-4">{description}</p>

      {/* <button className="btn btn-primary">Like</button> */}
      <button
        onClick={handleLike}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
      >
        👍 Like
      </button>
    </div>
  );
};

export default RoommateDetails;
