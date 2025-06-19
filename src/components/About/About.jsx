import { useEffect, useState } from "react"
import Heading from "../Heading/Heading"
import Overlay from "../Overlay/Overlay"
import styles from "./About.module.css"

const About = () => {
  let [animateabout, setAnimateAbout] = useState(false) 
  useEffect(() => {
      let aboutSections = document.querySelector(`[name="about"]`)
      window.addEventListener("scroll", () => {
          if(window.scrollY >=  aboutSections.offsetTop -  500){
              setAnimateAbout(true)
          }else{
              setAnimateAbout(false)
          }
      }) 
  },)
  return (
    <div name="about" id="about" className={animateabout ? styles.about + " " + styles.animate : styles.about}>
        <Overlay dark={true}/>
        <div className="container">
              <Heading text={"About Us"} count={2}></Heading>
              <Heading arabic={true} text={"من نحن؟"} count={2}></Heading>
            <div className={styles.text} language="en">
              <p>
                  Thrive AI stands at the forefront of the artificial intelligence revolution
                  in Oman, committed to harnessing AI's transformative power across
                  both government and business sectors. 
              </p>
              <p>
                Our aim is to catalyze an AI driven economy, enhancing Oman's global competitiveness and
                improving the quality of life for its citizens. With a focus on innovation,
                ethical AI use, and capability building, Thrive AI is your trusted partner
                in navigating Oman's digital future.
              </p>
            </div>
            <div className={styles.text} language="ar">
              <p>
                  تقف Thrive AI في طليعة ثورة الذكاء الاصطناعي في عُمان، ملتزمة باستغلال قوة
                  الذكاء الاصطناعي التحويلية عبر كل من القطاعين الحكومي والتجاري.
              </p>
              <p>
                  هدفنا هو تحفيز اقتصاد يعتمد على الذكاء الاصطناعي، مما يعزز التنافسية العالمية لعُمان
                  ويحسن جودة الحياة لمواطنيها. مع التركيز على الابتكار واستخدام الذكاء الاصطناعي
                  بطريقة أخلاقية، وبناء القدرات، تعتبر Thrive AI شريكك الموثوق به في التوجيه نحو
                  مستقبل عمان الرقمي.
              </p>
            </div>
        </div>
    </div>
  )
}

export default About