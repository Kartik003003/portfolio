import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Portfolio</div>
      <div className="flex space-x-4">
        <a href="#home" className="nav-link hover:text-yellow-300">Home</a>
        <a href="#about" className="nav-link hover:text-yellow-300">About</a>
        <a href="#projects" className="nav-link hover:text-yellow-300">Projects</a>
        <a href="#resume" className="nav-link hover:text-yellow-300">Resume</a>
      </div>
      <a href="https://github.com/your-profile" className="nav-link hover:text-yellow-300">GitHub Profile</a>
    </nav>
  );
};

export default Navbar;
