import React from 'react';
import './home.css'; 

const Home = () => {
    return (
        <section id="home" className="home-section bg-black p-8 align-middle flex h-screen w-screen">
            <div className="flex-1 flex flex-col justify-center items-end">
                <h1 className="home-title text-white text-3xl font-bold">Welcome to My Portfolio</h1><br /><br /><br /><br />
                <h3 className='home-subtitle text-white text-2xl font-semibold'>Kartikeya Singh Thakur</h3><br />
                <h3 className='home-subtitle text-blue-400 text-2xl font-semibold'>From Chandrapur Maharashtra</h3><br />
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="Profile" className="profile-img w-64 h-64 object-cover" />
            </div>
        </section>
    );
};

export default Home;
