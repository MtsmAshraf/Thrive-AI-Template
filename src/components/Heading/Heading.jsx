import { useEffect, useState } from "react"
import styles from "./heading.module.css"
// import logoText from "../../assests/Thrive Ai-02-text.png"
const Heading = ({sText, text, count, arabic}) => {
  let [animateHeading, setAnimateHeading] = useState(false) 
  useEffect(() => {
      let stepSections = document.querySelector(`#heading-${count}`)
      window.addEventListener("scroll", () => {
          if(window.scrollY >=  stepSections.offsetTop -  400){
              setAnimateHeading(true)
          }else{
              setAnimateHeading(false)
          }
      }) 
  },)
  return (
    <div language={arabic ? "ar" : "en"} className={animateHeading ? styles.heading + " " + styles.animate : styles.heading} id={`heading-${count}`}>
        <div className="container">
          <div>
            <h2>
                {text}
            </h2>
          </div>
        </div>
    </div>
  )
}

export default Heading