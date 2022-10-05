import '../styles/Contact.scss';

function Contact({contactRef}) {

    return (
      <div ref={contactRef} className="Contact">
        <h1>Contact</h1>
        <h2><span class="material-symbols-outlined">call</span>425-231-7962</h2>
        <h2 ><a href={`mailto:enprocopios@gmail.com?subject=""&body=""`}><span class="material-symbols-outlined">mail</span>enprocopios@gmail.com</a></h2>
        <h2><a href="linkedin.com/in/ix-procopios/">LinkedIn</a></h2>
      </div>
    );
  }
  
  export default Contact;
  