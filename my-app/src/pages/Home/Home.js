import "./Home.css";
import atlas from "../../assets/atlas.jpg";
import inst from "../../assets/inst.png";
import contact from "../../assets/contact.jpg";

const Home=()=>{
    return <>
    <div className="about-me">
        <div className="about-me-text">
            <div className="about-me-text-header">Hi, I am Ishan Taunk</div> 
            <div>I am an individual driven by creativity, innovation and passion, thriving for success through a continuous passion for learning and self development.</div>
            <div>As a Frontend Web Developer I specialise in creating functional and beautiful websites and web applications that are optimised for user experience. My expertise lies in HTML, CSS, JavaScript, Angular and React.</div> 
        </div>
        <div className="atlas-image">
            <img src={atlas} className="atlas-image-pic" alt="atlas.jpg"></img>
        </div>
    </div>
    <div className="work-experience">
        <div className="work-experience-image">
            <img  className="inst-image" src={inst} alt="inst.png"></img>
        </div>
        <div className="work-experience-timeline">
            <div className="about-me-text-header">Work</div>
            <h3>AIDETIC (2020-2022)</h3>
            <p>Worked as a frontend devloper</p>
            <h3>Quantum (2022-Present)</h3>
            <p>Worked as a frontend devloper</p>
        </div>
    </div>
    <div className="about-me">
        <div className="about-me-text">
            <div className="about-me-text-header">Contact</div> 
            <p><strong>Phone:</strong> +91-9080975271</p>
            <p><strong>Email:</strong> ishan.taunk444@gmail.com</p>
            <p><strong>Github:</strong> https://github.com/IshanTaunk</p>
        </div>
        <div className="atlas-image">
            <img src={contact} className="contact-image-pic" alt="atlas.jpg"></img>
        </div>
    </div>
    </>
}

export default Home;