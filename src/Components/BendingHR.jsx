import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const BendingHR = () => {
  const hrRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const yBend = useMotionValue(0);

  // Make curve stronger now (-60 to 60 instead of -30 to 30)
  const path = useTransform(yBend, [-150, 0, 150], [
    'M0,0 Q50,-60 100,0',
    'M0,0 Q50,0 100,0',
    'M0,0 Q50,60 100,0'
  ]);

  const handleMouseMove = (e) => {
    const rect = hrRef.current.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const center = rect.height / 2;
    const bendValue = (offsetY - center) * 3; // More sensitivity

    yBend.set(Math.max(-150, Math.min(150, bendValue)));
  };

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    handleMouseMove(e); // trigger bend instantly on hover
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    animate(yBend, 0, { type: 'spring', stiffness: 300, damping: 20 });
  };

  return (
    <div className="w-[80vw] mx-auto bg-[#D3D9D4] flex items-center justify-center pointer-events-auto">
      <motion.svg
        ref={hrRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={isHovering ? handleMouseMove : null}
        onMouseLeave={handleMouseLeave}
        className="w-full h-10"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <motion.path
          d={path}
          fill="transparent"
          stroke="#444"
          strokeWidth="0.8" // thicker stroke for visibility
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export default BendingHR;
