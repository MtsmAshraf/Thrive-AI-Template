import { useEffect, useState } from "react"
import styles from "./hero-heading.module.css"
// import logoTextDark from "../../assests/Thrive Ai-04.png"
// import logoTextLight from "../../assests/Thrive Ai-01.png"
import logoTextDark from "../../assests/logoipsum-light.svg"
import logoTextLight from "../../assests/logoipsum-317.svg"
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";
import { LazyLoadImage } from "react-lazy-load-image-component"
const HearoHeading = ({sText, text}) => {
    let theme = useSelector(selectTheme);
    let [headingAnimate, setHeadingAnimate] = useState(false)
    // console.log("loaded")
    useEffect(() => {
      if(headingAnimate === false){
        setHeadingAnimate(true)
      }
    },[headingAnimate])
    
  return (
    <div className={headingAnimate ? styles.heading + " " + styles.animate : styles.heading}>
        <div className={styles.img}>
          <LazyLoadImage src={theme === "dark" ? logoTextDark : logoTextLight} alt="logo-text" />
          {/* <LazyLoadImage src={theme === "dark" ? logoTextDark : logoTextLight} alt="logo-text" /> */}
        </div>
        <h3 className={headingAnimate ? styles.animate : ""}>
          <span>
            {text}
          </span>
        </h3>
    </div>
  )
}

export default HearoHeading