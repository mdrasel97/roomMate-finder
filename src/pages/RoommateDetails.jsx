import { useContext } from "react";

import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

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
  // const [listing, setListing] = useState(null);
  // const [liked, setLiked] = useState(false);
  // useEffect(() => {
  //   // Replace with your API or database fetch
  //   axios.get(`/api/listings/${_id}`).then((res) => {
  //     setListing(res.data);
  //   });
  // }, [_id]);
  // const handleLike = () => {
  //   if (!user) return alert("You need to log in to like.");
  //   setLiked(!liked);
  //   // Optional: Send like to DB
  //   axios.post(`/api/listings/${_id}/like`, { userId: user.uid });
  // };

  // if (!listing) return <p>Loading...</p>;
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
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

      <button className="btn btn-primary">Like</button>

      {/* <button
        onClick={handleLike}
        className={`mt-4 px-4 py-2 rounded ${
          liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {liked ? "Liked ❤️" : "Like 🤍"}
      </button> */}
    </div>
  );
};

export default RoommateDetails;
