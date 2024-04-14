import React,{ useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import './splashScreen.css';
import footerlogo from '../../imgs/llatanlogo.png';
import llatanNombre from '../../imgs/LlatanNombre.png';
import mobileAqp from '../../imgs/aqp-night.png'; 
import aqparmas from '../../imgs/aqp-armas.png';


const SplashScreen = () => {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Cambia 768 al ancho deseado para móviles
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica el tamaño inicial al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="splash-screen">
            <img
            src={isMobile ? mobileAqp : aqparmas} 
            // src={aqparmas} 
            alt="Cargando" 
            className='full-screen-image' />


            <div className={`img-splash-container ${isMobile ? 'mobile-height' : ''}`}>
                <Fade top delay={500}>
                    <img src={footerlogo} className='img-splash' alt='img-splash' />
                </Fade>
            </div>
            <div className={`img-splash-container2 ${isMobile ? 'mobile-width' : ''}`}>
                <Fade bottom delay={500}>
                    <img src={llatanNombre} className={`img-splash2 ${isMobile ? 'mobile-width' : ''}`} alt='img-splash' />
                </Fade>
            </div>
        </div>
    )
}

export default SplashScreen