import {technologies} from '../data/data.js'
import compTiaA from '../assets/comptia-a-ce-certification.1.png'
import compTiaProject from '../assets/comptia-project-certification.1.png'
import '../styles/About.scss'
function About({onResumeClick, aboutRef}) {
   
 
    const renderTechnologies = () => technologies.map(item => {
        if(item=='and more...'){
            return <div class="technologies-element" onClick={onResumeClick}>{item}</div>
        }else {
            return <div class="technologies-element">{item}</div>
        }
    })
    return (
    <div ref={aboutRef}>
        <div className='badges'>
        <a href="https://www.credly.com/badges/4b817425-3795-46d4-928f-19553bf3a199/public_url"><img className="badge-img" src={compTiaA}/></a>
  
        <a href="https://www.credly.com/badges/a914bf02-e740-4d33-946e-467c501597be/public_url"><img className="badge-img" src={compTiaProject}/></a>
        </div>
        
        <article className="About">
            <h1>Hello there!</h1>
            <p>
                I'm Software engineer with a passion for learning and teaching. Over the last four years, I've spread my love of programming by educating career changers through hundreds of hours of live lectures, demos, workshops, and videos. My time with students has made me a fantastic communicator and leader. At the same time, my passion for programming provided me with the skill set to build full-stack applications in several languages and frameworks. 
            </p>
            <p>
                I got into software development as a career changer, pivoting from a career in the video game industry as technical support to software engineering. My programming journey started at a coding Bootcamp in which I gained my first certification in full-stack development. Other certifications would later follow. I continued to pursue my love of learning by continuing school part-time to earn a bachelor of science in software development.  
            </p>
            <h1>What do I know?</h1>
            <div className="about-technologies">
                {renderTechnologies()}</div>
        </article>
    </div>
    );
  }
  
  export default About;
  