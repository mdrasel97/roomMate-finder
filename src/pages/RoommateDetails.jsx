import React from "react";
import { useLoaderData } from "react-router";

const RoommateDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return <div>RoommateDetails</div>;
};

export default RoommateDetails;
