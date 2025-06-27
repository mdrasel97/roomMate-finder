import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../components/Loading/Loading";
import { toast } from "react-toastify";

const MyListing = () => {
  const { user, loading } = useContext(AuthContext);
  const [listingLoading, setListingLoading] = useState(false);
  const [listings, setListings] = useState([]);
  // console.log(listings);
  useEffect(() => {
    document.title = "My Listing || RomeoMatch";
  }, []);
  useEffect(() => {
    const email = user?.email;
    if (!email) return;
    // setLoading(true);
    setListingLoading(true);

    fetch(`https://roommate-finder-server-mu.vercel.app/my-lists/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        // setLoading(false);
        setListingLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        // setLoading(false);
        setListingLoading(false);
      });
  }, [user, setListingLoading]);

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
        fetch(`https://roommate-finder-server-mu.vercel.app/roommates/${id}`, {
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
      {listingLoading && <Loading />}
      {loading ? (
        <p>
          <Loading />
        </p>
      ) : listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="w-10/12 mx-auto overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Availability</th>
                <th>Rent</th>
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
                      <div>
                        <div className="font-bold">{item.title}</div>
                        <div className="text-sm opacity-50">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <span className="badge badge-ghost badge-sm">
                      {item.availability}
                    </span>
                  </td>
                  <td>
                    <span>$</span> {item.rent}
                  </td>
                  <th className="space-x-2 flex">
                    <Link
                      to={`/dashboard/updatedRoommate/${item._id}`}
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
