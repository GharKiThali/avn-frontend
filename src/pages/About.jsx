import React from 'react'
import BendingHR from '../Components/BendingHR'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className='h-auto w-full flex justify-center pt-35 items-center flex-col bg-[#D3D9D4] relative overflow-hidden'>
{/* Title */}
<motion.h1
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className='text-3xl md:text-4xl lg:text-6xl font-serif mb-2 bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'
>
  About
</motion.h1>

<motion.hr
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
  viewport={{ once: true }}
  className='h-1 rounded-full w-[50vw] md:w-[15vw] mb-10 bg-[#124e66]'
/>

{/* Main Paragraph */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
  viewport={{ once: true }}
  className='flex mx-auto w-[80vw] md:w-[80vw] lg:w-[48vw] mb-10 items-center justify-center px-4 md:px-0 text-center'
>
  <p className='text-base sm:text-lg md:text-xl text-zinc-400'>
    At AVN, we craft digital experiences that connect, inspire, and deliver results. With expertise spanning web development, intuitive UI/UX design, scalable cloud solutions, app development, we empower brands to thrive in the digital era. Our founders are tech innovators work which turn dream true. AVN Agency is your trusted partner for digital transformation.
  </p>
</motion.div>


        {/* ⬅️ 45° Rotated Line - Left */}
        <div className='absolute top-[26rem] left-30 h-20 w-20 border-r border-b border-[#124e66] hidden sm:flex items-center justify-center z-10'>
          <hr className='h-[1px] w-[6rem] absolute mt-3 ml-3 rotate-45 text-[#124e66]' />
        </div>

        {/* ➡️ Rotating Image + Text - Right */}
        <div className="absolute top-[24.5rem] right-30 w-[16vh] h-[16vh] hidden md:flex items-center justify-center z-10">
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

        {/* Background Video */}
        <video autoPlay muted loop className="w-[100vw] mt-30 h-auto object-cover">
          <source src="https://cuberto.com/assets/about/screenshot/3.mp4" type="video/mp4" />
        </video>

        {/* Who We Are Section */}
        <div className='w-full relative px-4 sm:px-10 mb-10 md:px-20 py-10 flex flex-col md:flex-row justify-between items-start gap-10'>
          <p className='text-xl md:text-2xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
            Who We Are ?
          </p>
          <div className='absolute top-[8rem] left-20 h-20 w-20 border-r border-b border-[#124e66] hidden sm:flex items-center justify-center z-10'>
          <hr className='h-[1px] w-[6rem] absolute mt-3 ml-3 rotate-45 text-[#124e66]' />
        </div>
          <div className='flex flex-col justify-center items-center gap-6 max-w-full md:w-[60%]'>
            <p className='text-base sm:text-lg w-full md:w-[40vw] text-zinc-400'>
              We are a community who wants to bring a change a society,
              In India, AVN - means CLassy. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.
              <br /><br />
              We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded AVN Agency to help you persuade colleagues and clients by creating classy, stunning & engaging presentations that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#D3D9D4]'>
      <BendingHR/>
      </div>

      {/* Playbook/Quick Start */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-10 font-serif bg-[#D3D9D4]">
  <h1
    className="text-[6vw] px-20 sm:text-[5vw] md:text-[5vw] lg:text-[3vw] xl:text-[4vw] mb-6 bg-top bg-clip-text text-transparent"
    style={{
      backgroundImage:
        'url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    Quick Start <span className="text-sm sm:text-base font-mono">(12)</span>
  </h1>
</div>

   {/* Our Playbooks Section */}
<div className='h-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-20 py-15 bg-[#D3D9D4]'>

{/* Row 1 of Playbook */}
<div className='flex flex-col sm:flex-row mb-12'>
  <div className='h-auto w-full sm:w-[60vw]'>
    <img className='w-full sm:w-[45vw]' src="https://abhishekjha.me/1.afa6b6fc.jpg" alt=""/>
  </div>
  <div className='h-auto flex justify-center items-start gap-6 sm:gap-15 flex-col w-full sm:w-[40vw]'>
    <p className='text-sm mt-5 sm:text-base font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
      Vikram Rana<br />Editions :
    </p>
    <img className='w-[60vw] sm:w-[25vw]' src="https://abhishekjha.me/4.5d1ff9af.png" alt="" />
  </div> 
</div>

{/* Row 2 of Playbook */}
<div className='flex flex-col sm:flex-row justify-between mb-12 items-center'>
  <div className='h-auto w-full mb-5 sm:w-[30vw]'>
    <img className='w-full sm:w-[20vw]' src="https://abhishekjha.me/8.e7203b6d.png" alt="" />
  </div>
  <div className='h-auto w-full mb-5 mr-20 sm:w-[30vw]'>
    <img className='w-full sm:w-[30vw]' src="https://abhishekjha.me/sotd.8efde214.png" alt="" />
  </div>
  <div className='h-auto w-full ml-5 sm:w-[30vw]'>
    <img className='w-full sm:w-[25vw]' src="https://abhishekjha.me/2.4aa03d90.png" alt="" />
  </div>
</div>

{/* Row 3 of Playbook */}
<div className='w-full'>
  <img className='w-[60vw] sm:w-[50vw] mx-auto mb-12' src="https://abhishekjha.me/1.7e400d6f.png" alt="" />
</div>

{/* Row 4 of Playbook */}
<div className='flex flex-col sm:flex-row mb-12'>
  <div className='h-auto w-full sm:w-[60vw]'>
    <img className='w-full sm:w-[45vw]' src="https://abhishekjha.me/5.6e39b8bc.png" alt="" />
  </div>
  <div className='h-auto flex justify-center items-start gap-6 sm:gap-15 flex-col w-full sm:w-[40vw]'>
    <p className='text-sm mt-4 sm:text-base font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
      Anand Singh Chauhan<br />Editions :
    </p>
    <img className='w-[60vw] sm:w-[25vw]' src="https://abhishekjha.me/9.964b0a84.png" alt="" />
  </div> 
</div>

{/* Row 5 of Playbook */}
<div className='flex flex-col sm:flex-row justify-between mb-10 items-center'>
  <div className='h-auto w-full mb-5 sm:w-[30vw]'>
    <img className='w-full sm:w-[20vw]' src="https://abhishekjha.me/hm.be70924b.png" alt="" />
  </div>
  <div className='h-auto w-full mb-5 mr-20 sm:w-[30vw]'>
    <img className='w-full sm:w-[30vw]' src="https://abhishekjha.me/3.a1d8f1e0.png" alt="" />
  </div>
  <div className='h-auto w-full ml-10 sm:w-[30vw]'>
    <img className='w-full sm:w-[25vw]' src="https://abhishekjha.me/10.437dbe48.png" alt="" />
  </div>
</div>
</div>

   {/* Our Founders section start */}
<div className='h-auto w-full px-8 sm:px-10 md:px-20 bg-[#D3D9D4]'>
  {/* Title and Subtitle */}
  <div className='flex flex-col sm:flex-row justify-between items-center px-4 sm:px-30 pb-16'>
    <p className='text-xl sm:text-4xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
      Our Founders
    </p>
    <p className='text-xl sm:text-2xl text-zinc-400 text-center'>
      An ambitious Quartet of <br />multi-Tech engineers
    </p>
  </div>

  {/* Founders Profiles */}
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-20 items-center'>
    {/* Founder 1 */}
    <div className='h-[60vh] w-full flex justify-center items-end pb-5 rounded-xl bg-center bg-cover bg-[url(https://res.cloudinary.com/dyvccryuz/image/upload/v1746259327/vikku_fi4q4j.jpg)] bg-zinc-100'>
      <div className='bg-white h-[40%] w-[80%] rounded-xl flex flex-col justify-center items-center'>
        <p className='text-xl sm:text-xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
          Vikram Rana
        </p>
        <p className='text-base text-zinc-400'>Establisher & CEO</p>
      </div>
    </div>

    {/* Founder 2 */}
    <div className='h-[60vh] w-full flex justify-center items-end pb-5 rounded-xl bg-center bg-cover bg-[url("https://res.cloudinary.com/dyvccryuz/image/upload/v1746259324/nandu_lfx39s.png")] bg-zinc-100'>
      <div className='bg-white h-[40%] w-[80%] rounded-xl flex flex-col justify-center items-center'>
        <p className='text-xl sm:text-xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
          Anand S. Chauhan
        </p>
        <p className='text-base text-zinc-400'>Founder & CEO</p>
      </div>
    </div>

    {/* Founder 3 */}
    <div className='h-[60vh] w-full flex justify-center items-end pb-5 rounded-xl bg-center bg-cover bg-[url("https://res.cloudinary.com/dyvccryuz/image/upload/v1746259326/raftaar_snsbk4.png")] bg-zinc-100'>
      <div className='bg-white h-[40%] w-[80%] rounded-xl flex flex-col justify-center items-center'>
        <p className='text-xl sm:text-xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
          Naitik Rajput
        </p>
        <p className='text-base text-zinc-400'>Chief Technology Officer</p>
      </div>
    </div>

    {/* Founder 4 */}
    <div className='h-[60vh] w-full flex justify-center items-end pb-5 rounded-xl bg-center bg-cover bg-[url("https://res.cloudinary.com/dyvccryuz/image/upload/v1746259326/Anku_so4got.jpg")] bg-zinc-100'>
      <div className='bg-white h-[40%] w-[80%] rounded-xl flex flex-col justify-center items-center'>
        <p className='text-xl sm:text-xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
          Ankesh Barhadiya
        </p>
        <p className='text-base text-zinc-400'>Chief Operations Officer</p>
      </div>
    </div>
  </div>

  {/* Spacer Div for Consistent Height */}
  <div className='h-auto w-full flex justify-between relative items-center'>
   <div className="w-[100vw] h-[50vh] md:min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white">

  {/* Responsive heading with background clipped text */}
  <p className="text-2xl sm:text-3xl md:text-4xl font-serif bg-bottom bg-cover bg-clip-text text-transparent text-center bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
    This Team
  </p>

  {/* Decorative border element (only on small screens and above) */}
  <div className="relative w-full flex justify-center">
  </div>

  {/* Spacer */}
  <div className="my-8"></div>

  {/* Description text */}
  <p className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] text-base sm:text-lg text-center font-serif text-zinc-600 px-2">
    We as an AVN team are dedicated to serve you the best in all aspects of technology — ensuring a seamless user experience and an impressive user interface/service.
  </p>
</div>

  </div>
</div>
{/* Our Founders section end */}

    </>
  )
}

export default About
