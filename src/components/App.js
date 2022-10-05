import { useRef } from 'react'
import Header from './Header';
import About from './About'
import Contact from './Contact'
import '../styles/App.scss';
import pdf from '../assets/Ix_Procopios_oct_2022.pdf'


function App() {
  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  const executeScroll = (ref) => ref.current.scrollIntoView() 
  //opens resume in new window
  const onResumeClick = () => {
    window.open(pdf)
  }
  return (
    <div className="App">
      <Header 
        aboutRef={aboutRef}
        contactRef={contactRef}  
        executeScroll={executeScroll} 
        onResumeClick={onResumeClick}/>
      <About aboutRef={aboutRef} onResumeClick={onResumeClick}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
