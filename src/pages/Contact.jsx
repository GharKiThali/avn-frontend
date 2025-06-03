import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import Magnetic from '../Components/Magnetic';

const Contact = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6,
      }
    );
  }, []);

  return (
    <div className='min-h-screen pt-30 flex flex-col justify-center items-center w-full bg-[#D3D9D4] px-4 py-10 relative'>
      <h1
        ref={headingRef}
        className='text-3xl md:text-4xl lg:text-6xl font-serif mb-2 bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'
      >
        Connect with us
      </h1>

      <hr className='h-1 rounded-full w-[50vw] md:w-[32vw] mb-10 bg-[#124e66]' />

      <p
        ref={paragraphRef}
        className='w-full max-w-4xl text-center text-base sm:text-lg md:text-xl text-zinc-500 leading-relaxed'
      >
        Get in touch with us for collaborations, inquiries, or support. We’re here to help you every step of the way.
        Fill out the form, drop us an email, or connect via social media. <br /><br />
        Explore our diverse portfolio showcasing cutting-edge web development, innovative mobile apps, cloud solutions, and
        creative digital experiences tailored for modern businesses. Let us help you grow and bring your business and art
        to the world — let them explore.
      </p>

      {/* Social Icons */}
      <div className='absolute bottom-6 md:top-[33rem] pl-4 md:pl-10 left-5 flex gap-4'>
        <Magnetic strength={1}>
          <div className='p-3 rounded-full border border-[#124e66] text-[#124e66] hover:bg-[#124e66] hover:text-white transition duration-300 cursor-pointer'>
            <FaInstagram size={28} />
          </div>
        </Magnetic>
        <Magnetic strength={1}>
          <div className='p-3 rounded-full border border-[#124e66] text-[#124e66] hover:bg-[#124e66] hover:text-white transition duration-300 cursor-pointer'>
            <FaFacebookF size={28} />
          </div>
        </Magnetic>
        <Magnetic strength={1}>
          <div className='p-3 rounded-full border border-[#124e66] text-[#124e66] hover:bg-[#124e66] hover:text-white transition duration-300 cursor-pointer'>
            <FaYoutube size={28} />
          </div>
        </Magnetic>
        <Magnetic strength={1}>
          <div className='p-3 rounded-full border border-[#124e66] text-[#124e66] hover:bg-[#124e66] hover:text-white transition duration-300 cursor-pointer'>
            <FaGithub size={28} />
          </div>
        </Magnetic>
      </div>

      {/* ➡️ Rotating Image + Text - Right */}
      <div className="absolute top-[34.5rem] md:top-[30.5rem] right-10 w-[16vh] h-[16vh] hidden md:flex items-center justify-center z-10">
        <img
          src="https://hunterae.com/wp-content/uploads/images/laptop-website-promo-videohive-36009462-download-free-hunterae-com.jpg"
          alt="center"
          className="w-[10vh] h-[10vh] rounded-full z-10 absolute"
        />
        <svg viewBox="0 0 100 100" className="w-[16vh] h-[16vh] spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50
                m -45, 0
                a 45,45 0 1,1 90,0
                a 45,45 0 1,1 -90,0"
            />
          </defs>
          <text fill="#124E66" fontSize="6" fontWeight="500" letterSpacing="3px">
            <textPath href="#circlePath" startOffset="0%">
              • Creative • Dynamic • Responsive • Web Design
            </textPath>
          </text>
        </svg>
      </div>

      {/* Placeholder Image Text Section */}
     <div className="w-full max-w-[90vw] mx-auto rounded-3xl overflow-hidden mt-12 flex flex-col md:flex-row bg-white shadow-md">

  {/* Left: Contact Info */}
  <div className="w-full md:w-1/2 p-6 md:p-12 relative">
    {/* Heading */}
    <p className="text-2xl md:text-3xl font-serif mb-4 bg-bottom bg-cover bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
      Contact Us
    </p>

    {/* Decorative Border */}
    <div className="absolute top-[80%] md:top-[9rem] left-10 h-16 w-16 border-r border-b border-[#124e66] hidden sm:flex items-center justify-center z-10">
      <hr className="h-[1px] w-[4rem] rotate-45 text-[#124e66]" />
    </div>

    {/* Address & Contact */}
    <p className="mt-6 text-base md:text-lg text-zinc-500">
      104 Palakpuri, Opposite SBI Bank,<br />
      Gwalior, Madhya Pradesh, India
    </p>

    <p className="mt-4 text-base md:text-lg text-zinc-500">
      avnagency@gmail.com | +91 8878895052
    </p>

    <p className="mt-4 text-sm md:text-base text-zinc-500">
      +91 6388640308 | +91 7354387417 | +91 6265471204
    </p>

    <p className="mt-6 text-xs md:text-sm text-[#124e66]">
      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
    </p>
  </div>

  {/* Right: Video */}
  <div className="w-full md:w-1/2 h-[250px] md:h-auto bg-white">
    <video
      className="w-full h-full object-contain"
      autoPlay
      loop
      muted
      src="https://cuberto.com/assets/home/summary/1.mp4?3"
    ></video>
  </div>
</div>

    </div>
  );
};

export default Contact;
