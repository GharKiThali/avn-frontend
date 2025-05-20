import React, { useEffect } from "react";

const MouseFollower = () => {
  useEffect(() => {
    const follower = document.createElement("div");
    follower.className = `
      w-5 h-5
      fixed top-0 left-0
      bg-[#124E66]/70
      rounded-full
      pointer-events-none
      z-[9999]
      transform -translate-x-1/2 -translate-y-1/2
      transition-transform duration-220 ease-out
    `;
    document.body.appendChild(follower);

    const moveFollower = (e) => {
      follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
      document.body.removeChild(follower);
    };
  }, []);

  return null;
};

export default MouseFollower;
