import styles from "./header.module.css"
// import logo from "../../assests/Thrive Ai-01-cropped.png"
// import logoTextDark from "../../assests/Thrive Ai-04.png"
// import logoTextLight from "../../assests/Thrive Ai-01.png"
import logo from "../../assests/logoipsum-light.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../../store/themeSlice.js';
import { toggleLanguage } from "../../store/languageSlice.js";
// import { selectLoader } from "../../store/loaderSlice.js"

const Header = () => {
    // let loader = useSelector(selectLoader);
    let theme = useSelector(selectTheme);
    // let language = useSelector(selectLanguage);
    // if(window.localStorage.getItem("thrive-ai-mode")){
        //     theme = window.localStorage.getItem("thrive-ai-mode")
        // }
    const dispatch = useDispatch();
    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };
    const handleLanguageToggle = () => {
        dispatch(toggleLanguage());
    };
    let root = document.querySelector(":root")
    let [bgWhite,setBgWhite] = useState(false);

    useEffect(() => {
        // if(window.localStorage.getItem("thrive-ai-mode")){
        //     theme = window.localStorage.getItem("thrive-ai-mode")
        // }else{
        //     theme = "dark"
        // }
        window.addEventListener("scroll",() => {
            if(window.scrollY >= 85){
                setBgWhite(true);
            }else{
                setBgWhite(false);
            }
        })
        if(theme === "light"){
            root.style.setProperty("--main-bg-color","#fbfbfb")
            root.style.setProperty("--sec-bg-color","#ffffff")
            root.style.setProperty("--scroll-sec-bg-color","#ffffff9c")
            root.style.setProperty("--text-color","#0e191e")
            root.style.setProperty("--hovered-text-color", "#fbfbfb")
            root.style.setProperty("--main-shadow", "11px 0px 10px -3px #aaa")
            root.style.setProperty("--card-shadow", "0px 5pxx 10px -3px #aaa")      
            root.style.setProperty("--step-count", "#1d1d1d")
            root.style.setProperty("--step-count-animated", "#14141493")
            root.style.setProperty("--hero-p-text-color", "#1f2c6f")
            root.style.setProperty("--card-content-bg", "rgba(248, 248, 248, 0.73)")
            root.style.setProperty("--card-hover-shadow", "0px 5px 10px -3px var(--main-color)");
        }else if(theme === "dark"){
            root.style.setProperty("--main-bg-color","#0e191e")
            root.style.setProperty("--sec-bg-color","#0e191e")
            root.style.setProperty("--scroll-sec-bg-color","#red")
            root.style.setProperty("--text-color","#ffffff")
            root.style.setProperty("--main-shadow", "11px 0px 10px -3px #111")
            root.style.setProperty("--card-shadow", "0px 5pxx 10px -3px #111")
            root.style.setProperty("--hovered-text-color", "#fbfbfb")        
            root.style.setProperty("--step-count", "#ccc")
            root.style.setProperty("--step-count-animated", "#88888893")
            root.style.setProperty("--hero-p-text-color", "#ffffff")
            root.style.setProperty("--card-content-bg", "rgba(31, 30, 39, 0.73)")
            root.style.setProperty("--card-hover-shadow", "0px 5px 15px -10px var(--main-color)");
        }
    })
    let [showNav,SetShowNav] = useState(false);
    const showNavHandler = () => {
        if(showNav){
            SetShowNav(false);
        }else{
            SetShowNav(true);
        }
        console.log(showNav)
    }
  return (
    <header className={bgWhite ? styles.header + " " + styles.bgWhite : styles.header}>
        <a href="/" className={styles.logo}>
            <img src={logo} alt="logo" />
           
            {/* <img src={theme === "dark" ? logoTextDark : logoTextLight} alt="logo" /> */}
        </a>
        <div className={showNav ? styles.menuIcon + " " + styles.active : styles.menuIcon} onClick={() => {showNavHandler()}}>
            <span style={{opacity: showNav ? "0" : "1"}}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </span>
            <span style={{opacity: showNav ? "1" : "0"}}>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </span>
        </div>
        <nav language="en" className={showNav ? styles.active : "sdad"}>
            <a href="#home-en">
                <span>
                    Home
                </span>
            </a>
            <a href="#about">
                <span>
                    about
                </span>
            </a>
            <a href="#expertise">
                <span>
                    expertise
                </span>
            </a>
            <a href="#services">
                <span>
                    services
                </span>
            </a>
            <a href="#why-us">
                <span>
                    Why us?
                </span>
            </a>
            <a href="#contact">
                <span>
                    contact
                </span>
            </a>
            {/* <div className={styles.menuIcon}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div> */}
        </nav>
        <nav language="ar" className={showNav ? styles.active : "sdad"}>
            <a href="#home-ar">
                <span>
                    الرئيسية
                </span>
            </a>
            <a href="#about">
                <span>
                    من نحن؟
                </span>
            </a>
            <a href="#expertise">
                <span>
                    خبراتنا
                </span>
            </a>
            <a href="#services">
                <span>
                    الخدمات
                </span>
            </a>
            <a href="#why-us">
                <span>
                    لماذا نحن؟
                </span>
            </a>
            <a href="#contact">
                <span>
                    اتصل بنا
                </span>
            </a>
            {/* <div className={styles.menuIcon}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div> */}
        </nav>
        <div className={styles.cutomize}>
            <div onClick={handleThemeToggle} 
                className={theme === "dark" ? styles.changeTheme + " " + styles.dark : styles.changeTheme}>
                <span>
                    <FontAwesomeIcon icon="fa-solid fa-moon" />
                </span>
                <span>
                    <FontAwesomeIcon icon="fa-solid fa-sun" />
                </span>
            </div>
            <div 
                onClick={handleLanguageToggle}
                className={styles.changeLanguage}>
                <span language="en" name="change-lang-icon" style={{fontFamily:"'Tajawal"}}>
                    ع
                </span>
                <span language="ar" name="change-lang-icon" style={{fontFamily:"'Poppins"}}>
                    En
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header