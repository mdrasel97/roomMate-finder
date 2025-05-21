import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";

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
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Listings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="w-10/12 mx-auto">
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
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th className="space-x-2">
                    <button className="btn btn-primary">
                      <FaPenFancy size={25} />
                    </button>
                    <button className="btn btn-primary">
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
