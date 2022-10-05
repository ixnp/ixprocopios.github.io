import Navigation from "./Navigation";
import '../styles/Header.scss';

function Header({onResumeClick, executeScroll, contactRef, aboutRef}) {
    return (
      <div className="Header">
        <Navigation 
          aboutRef={aboutRef}
          contactRef={contactRef}  
          executeScroll={executeScroll} 
          onResumeClick={onResumeClick}/>
        <div className="banner">
          <div className="wrapper">
            <h1>Ixius Procopios</h1>
            <h2>Software Engineer</h2>
            <h2>Educator</h2>
            <h2>And little awkward</h2>
            <button><a href={`mailto:enprocopios@gmail.com?subject=""&body=""`}>Contact</a></button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  