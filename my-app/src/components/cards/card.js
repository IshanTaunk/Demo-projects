import './Card.css';
import profile from '../../assets/profile.jpg';

const Card = ()=>{
 return(
    <div className="card" >
        <div className='image'>
            <img src={profile} alt='Profile'></img>
        </div>
        <div className="name">Ishan Taunk</div>
        <div className="position">Front End Developer</div>
        <div className='social-links'>
            <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://in.linkedin.com/in/ishan-taunk-726b0119b"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <div className='bio'>
        I am an individual driven by creativity, innovation and passion, thriving for success through a continuous passion for learning and self development.
        </div>
    </div>
 )
}

export default Card;