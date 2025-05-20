import React, { useState } from 'react';
import Magnetic from './Magnetic';
import axios from '../instant/axios';

const Footer = () => {
  
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post('/contact/email', { email });
      alert(response.data.message); // Optional: Show success message
      setEmail(''); // Clear input
    } catch (error) {
      console.error(error);
      alert("Failed to subscribe. Please try again later.");
    }
  };

  
  return (
    <div className="w-[98.9vw] bg-[#D3D9D4] px-6 md:px-12 py-20">
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-40">
        {/* Logo Section */}
        <Magnetic strength={1}>
          <h1 className="text-2xl font-bold font-serif text-[#124E66]">
            AVN <span className="text-zinc-500 font-light">agency</span>
          </h1>
        </Magnetic>

        {/* Main Content Section */}
        <div className="w-full lg:w-[70vw]">
          {/* Heading */}
          <h1
            className="text-[6vw] sm:text-[5vw] font-serif md:text-[5vw] lg:text-[3vw] xl:text-[4vw] leading-tight mb-10 bg-top bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            The Agency <br /> narrative rewritten
          </h1>

          {/* Newsletter Signup */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <h2 className="text-2xl text-zinc-600 mb-4 md:mb-0">
              Sign up to our newsletter
            </h2>
            <div className="flex bg-white rounded-full p-1 px-2 gap-4 items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-60 px-4 py-3 outline-none rounded-full"
              />
              <button onClick={handleSubscribe} className="font-semibold px-4 py-2.5 rounded-full text-white bg-[#124E66]">
                Subscribe
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-around items-center mb-6 border-b-1 border-gray-500 py-8">
            <a
              href="/home"
              className="text-zinc-700 hover:underline text-xl font-serif mb-2 md:mb-0"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-zinc-700 hover:underline text-xl font-serif mb-2 md:mb-0"
            >
              Insights
            </a>
            <a
              href="/services"
              className="text-zinc-700 hover:underline text-xl font-serif mb-2 md:mb-0"
            >
              Projects
            </a>

            <a
              href="/contact"
              className="text-zinc-700 hover:underline text-xl font-serif mb-2 md:mb-0"
            >
              Contact
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-lg text-zinc-500">
            <p>© Copyright AVN Agency 2025</p>
            <a href="/legal" className="hover:underline text-lg mt-2 md:mt-0">
              Legal
            </a>
            <div className='flex gap-2'>
            <i className="text-xl fa-brands fa-x-twitter"></i>
            <i className="text-xl fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
