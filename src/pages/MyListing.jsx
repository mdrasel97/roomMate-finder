import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyListing = () => {
  const { user, setLoading, loading } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  console.log(listings);
  useEffect(() => {
    const email = user?.email;
    if (!email) return;

    fetch(`http://localhost:3000/my-lists/${email}`)
      .then((res) => res.json())
      .then((data) => setListings(data));
    setLoading(false);
  }, [user, setLoading]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = listings.filter(
                (listing) => listing._id !== id
              );
              setListings(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Roommate has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 w-11/12 mx-auto">
        My Listings
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="w-10/12 mx-auto overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item, index) => (
                // <div className="overflow-x-auto">
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <span className="badge badge-ghost badge-sm">
                      Zemlak, Daniel and Leannon
                    </span>
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th className="space-x-2 flex">
                    <Link
                      to={`/updatedRoommate/${item._id}`}
                      className="btn btn-primary"
                    >
                      <FaPenFancy size={25} />
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-primary"
                    >
                      <MdDelete size={25} />
                    </button>
                  </th>
                </tr>
                // </div>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListing;
