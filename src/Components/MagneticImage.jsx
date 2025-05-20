import React, { useRef } from "react";

const MagneticImage = ({ src, alt, strength = 30, rotation = 10, className = "" }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -rotation;
    const rotateY = ((x - centerX) / centerX) * rotation;

    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out inline-block ${className}`}
    >
      <img src={src} alt={alt} className="rounded-xl shadow-xl w-full h-full object-cover" />
    </div>
  );
};

export default MagneticImage;
