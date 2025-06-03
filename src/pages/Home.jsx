import React, { useEffect, useRef } from 'react'
import Magnetic from '../Components/Magnetic'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BendingHR from '../Components/BendingHR'
import FeedbackSlider from '../Components/FeedbackSlider'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroHeadingRef = useRef(null)
  const heroHRRef = useRef(null)
  const heroParagraphRef = useRef(null)
  const challengeRef = useRef(null)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      heroHeadingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.fromTo(
      heroHRRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroHRRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.fromTo(
      heroParagraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroParagraphRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    const paragraphs = challengeRef.current.querySelectorAll('p')
    paragraphs.forEach((p, i) => {
      gsap.fromTo(
        p,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: p,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    const section = sectionRef.current
    const container = containerRef.current
    const totalScrollWidth = container.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollLength = totalScrollWidth - viewportWidth

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 30vh',
          end: () => `+=${scrollLength}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })  
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div className='bg-[#D3D9D4] overflow-x-hidden'>
      <div className="min-h-[100vh] flex flex-col md:flex-row justify-center items-center px-6 md:px-20 w-full font-serif relative overflow-hidden gap-6 md:gap-12">
        <div className="flex flex-col items-start gap-4 z-10 pt-20 text-center md:text-left w-full md:w-1/2">
          <h1
            ref={heroHeadingRef}
            className='text-[10vw] md:text-[5vw] tracking-wider leading-tight bg-top bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
            Let's Build<br /> Something New
          </h1>
          <hr ref={heroHRRef} className='h-1 rounded-full w-[40vw] mb-15 bg-[#124e66]' />

          <div className='flex justify-center md:justify-start items-center gap-4'>
            {['instagram', 'facebook', 'youtube', 'github'].map((icon, idx) => (
              <Magnetic key={idx} strength={1}>
                <i className={`text-xl md:text-2xl text-[#124E66] hover:text-zinc-600 border border-[#124e66] px-3.5 py-3 rounded-full fa-brands fa-square-${icon}`}></i>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="hidden md:block ml-20 w-[1px] h-56 bg-[#124E66]"></div>

        <div className="w-full md:w-1/2 text-center md:text-right z-10">
          <p
            ref={heroParagraphRef}
            className="text-[4vw] md:text-[1.2vw] text-[#124E66] leading-relaxed">
            Innovative solutions for a digital world.<br />
            We design, build, and deliver custom websites with <br />
            a perfect blend of style, functionality, and performance.
          </p>
        </div>

          <div className="absolute bottom-6 right-6 w-[16vh] h-[16vh] hidden md:flex items-center justify-center">
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

      {/* Background Video */}
      <video autoPlay muted loop className="w-full h-auto">
        <source src="https://cuberto.com/assets/showreel/short.mp4" type="video/mp4" />
      </video>

      {/* Challenge Section */}
      <div
        ref={challengeRef}
        className="h-auto min-h-[60vh] flex flex-col md:flex-row justify-around w-full text-xl text-[#394d55] font-serif bg-[#D3D9D4] px-6 md:p-20 gap-10"
      >
        <div>
          <p className='text-3xl md:text-4xl mb-10 bg-top bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
            The Challenge
          </p>
          <div className='h-15 w-15 border-r-1 flex relative items-center border-b-1 border-[#124e66]'>
            <hr className='h-.5 w-17.5 absolute mt-3  rotate-45' />
          </div>
        </div>

        <div className="w-full md:w-[40vw] text-base leading-7">
          <p>
            At <strong>AVN Agency</strong>, we specialize in crafting sleek UI/UX designs, robust website development, scalable mobile applications, and dependable cloud space solutions—all under one digital roof.
          </p>
          <br />
          <p>That question led us here.</p>
          <p>
            Our platform makes it effortless for brands, creators, and businesses to step confidently into the digital world.
          </p>
        </div>
      </div>
      <div>
        <BendingHR/>
      </div>

     {/* Our Services Section */}
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
    Our Services <span className="text-sm sm:text-base font-mono">(06)</span>
  </h1>
</div>


      {/* Horizontal Scroll Section */}
<div ref={sectionRef} className="w-full h-[80vh] overflow-hidden bg-[#D3D9D4] relative">
  <div
    ref={containerRef}
    className="flex gap-6 h-[80vh] items-center px-4 sm:px-6 md:px-8 lg:px-12 w-max"
  >
    {/* Slide 1: Image */}
    <div className="w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw] h-full flex flex-col px-6 sm:px-8 justify-center items-center rounded-xl">
      <h1 className="text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[3vw] font-serif leading-14 mb-6 text-center bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
        The Most Stunning<br />website's collection
      </h1>
      <p className="text-xl text-center text-[#565656] break-words font-serif w-full">
        We work hard to make your dream website by focusing on your needs and giving a proper stunning look and services.
      </p>
    </div>

    {/* Slide 2: Text content */}
    <div className="min-w-[50vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[30vw] h-full rounded-xl bg-cover bg-center bg-[url('https://cuberto.com/assets/projects/cisco/cover@2x.jpg')] shadow-md flex items-end justify-center p-6">
      <div className="h-[40%] w-[80%] flex flex-col px-8 items-center justify-center bg-white rounded-2xl">
        <h1 className="text-3xl mb-4 bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
          Web Development
        </h1>
        <p className="text-center text-xl text-[#565656]">Crafting powerful, SEO-friendly websites.</p>
      </div>
    </div>

    {/* Slide 3: Mixed Content */}
    <div className="min-w-[50vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[30vw] h-full rounded-xl bg-cover bg-center bg-[url('https://cuberto.com/assets/projects/zelt/cover@2x.jpg')] shadow-md flex items-end justify-center p-6">
      <div className="h-[40%] w-[80%] flex flex-col px-8 items-center justify-center bg-white rounded-2xl">
        <h1 className="text-3xl mb-4 bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
          UI/UX Design
        </h1>
        <p className="text-center text-xl text-[#565656]">Crafting seamless and intuitive user experiences.</p>
      </div>
    </div>

    {/* Slide 4: Image */}
    <div className="min-w-[60vw] sm:min-w-[50vw] md:min-w-[45vw] lg:min-w-[40vw] h-full rounded-xl bg-cover bg-center bg-[url('https://cuberto.com/assets/projects/qvino/cover@2x.jpg')] shadow-md flex items-end justify-center p-6">
      <div className="h-[40%] w-[80%] flex flex-col px-8 items-center justify-center bg-white rounded-2xl">
        <h1 className="text-3xl mb-4 bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
          Android Development
        </h1>
        <p className="text-center text-xl text-[#565656]">Scalable Android apps with smooth, modern UI</p>
      </div>
    </div>

    {/* Slide 5: Paragraph only */}
    <div className="min-w-[50vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[30vw] h-full rounded-xl bg-cover bg-center bg-[url('https://cuberto.com/assets/projects/genesis/cover@2x.jpg')] shadow-md flex items-end justify-center p-6">
      <div className="h-[40%] w-[80%] flex flex-col px-8 items-center justify-center bg-white rounded-2xl">
        <h1 className="text-3xl mb-4 bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
          Cloud Services
        </h1>
        <p className="text-center text-xl text-[#565656]">Reliable cloud hosting for seamless scalability</p>
      </div>
    </div>

    {/* Slide 6: Paragraph only */}
    <div className="min-w-[50vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[30vw] h-full rounded-xl bg-cover bg-center bg-[url('https://cuberto.com/assets/projects/euroauto/cover@2x.jpg')] shadow-md flex items-end justify-center p-6">
      <div className="h-[40%] w-[80%] flex flex-col px-8 items-center justify-center bg-white rounded-2xl">
        <h1 className="text-3xl mb-4 bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
          Branding Design
        </h1>
        <p className="text-center text-xl text-[#565656]">Logo, typography, brand guidelines, etc</p>
      </div>
    </div>

    {/* Slide 7: Paragraph only */}
    <div className="min-w-[50vw] sm:min-w-[45vw] md:min-w-[35vw] lg:min-w-[30vw] h-full rounded-xl bg-cover bg-center bg-[url('https://cuberto.com/assets/projects/monmarche/cover@2x.jpg')] shadow-md flex items-end justify-center p-6">
      <div className="h-[40%] w-[80%] flex flex-col px-8 items-center justify-center bg-white rounded-2xl">
        <h1 className="text-3xl mb-4 bg-top bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')]">
          E-commerce Sites
        </h1>
        <p className="text-center text-xl text-[#565656]">Shopify, WooCommerce, custom e-commerce platforms.</p>
      </div>
    </div>
  </div>
</div>


   {/* Community section start */}
<div
  ref={challengeRef}
  className="h-auto min-h-[80vh] flex flex-col mt-10 md:flex-row justify-around w-full text-xl text-[#394d55] font-serif bg-[#D3D9D4] px-6 md:p-20 gap-10"
>
  <div className="text-center md:text-left">
    <p className='text-3xl md:text-4xl mb-10 bg-top bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
      Community Which<br/>Works Effortlessly
    </p>
    <div className='h-15 w-15 border-r-1 flex relative items-center border-b-1 border-[#124e66] mx-auto md:mx-0'>
      <hr className='h-.5 w-17.5 absolute mt-3  rotate-45' />
    </div>
  </div>

  <div className="w-full md:w-[40vw] text-base leading-7">
    <p className='mb-3'>
       <strong>AVN Agency, </strong>an community that works effortlessly is one where collaboration flows naturally, and every member contributes with a shared sense of purpose. It thrives on mutual respect, open communication, and a commitment to collective growth. In such a space, ideas are freely exchanged, challenges are faced together, and victories are celebrated as a team. There’s no need for rigid structures—everyone knows their role and supports one another organically. This harmony allows the community to grow stronger, adapt faster, and achieve more, making it not just efficient, but truly empowering for every individual involved.<br/>
    </p>
    <p>In such a community, progress feels smooth and organic. Each member’s effort adds value, creating a space where ideas flow freely and everyone feels heard.</p>
    <br />
  </div>
</div>

    {/* Collaborate with Company section */}
<div className='h-auto min-h-[100vh] mb-10 w-full px-6 md:px-20 py-10'>
  <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif mb-10 bg-top bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
    We Work With <br /> Many Companies.
  </h1>
  <div className='h-[75vh] w-full'>
    {/* Grid layout for logos */}
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/raiffeisen.svg" alt="Raiffeisen" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/cisco.svg" alt="Cisco" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/mapbox.svg" alt="Mapbox" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/spark.svg" alt="Spark" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/tradingview.svg" alt="Tradingview" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/tinkoff.svg" alt="Tinkoff" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/yandex.svg" alt="Yandex" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/etihad.svg" alt="Etihad" />
      <img className='w-full h-auto' src="https://cuberto.com/assets/about/partners/etihad.svg" alt="Etihad" />
    </div>
  </div>
</div>

  {/* Feedback section start */}
  <FeedbackSlider/>

  {/* India section start */}
<div className="h-auto md:h-[120vh] rounded-4xl w-full md:w-[80vw] py-10 sm:py-20 px-5 sm:px-20 bg-center bg-cover m-auto bg-[url('https://cdn.prod.website-files.com/65cebd17c70b035a9f4dea65/67093242ebeec92d072412f7_MZT_Alpha-DS_1-p-2000.jpg')]">
  {/* India Title */}
  <p className='text-xl sm:text-3xl md:text-lg font-serif mb-5 sm:mb-10 px-5 py-1.5 rounded-full bg-white w-fit tracking-wider text-[#124e66]'>
    India
  </p>
  
  {/* Main Heading */}
  <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-base font-serif mb-5 sm:mb-10 bg-top bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")]'>
    Avn Tech
  </h1>
  
  {/* Subheading */}
  <p className='text-2xl sm:text-4xl font-semibold text-zinc-400 mb-2'>
    Creating Technology
  </p>
  <p className='text-xl text-zinc-400 mb-15'>
    "Revolutionizing the tech world through innovation,<br/> creativity, and purposeful user-friendly design."
  </p>
  
  {/* Stats Section */}
  <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
    {/* First Stat Box */}
    <div className='h-40 sm:h-45 flex justify-center items-center flex-col bg-white rounded-xl sm:rounded-l-2xl w-full sm:w-65'>
      <h1 className='text-4xl sm:text-5xl mb-3'>45+</h1>
      <p className='text-xl'>Annual Projects</p>
    </div>
    
    {/* Second Stat Box */}
    <div className='h-40 sm:h-45 flex justify-center items-center flex-col bg-white rounded-xl sm:rounded-r-2xl w-full sm:w-65'>
      <h1 className='text-4xl sm:text-5xl mb-3'>2025</h1>
      <p className='text-xl'>Launching New Themes</p>
    </div>
  </div>
</div>
{/* India section end */}

   </div>
    </>
  )
}

export default Home


