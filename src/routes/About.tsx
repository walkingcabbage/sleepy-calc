import '../assets/styles/Home.css'
import GetStarted from '../components/GetStarted';
import AboutSection from '../components/AboutSection';

function About():JSX.Element{
return (
  <div className='about-wrap'>
    <GetStarted />
    <AboutSection />
  </div>
)
}

export default About;