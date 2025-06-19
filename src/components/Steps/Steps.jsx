// import React from "react"
// import Heading from "../Heading/Heading"
import styles from "./steps.module.css"
import Step from "./Step/Step"
import StepsScroll from "./StepsScroll/StepsScroll"


const Steps = () => {
  return (
    <div className={styles.steps} id="steps">
            {/* <Heading text={"How it works"} count={1} />
            <Heading arabic={true} text={"الخطوات"} count={1} /> */}
            <StepsScroll />
            <div language="en">
              <Step   
                  count={1} 
                  title={"Start and Select"}
                  paragraph={"Artificial Intelligence (AI) is reshaping how we work and live, driving innovation, automation, and new possibilities across various sectors."}
                  isReversed={true}
                >
                      <dotlottie-player src="https://lottie.host/cbab1bf0-9443-4f8d-8fa7-46489702ba56/xVHiC3sM2T.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </Step>
              <Step   
                  count={2} 
                  title={"Transform ideas into Working projects"}
                  paragraph={"Artificial Intelligence (AI) is reshaping how we work and live, driving innovation, automation, and new possibilities across various sectors."}
                  isReversed={false}
                  >
                      <dotlottie-player src="https://lottie.host/051acd45-5049-4735-90bf-ea3a2e5960cc/zqNRyrzZi3.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
              </Step>
              <Step   
                  count={3} 
                  title={"Innovation and Success"}
                  paragraph={"Artificial Intelligence (AI) is reshaping how we work and live, driving innovation, automation, and new possibilities across various sectors."}
                  isReversed={true}
                >

                  <dotlottie-player src="https://lottie.host/2c82dcfe-91ea-459e-9234-e89a144c9004/NRQ8XkD7iA.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </Step>
              <Step   
                  count={4} 
                  title={"Artificial Inteelgence"}
                  paragraph={"Artificial Intelligence (AI) is reshaping how we work and live, driving innovation, automation, and new possibilities across various sectors."}
                  isReversed={false}
                >
                  <dotlottie-player src="https://lottie.host/16f8d9fa-73af-4878-ac23-d1c995a1019c/BEfqnbapdI.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </Step>
            </div>

            <div language="ar">
              <Step   
                count={5} 
                title={"اكتشف وحدد"}
                paragraph={"الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا"}
                isReversed={true}
                arabic={true}
              >
                  <dotlottie-player src="https://lottie.host/cbab1bf0-9443-4f8d-8fa7-46489702ba56/xVHiC3sM2T.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </Step>
              <Step   
                  count={6} 
                  title={"تحويل البيانات إلى أصل دائم"}
                  paragraph={"الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا"}
                  isReversed={false}
                  arabic={true}
                >
                  <dotlottie-player src="https://lottie.host/051acd45-5049-4735-90bf-ea3a2e5960cc/zqNRyrzZi3.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
              </Step>
              <Step   
                  count={7} 
                  title={"التكامل والنمو"}
                  paragraph={"الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا"}
                  isReversed={true}
                  arabic={true}
                >
                  <dotlottie-player src="https://lottie.host/2c82dcfe-91ea-459e-9234-e89a144c9004/NRQ8XkD7iA.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </Step>
              <Step   
                  count={8} 
                  title={"صياغة حلول الذكاء الاصطناعي"}
                  paragraph={"الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا"}
                  isReversed={false}
                  arabic={true}
                >
                  <dotlottie-player src="https://lottie.host/16f8d9fa-73af-4878-ac23-d1c995a1019c/BEfqnbapdI.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
              </Step>
            </div>

        {/* </div> */}
    </div>
  )
}

export default Steps