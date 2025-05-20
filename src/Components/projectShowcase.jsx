import React, { useState } from 'react';

const projects = [
  { id: 1, name: 'AVN AGENCY', image: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1100.png' },
  { id: 2, name: 'OCHI', image: 'https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1100.png' },
  { id: 3, name: 'SUNDOWN STUDIO', image: 'https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1100.png' },
  { id: 4, name: 'FAMILY GOLF CLUB', image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1100.png' },
  { id: 5, name: 'CUBERTO', image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1100.png' },
  { id: 6, name: 'TOO GOOD CO', image: 'https://ochi.design/wp-content/uploads/2022/05/10-1326x1100.png' },
  { id: 7, name: 'CYBERFICTION', image: 'https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1100.jpg' },
  { id: 8, name: 'APNITHALI', image: 'https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1100.jpg' },
];

const ProjectShowcase = () => {
  const [activeName, setActiveName] = useState('');
  const [activeRow, setActiveRow] = useState(null);

  const handleMouseEnter = (rowIndex, projectName) => {
    setActiveName(projectName);
    setActiveRow(rowIndex);
  };

  const handleMouseLeave = () => {
    setActiveName('');
    setActiveRow(null);
  };

  return (
    <div className="w-full bg-[#D3D9D4] py-10 px-4 md:px-5 lg:px-10">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative h-[70vh] sm:h-[90vh] w-full sm:w-[42vw] bg-cover bg-center rounded-xl overflow-hidden cursor-pointer"
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseEnter={() => handleMouseEnter(Math.floor(index / 2), project.name)} // Determine row index (0, 1, 2, etc.)
            onMouseLeave={handleMouseLeave}
          >
            {/* Hover effect for each div */}
          </div>
        ))}
      </div>

      {/* Display the project name for the active row */}
      {activeName && activeRow !== null && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <h1 className="text-2xl md:text-8xl w-[80vw] text-center font-serif font-bold bg-top bg-cover bg-clip-text text-transparent bg-[url('https://images.ctfassets.net/h6goo9gw1hh6/6prdYxODAmAJXYbHmZn8GI/cb1017a48a48e663a7b44791a85c2f17/Color-Scheme_PROFESSIONAL-2.jpg?w=1600&h=700&fl=progressive&q=70&fm=jpg')] animate-popFadeUp">
            {activeName}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
