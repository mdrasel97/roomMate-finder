import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/loading.json";

const Loading = () => {
  return (
    <div className="flex text-primary justify-center items-center h-screen">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ height: 120, width: 120 }}
      />
    </div>
  );
};

export default Loading;
