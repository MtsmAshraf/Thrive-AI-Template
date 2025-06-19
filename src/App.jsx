import './App.css';

// Components
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';




// Font Awesome
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, fas, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome ,faWhatsapp, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Steps from './components/Steps/Steps';
import Mission from './components/Mission/Mission';
import About from './components/About/About';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import Why from './components/Why/Why';
import { useSelector } from 'react-redux';
import { selectLanguage } from './store/languageSlice';
import Contact from './components/Contact/Contact';
import Loader from './components/Loader/Loader';
// import { toggleLoader } from './store/loaderSlice';
import { useEffect } from 'react';
import DeveloperFooter from './components/DeveloperFooter/DeveloperFooter';
import Footer from './components/Footer/Footer';

library.add(fas, faTwitter, faFontAwesome, faLinkedinIn,faFacebookF,faWhatsapp, faXmark, faBars)


function App() {
  // let loader = useSelector(selectLoader);
  // const dispatch = useDispatch()
  // const handleLoaderToggle = () => {
  //   dispatch(toggleLoader());
  // };
    // console.log("loaded", loader)
    useEffect(() => {
      setTimeout(() => {
          document.querySelector("#loader").setAttribute("animate","animate")
      }, 1000);
    })
  let language = useSelector(selectLanguage);
  return (
    <div className="App" language={language}>
        <Loader />
        <Header />
        <Hero />
        <Steps />
        <Expertise />
        <Services />
        <Why/>
        <Mission />
        <About />
        <Contact />
        <Footer />
        <DeveloperFooter />
    </div>
  );
}

export default App;
