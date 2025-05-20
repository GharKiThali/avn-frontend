import { useEffect, useRef, useState } from "react";
import MagneticImage from "./MagneticImage";

const feedbacks = [
  { text: "Absolutely loved the design and experience. Highly recommend AVN Agency!", name: "Rahul Sharma" },
  { text: "The attention to detail and smooth UI was stunning!", name: "Ananya Verma" },
  { text: "They transformed our vision into a beautifully functional website.", name: "Dev Patel" },
  { text: "Super responsive team and top-notch results!", name: "Neha Kapoor" },
  { text: "Best branding and UX we've ever received.", name: "Arjun Mehta" },
  { text: "Very happy with the results. Our users love the new look.", name: "Sneha Reddy" },
  { text: "They exceeded our expectations!", name: "Kabir Sinha" },
  { text: "Creative minds with professional execution.", name: "Priya Chauhan" },
];

const FeedbackSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % feedbacks.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 md:px-16 pb-12 gap-10">
      {/* Left Section */}
      <div className="lg:w-[60vw] w-full">
        <div className="mb-8">
          <p className='text-3xl md:text-4xl lg:text-2xl font-serif mb-10 bg-top bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
            Feedback From<br />Our Clients
          </p>
          <div className='h-20 w-20 border-r-1 flex relative items-center border-b-1 border-[#124e66] mx-auto md:mx-0'>
            <hr className='h-[1px] w-24 absolute rotate-45 bg-[#124e66]' />
          </div>
        </div>

        {/* Feedback Carousel */}
        <div className="mt-30 h-32 mb-50 overflow-hidden relative w-full">
          <div
            key={index}
            className="transition-all duration-500 ease-in-out w-full"
          >
            <p className="text-lg md:text-xl text-center md:text-left text-[#333] font-serif px-4">
              “{feedbacks[index].text}”
            </p>
            <p className="text-sm md:text-base text-center md:text-left text-[#124e66] mt-2 px-4">
              - {feedbacks[index].name}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Magnetic Image */}
      <div>
      <MagneticImage
  src="https://cuberto.com/assets/about/splitshow/6@2x.jpg"
  alt="Creative Laptop"
  strength={100}
  className="w-[300px] md:w-[450px] lg:w-[500px] object-cover rounded-xl"
/>
  </div>
    </div>
    
  );
};

export default FeedbackSlider;
