// import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Heading from "../Heading/Heading"
import Overlay from "../Overlay/Overlay"
import styles from "./hero.module.css"
import { useEffect, useState } from "react"
import HearoHeading from "../HeroHeading/HearoHeading"

const Hero = () => {
  let [heroAnimate, setHeroAnimate] = useState(false)
    // console.log("loaded")
    useEffect(() => {
      if(heroAnimate === false){
        setHeroAnimate(true)
      }
    },[heroAnimate])
    
  return (
    <div>
      <div id="home-en" className={styles.hero} language="en">
        <Overlay />
        <a href="#steps" className={styles.scrollDownIcon}>
          <FontAwesomeIcon icon="fa-solid fa-circle-down" />
        </a>
        <div className="container">
            {/* <HearoHeading text={"Thrive Everyday"} /> */}
            <HearoHeading text={"AI Solutions"} />
            <div className={styles.intro}>
              <div className={styles.text}>
                <h2 className={heroAnimate ? styles.animate : ""}>Pioneering Artificial Intelligence</h2>
                {/* <h2 className={heroAnimate ? styles.animate : ""}>Pioneering Artificial Intelligence for Oman's Transformation</h2> */}
                {/* <div className={heroAnimate ? styles.btns + " " + styles.animate : styles.btns}>
                  <a href="#">Contact Us</a>
                  <a href="#">Discover</a>
                </div> */}
              </div>
              <div className={heroAnimate ? styles.img + " " + styles.animate : styles.img}>
              <dotlottie-player src="https://lottie.host/6f0a8743-08f5-4714-99c4-c9682867c14d/7FkvO1U7GH.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>                
              </div>
            </div>
        </div>
      </div>
      <div id="home-ar" className={styles.hero} language="ar">
      <Overlay />
      <a href="#steps" className={styles.scrollDownIcon}>
          <FontAwesomeIcon icon="fa-solid fa-circle-down" />
      </a>
      <div className="container">
          <HearoHeading text={"حلول الذكاء الاصطناعي"} />
          <div className={styles.intro}>
              <div className={styles.text}>
                  {/* <h2 className={heroAnimate ? styles.animate : ""}>الريادة في الذكاء الاصطناعي لتحويل عُمان</h2> */}
                  <h2 className={heroAnimate ? styles.animate : ""}>الريادة في الذكاء الاصطناعي</h2>
                  {/* <div className={heroAnimate ? styles.btns + " " + styles.animate : styles.btns}>
                      <a href="#">اتصل بنا</a>
                      <a href="#">المزيد</a>
                  </div> */}
              </div>
              <div className={heroAnimate ? styles.img + " " + styles.animate : styles.img}>
                  <dotlottie-player src="https://lottie.host/6f0a8743-08f5-4714-99c4-c9682867c14d/7FkvO1U7GH.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
              </div>
          </div>
      </div>
     </div>
    </div>

  )
}

export default Hero