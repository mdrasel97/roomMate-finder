import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const UpdateRoommate = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [selectedLifestyle, setSelectedLifestyle] = useState([]);

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
  //   console.log(roommate);
  const handleUpdatedRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const restFormData = Object.fromEntries(formData.entries());

    const userProfile = {
      ...restFormData,
      lifestyle: selectedLifestyle,
    };

    fetch(`https://roommate-finder-server-mu.vercel.app/roommates/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update listing");
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Listing Has Been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        setSelectedLifestyle([]);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: error.message,
        });
      });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLifestyle([...selectedLifestyle, value]);
    } else {
      setSelectedLifestyle(selectedLifestyle.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (Array.isArray(lifestyle)) {
      setSelectedLifestyle(lifestyle);
    }
  }, [lifestyle]);
  const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Vegetarian"];
  return (
    <div className="w-10/12 mx-auto flex items-center justify-center my-10 mt-20">
      <div className="border border-primary rounded-md p-3 md:p-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-5 text-center">
          Update Roommate Listing{" "}
        </h2>

        <form onSubmit={handleUpdatedRoommate} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Title</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Looking for a roommate"
                name="title"
                defaultValue={title}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Location</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Location"
                name="location"
                defaultValue={location}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Rent Amount</label>
              <input
                type="number"
                className="input border w-full"
                placeholder="$250"
                name="rent"
                defaultValue={rent}
                required
              />
            </fieldset>
            {/* Room Type */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Room Type</label>
              <select
                name="roomType"
                className="select select-bordered w-full"
                defaultValue={roomType}
                required
              >
                <option value="" disabled>
                  Select Room Type
                </option>
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
                <option value="Studio">Master</option>
              </select>
            </fieldset>
            {/* Lifestyle Preferences */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">
                Lifestyle Preferences
              </label>
              <div className="flex flex-wrap gap-3">
                {lifestyleOptions.map((option) => (
                  <label key={option} className="label cursor-pointer">
                    <input
                      type="checkbox"
                      name="lifestyle"
                      value={option}
                      checked={selectedLifestyle.includes(option)}
                      onChange={handleCheckboxChange}
                      className="checkbox mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            {/* <div>
              // checked={formData.lifestyle.includes(option)}
              // onChange={handleChange}
            </div> */}
            {/* Availability */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Availability</label>
              <select
                name="availability"
                className="select select-bordered w-full"
                //   value={formData.availability}
                //   onChange={handleChange}
                defaultValue={availability}
                required
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </fieldset>
          </div>
          {/* Contact Info */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
            <label className="label font-medium mb-1">Contact Info</label>
            <input
              type="text"
              name="contact"
              className="input input-bordered w-full"
              // value={formData.contact}
              // onChange={handleChange}
              defaultValue={contact}
              required
            />
          </fieldset>
          {/* Description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
            <label className="label font-medium mb-1">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="2"
              // value={formData.description}
              // onChange={handleChange}
              defaultValue={description}
              required
            />
          </fieldset>

          {/* User Info (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">User Name</label>
              <input
                type="text"
                className="input input-bordered w-full border border-primary"
                value={user.displayName}
                readOnly
              />
            </div>
            <div>
              <label className="block font-medium mb-1">User Email</label>
              <input
                type="email"
                className="input input-bordered w-full border border-primary"
                value={user.email}
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
            <button type="submit" className="btn bg-primary text-white">
              Update Listing
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoommate;
