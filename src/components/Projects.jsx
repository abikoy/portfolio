import React from 'react';
import project1 from '../assetes/wetat.jpg';
import project2 from '../assetes/all.jpg';
import project3 from '../assetes/jeremy.jpg';

import './Projects.css';

const Projects = () => {
    const images = [
        {
            src: project1,
            title: "Wetat meznagna",
            description: " is a dynamic movie exploration platform designed to connect users with a world of films. "
        },
        {
            src: project2,
            title: "All mert",
            description: "is a comprehensive ecommerce platform designed to simplify shopping and enhance the user experience. "
        },
        {
            src: project3,
            title: "Project Title 3",
            description: "Description for project 3."
        }
    ];

    return (
        <div className="projects">
            <h1 className='title'>Sample of Projects</h1>
            <div className="gallery">
                {images.map((image, index) => (
                    <div key={index} className="pro">
                        <img src={image.src} alt={`imageOf ${index}`} />
                        <div className="project-info">
                            <h4 className="cod3">{image.title}</h4>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
