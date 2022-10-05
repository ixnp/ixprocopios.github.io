import '../styles/Navigation.scss';

function Navigation({onResumeClick, executeScroll, contactRef, aboutRef}) {

    return (
        <nav className="navigation">
            <ul>
                <li onClick={() => executeScroll(aboutRef)}>About</li>
                <li onClick={onResumeClick}>Straight to the Resume</li>
                <li onClick={() => executeScroll(contactRef)}>Contact</li>
            </ul>
        </nav>
    );
  }
  
  export default Navigation;
  