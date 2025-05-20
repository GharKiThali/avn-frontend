import React from 'react';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  'https://pngimg.com/uploads/intel/intel_PNG13.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png',
  'https://static.cdnlogo.com/logos/a/90/adobe.png',
  'https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.1070.png/1703060329053/nvidia-logo-vert.png'
];

const CompanySection = () => {
  return (
    <div className='h-auto w-full px-5 py-10 flex flex-col justify-center items-center border-t bg-[#D3D9D4]'>
      <p className='text-2xl font-serif bg-bottom bg-cover bg-clip-text text-transparent bg-[url("https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg")] mb-4'>
        Our Co-Companies
      </p>
      <p className='text-lg max-w-[90vw] md:w-[40vw] text-center text-zinc-400 mb-8'>
        We partner with people serious about making positive impact at income scale — with the vision and commitment to deliver it as quickly as possible.
      </p>

      <div className="w-[70vw] mx-auto overflow-hidden">
        <div className="slider flex gap-12 items-center animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="w-30 h-14 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySection;