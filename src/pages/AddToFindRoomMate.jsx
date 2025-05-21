import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const AddToFindRoomMate = () => {
  const { user } = useContext(AuthContext);
  const [selectedLifestyle, setSelectedLifestyle] = useState([]);
  // console.log(user);
  const handleAddFindRoomMate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.lifestyle = selectedLifestyle;
    console.log(data);

    fetch("http://localhost:3000/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Account Is Created",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        setSelectedLifestyle([]);
      });
  };

  const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Vegetarian"];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLifestyle([...selectedLifestyle, value]);
    } else {
      setSelectedLifestyle(selectedLifestyle.filter((item) => item !== value));
    }
  };
  return (
    <div className="w-10/12 mx-auto flex items-center justify-center my-5">
      <div className="bg-gray-200 p-10">
        <h2 className="text-4xl font-semibold text-center">
          Add Roommate Listing{" "}
        </h2>
        <p className="text-xs text-center w-2/3 mx-auto my-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddFindRoomMate} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Title</label>
              <input
                type="text"
                className="input border w-full"
                placeholder="Looking for a roommate"
                name="title"
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
                required
              />
            </fieldset>
            {/* Room Type */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
              <label className="label font-medium mb-1">Room Type</label>
              <select
                name="roomType"
                className="select select-bordered w-full"
                //   value={formData.roomType}
                //   onChange={handleChange}
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
                      onChange={handleCheckboxChange}
                      value={option}
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
              required
            />
          </fieldset>

          {/* User Info (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">User Name</label>
              <input
                type="text"
                className="input input-bordered w-full bg-gray-100"
                value={user.displayName}
                readOnly
              />
            </div>
            <div>
              <label className="block font-medium mb-1">User Email</label>
              <input
                type="email"
                className="input input-bordered w-full bg-gray-100"
                value={user.email}
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
            <button type="submit" className="btn bg-primary text-white">
              Add Listing
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddToFindRoomMate;
