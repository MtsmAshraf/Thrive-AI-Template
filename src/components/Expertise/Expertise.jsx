import Heading from "../Heading/Heading"
import styles from "./expertise.module.css"
import omaniGov from "../../assests/omani-gov.jpg"
import bussinessAi from "../../assests/bussiness-AI.jpg"
import brainAi from "../../assests/i-brain.jpg"
import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Expertise = () => {
  let [animateExpertise, setAnimateExpertise] = useState(false) 
    useEffect(() => {
        let expertiseSections = document.querySelector("#expertise")
        window.addEventListener("scroll", () => {
            if(window.scrollY >=  expertiseSections.offsetTop - 200){
                setAnimateExpertise(true)
            }else{
                setAnimateExpertise(false)
            }
        }) 
    },)
  return (
    <div id="expertise" className={animateExpertise ? styles.expertise + " " + styles.animate : styles.expertise}>
        <Heading text={"Our Expertise"}></Heading>
        <Heading arabic={true} text={"خبراتنا"}></Heading>
        {/* <div language="en" className={styles.parts}>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={omaniGov} alt="omani government" />
            </div>
            <div className={styles.text}>
              <h3>Government Solutions</h3>
              <p>
                Specializing in AI applications for public
                safety, healthcare, administrative automation, and more, to enhanc`e
                the efficiency and effectiveness of government operations in Oman.`
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={bussinessAi} alt="Business Innovation" />
            </div>
            <div className={styles.text}>
              <h3>Business Innovation</h3>
              <p>
                Assisting Omani businesses across sectors like
                finance, manufacturing, and retail to adopt AI technologies that drive
                growth, efficiency, and competitive advantage
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={brainAi} alt="Ethical AI" />
            </div>
            <div className={styles.text}>
              <h3>Ethical AI</h3>
              <p>
                Leading the conversation on responsible AI use in Oman,
                focusing on transparency, fairness, and privacy to ensure technology
                benefits society as a whole.
              </p>
            </div>
          </div>
        </div>

        <div language="ar" className={styles.parts}>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={omaniGov} alt="الحكومة العمانية" />
            </div>
            <div className={styles.text}>
              <h3>حلول الحكومة</h3>
              <p>
                متخصصون في تطبيقات الذكاء الاصطناعي للسلامة العامة، والرعاية الصحية، والتحول الإداري، وغيرها، لتعزيز الكفاءة والفعالية لعمليات الحكومة في عُمان.
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={bussinessAi} alt="ابتكار الأعمال" />
            </div>
            <div className={styles.text}>
              <h3>ابتكار الأعمال</h3>
              <p>
                مساعدة الشركات العُمانية في مجالات مثل التمويل والتصنيع والتجزئة على اعتماد تقنيات الذكاء الاصطناعي التي تعزز النمو والكفاءة والميزة التنافسية.
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={brainAi} alt="الذكاء الاصطناعي الأخلاقي" />
            </div>
            <div className={styles.text}>
              <h3>الذكاء الاصطناعي الأخلاقي</h3>
              <p>
                قيادة الحوار حول استخدام الذكاء الاصطناعي المسؤول في عُمان، مع التركيز على الشفافية والعدالة والخصوصية لضمان استفادة المجتمع بشكل عام من التكنولوجيا.
              </p>
            </div>
          </div>
        </div> */}

        <div language="en" className={styles.parts}>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={omaniGov} alt="omani government" />
            </div>
            <div className={styles.text}>
              <h3>General Solutions</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia atque hic quisquam doloribus repellat debitis, magni quod necessitatibus illo quas vitae tempora quae corrupti voluptatem et vero, odio voluptas.
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={bussinessAi} alt="Business Innovation" />
            </div>
            <div className={styles.text}>
              <h3>Business Solutions</h3>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia atque hic quisquam doloribus repellat debitis, magni quod necessitatibus illo quas vitae tempora quae corrupti voluptatem et vero, odio voluptas.
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={brainAi} alt="Ethical AI" />
            </div>
            <div className={styles.text}>
              <h3>Artificial intelligence</h3>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad mollitia atque hic quisquam doloribus repellat debitis, magni quod necessitatibus illo quas vitae tempora quae corrupti voluptatem et vero, odio voluptas.
              </p>
            </div>
          </div>
        </div>

        <div language="ar" className={styles.parts}>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={omaniGov} alt="الحكومة العمانية" />
            </div>
            <div className={styles.text}>
              <h3>حلول عامة</h3>
              <p>
                الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا.
            </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={bussinessAi} alt="ابتكار الأعمال" />
            </div>
            <div className={styles.text}>
              <h3>ابتكار الأعمال</h3>
              <p>
                الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا.
              </p>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.img}>
              <LazyLoadImage src={brainAi} alt="الذكاء الاصطناعي الأخلاقي" />
            </div>
            <div className={styles.text}>
              <h3>الذكاء الاصطناعي</h3>
              <p>
                الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا.
              </p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Expertise