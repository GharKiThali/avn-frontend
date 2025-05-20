import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ProjectShowcase from '../Components/projectShowcase'
import CompanySection from '../Components/CompanySection'

const Services = () => {
  const headingRef = useRef(null)
  const paraRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animating the heading (fade-up)
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 }, // Initial state
        { 
          y: 0, // Final state
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      )

      // Animating the paragraph (fade-up)
      gsap.fromTo(
        paraRef.current,
        { y: 30, opacity: 0 }, // Initial state
        { 
          y: 0, // Final state
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
        }
      )
    })

    // Clean up GSAP inline styles when the component unmounts
    return () => ctx.revert()
  }, [])

  return (
    <>
     <div className='w-full bg-[#D3D9D4] pb-30 flex justify-center items-center flex-col relative min-h-screen md:h-[90vh] pt-24 md:pt-0'>

<h1
  ref={headingRef}
  className='text-3xl md:text-4xl lg:text-6xl font-serif mb-2 bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
  Our Work
</h1>

<hr className='h-1 rounded-full w-[50vw] md:w-[22vw] mb-10 bg-[#124e66]' />

<p ref={paraRef} className='w-[85vw] md:w-[70vw] text-center text-base sm:text-lg md:text-xl text-zinc-400 px-4'>
  Explore our diverse portfolio showcasing cutting-edge web development, innovative mobile apps, cloud solutions, and creative digital experiences tailored for modern businesses which helps you to grow and take your buseiness and art to the front of world, let them explore.
</p>

{/* ⬅️ 45° Rotated Line - Left */}
<div className='absolute top-[35rem] md:top-[26rem] left-10 h-20 w-20 border-r border-b border-[#124e66] hidden sm:flex items-center justify-center z-10'>
  <hr className='h-[1px] w-[6rem] absolute mt-3 ml-3 rotate-45 text-[#124e66]' />
</div>

{/* ➡️ Rotating Image + Text - Right */}
<div className="absolute top-[34.5rem] md:top-[25.5rem] right-10 w-[16vh] h-[16vh] hidden md:flex items-center justify-center z-10">
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

</div>

      {/* background video section */}
      <video loop muted autoPlay className='w-full' src="https://previews.customer.envatousercontent.com/h264-video-previews/5560d237-d009-424d-b849-9b12fe578676/34510445.mp4"></video>

     {/* project heading section */}
<div className="min-h-[60vh] w-full bg-[#D3D9D4] px-6 py-12 md:px-20 md:py-16 flex flex-wrap justify-between items-start relative gap-6 md:gap-0">

{/* Left Text */}
<p className='text-lg md:text-2xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
  Made with love
</p>

{/* 45° Line Decoration */}
<div className='absolute top-[8rem] left-6 md:left-20 h-20 w-20 border-r border-b border-[#124e66] hidden sm:flex items-center justify-center z-10'>
  <hr className='h-[1px] w-[6rem] absolute mt-3 ml-3 rotate-45 text-[#124e66]' />
</div>

{/* Main Paragraphs */}
<div className='w-full md:w-[50%] pr-5 mr-5 flex flex-col justify-center items-start'>
  <p className='text-base sm:text-lg text-zinc-500 leading-relaxed'>
    We passionately craft stunning websites, intuitive mobile apps, and powerful cloud solutions—combining creativity, innovation, and heartfelt dedication to deliver meaningful digital experiences that inspire, engage, and elevate your brand.
    <br /><br />
    From concept to execution, we turn bold ideas into functional digital realities—focusing on user experience, performance, and design that leaves a lasting impression.
  </p>
</div>
</div>
<ProjectShowcase/>
{/* Company slider section */}
<CompanySection/>

{/* sections last section */}
<div className='h-[60vh] flex justify-center bg-[#D3D9D4] relative  gap-4 items-center w-full pt-10'>
    <div className='h-full flex justify-start px-15 rounded-2xl py-8 items-end w-[40vw] bg-[#004D43]'>
      <p className='text-lg bg-transparent px-5 border-1 text-[#CDEA68] border-[#CDEA68] py-[3px] rounded-full'>2025</p>
      <p className='absolute text-5xl font-serif top-[47%] left-[20%] text-[#CDEA68]'>AVN</p>
    </div>
    <div className='h-full flex flex-col justify-center relative  px-15 rounded-2xl py-8 items-center w-[25vw] bg-black'>
      <img className='w-25' src="../src/assets/logowhite.png" alt="" />
      <p className='text-lg mt-55 mr-25 absolute bg-transparent px-5 border-1 text-white border-white py-[3px] rounded-full'>rate us 5.0</p>
    </div>
    <div className='h-full flex justify-center relative px-15 rounded-2xl bg-[#212121] py-8 items-center w-[25vw]'>
      <img className='w-25'  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <p className='text-lg mt-55 mr-25 absolute bg-transparent px-5 border-1 text-white border-white py-[3px] rounded-full'>best 2 U</p>
    </div>
</div>
    </>
  )
}

export default Services
