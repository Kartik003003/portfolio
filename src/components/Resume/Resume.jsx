import React from 'react';
// import './Resume.css'; 

const Resume = () => {
    const resumeLink = "https://drive.google.com/file/d/1hgGRLSxsIjuNRDJLdj6XGsTquOavVwAC/view?usp=sharing";

    const viewResume = () => {
        window.open(resumeLink, '_blank'); 
    };

    return (
        <section id="resume"  className="resume-section bg-emerald-400 p-8 h-50 flex flex-col justify-center items-center">
            <h2 className=" resume-heading text-2xl font-bold">Resume</h2>
            <button onClick={viewResume} className="resume-button bg-purple-700 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-800">View Resume</button>
        </section>
    );
};

export default Resume;
