import React, { useState } from "react";

const AddRoommateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "",
    lifestyle: [],
    description: "",
    contact: "",
    availability: "Available",
    userName: "John Doe", // Replace with actual user context
    userEmail: "john@example.com", // Replace with actual user context
  });

  const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Vegetarian"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedLifestyle = checked
        ? [...formData.lifestyle, value]
        : formData.lifestyle.filter((item) => item !== value);

      setFormData((prev) => ({ ...prev, lifestyle: updatedLifestyle }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send data to the backend here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Roommate Listing
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Looking for a roommate in NYC"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rent */}
        <div>
          <label className="block font-medium mb-1">Rent Amount</label>
          <input
            type="number"
            name="rent"
            className="input input-bordered w-full"
            value={formData.rent}
            onChange={handleChange}
            required
          />
        </div>

        {/* Room Type */}
        <div>
          <label className="block font-medium mb-1">Room Type</label>
          <select
            name="roomType"
            className="select select-bordered w-full"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Room Type
            </option>
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Lifestyle Preferences */}
        <div>
          <label className="block font-medium mb-2">
            Lifestyle Preferences
          </label>
          <div className="flex flex-wrap gap-3">
            {lifestyleOptions.map((option) => (
              <label key={option} className="label cursor-pointer">
                <input
                  type="checkbox"
                  name="lifestyle"
                  value={option}
                  checked={formData.lifestyle.includes(option)}
                  onChange={handleChange}
                  className="checkbox mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Info */}
        <div>
          <label className="block font-medium mb-1">Contact Info</label>
          <input
            type="text"
            name="contact"
            className="input input-bordered w-full"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block font-medium mb-1">Availability</label>
          <select
            name="availability"
            className="select select-bordered w-full"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>

        {/* User Info (Read-only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">User Name</label>
            <input
              type="text"
              className="input input-bordered w-full bg-gray-100"
              value={formData.userName}
              readOnly
            />
          </div>
          <div>
            <label className="block font-medium mb-1">User Email</label>
            <input
              type="email"
              className="input input-bordered w-full bg-gray-100"
              value={formData.userEmail}
              readOnly
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoommateForm;
