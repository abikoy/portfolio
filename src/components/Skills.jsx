import html from '../assetes/html.png';
import css from '../assetes/css2.png';
import js from '../assetes/js1.png';
import react from '../assetes/react.png';
import './Skills.css';

const Skills = () => {
    const images = [

        { src: html, alt: 'HTML', text: 'HTML' },
        { src: css, alt: 'CSS', text: 'CSS' },
        { src: js, alt: 'JavaScript', text: 'JavaScript' },
        { src: react, alt: 'React', text: 'React' }
    ];

    return (
<div className='skills'>
    <div >
    <h1 className='exprience'>Experience</h1>
 <h3>I'm highly proficient in web development languages, including </h3> 

    </div>


    <div className='img'>

 
  
     {images.map((image, index) => (
        <div key={index}  className='skill-item'>
                <img src={image.src} alt={`image.alt}` } />
                <h2 className="skill-text">{image.text}</h2>

        </div>
            ))}  </div>
</div>    );
} 
 
export default Skills;