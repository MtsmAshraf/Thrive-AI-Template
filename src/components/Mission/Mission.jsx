import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./mission.module.css"
import { useEffect, useState } from "react"
import Overlay from "../Overlay/Overlay"
const Mission = () => {
    let [h3Animate, setH3Animate] = useState(false)
    useEffect(() => {
        let missionsection = document.querySelector('[name="mission"]')
        window.addEventListener("scroll",() => {
            if(window.scrollY >=  missionsection.offsetTop - 600){
                setH3Animate(true)
            }else{
                setH3Animate(false)
            }
        })
    },)
  return (
    <div className={styles.mission} name="mission">
        <Overlay />
        <div className="container">
            <div language="en" className={styles.cards}>
                <div className={styles.card}>
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-eye" />
                    </div>
                    <h3 className={h3Animate ? styles.animate : ""}>Our Vision</h3>
                    {/* <span>
                        To pioneer the integration of artificial intelligence in Oman
                    </span> */}
                    <p className={h3Animate ? styles.animate : ""}>
                        To pioneer the integration of artificial intelligence in Oman, driving
                        transformative change across government and business sectors,
                        thereby catalyzing an AI-driven economy that enhances national
                        competitiveness, sustainability, and quality of life for all citizens.
                    </p>
                    {/* <p className={h3Animate ? styles.animate : ""}>
                        At SynthAI, our mission is to pioneer the evolution of human-technology symbiosis through cutting-edge artificial intelligence solutions. We are dedicated to crafting AI-driven innovations that transcend conventional boundaries.
                    </p> */}
                </div>
                <div className={styles.card}>
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-bullseye" />
                    </div>
                    <h3 className={h3Animate ? styles.animate : ""}>Our Mission</h3>
                    {/* <span>
                        Our mission at Thrive AI is to empower Oman's transition into a leading
                        digital economy through strategic AI solutions and consultancy.
                    </span> */}
                    <p className={h3Animate ? styles.animate : ""}>
                        Our mission at Thrive AI is to empower Oman's transition into a leading
                        digital economy through strategic AI solutions and consultancy. We are
                        committed to delivering excellence, building capabilities, driving ethical
                        AI, and creating impactful solutions that address critical challenges and
                        unlock new opportunities.
                    </p>
                    {/* <p className={h3Animate ? styles.animate : ""}>
                        At SynthAI, our mission is to pioneer the evolution of human-technology symbiosis through cutting-edge artificial intelligence solutions. We are dedicated to crafting AI-driven innovations that transcend conventional boundaries.
                    </p> */}
                </div>
            </div>

            <div language="ar" className={styles.cards}>
                <div className={styles.card}>
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-eye" />
                    </div>
                    <h3 className={h3Animate ? styles.animate : ""}>رؤيتنا</h3>
                    {/* محتوى الرؤية */}
                    <p className={h3Animate ? styles.animate : ""}>
                        نسعى إلى الريادة في دمج الذكاء الاصطناعي في عمان، محركين للتغيير الجذري
                        عبر القطاعات الحكومية والتجارية، مما يحفز على اقتصاد يعتمد على الذكاء
                        الاصطناعي يعزز التنافسية الوطنية والاستدامة وجودة الحياة لجميع المواطنين.
                    </p>
                    {/* <p className={h3Animate ? styles.animate : ""}>
                        نسعى إلى الريادة في دمج الذكاء الاصالوطنية والاستدامة وجودة الحياة لجميع المواطنين.
                    </p> */}
                </div>
                <div className={styles.card}>
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-bullseye" />
                    </div>
                    <h3 className={h3Animate ? styles.animate : ""}>مهمتنا</h3>
                    {/* محتوى المهمة */}
                    <p className={h3Animate ? styles.animate : ""}>
                        مهمتنا في Thrive AI هي تمكين انتقال عمان إلى اقتصاد رقمي رائد من خلال
                        حلول واستشارات استراتيجية للذكاء الاصطناعي. نحن ملتزمون بتقديم التميز،
                        وبناء القدرات، ودفع الذكاء الاصطناعي الأخلاقي، وخلق حلول ذات تأثير تعالج
                        التحديات الحرجة وتفتح آفاقًا جديدة.
                    </p>
                    {/* <p className={h3Animate ? styles.animate : ""}>
                        مهمتنا في ، وخلق حلول ذات تأثير تعالج
                        التحديات الحرجة وتفتح آفاقًا جديدة.
                    </p> */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Mission