import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="project-section bg-black h-screen p-8">
            <h2 className="project-title text-white text-2xl font-bold">Projects</h2>
            <div className="my-4 text-white">
                <h3 className="text-lg font-bold">Employee API System</h3>
                <p>Implemented CRUD operations using Spring MVC where it performs insert, update, delete, and fetch all records from the database.</p>
                <a href="https://github.com/Kartik003003/EmployeeAPI" className="project-link text-blue-500 hover:underline">GitHub Repository</a>
            </div>
            <div className="my-4 text-white">
                <h3 className="text-lg font-bold">Business Dashboard</h3>
                <p>In this project, users can easily understand the business with the help of graphical representation in React.js.</p>
                <a href="https://github.com/Kartik003003/Dashboard" className="project-link text-blue-500 hover:underline">GitHub Repository</a>
            </div>
        </section>
    );
};

export default Projects;
