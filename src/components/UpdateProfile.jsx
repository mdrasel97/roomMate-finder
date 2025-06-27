import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateProfileUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfileUser({ displayName, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Display Name"
          defaultValue={user?.displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Photo URL"
          defaultValue={user?.photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
