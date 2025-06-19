import { useEffect } from "react"
import Heading from "../Heading/Heading"
import styles from "./services.module.css"

const Services = () => {
   useEffect(() => {
        const handleOnMouseMove = (e) => {
            const {currentTarget: target} = e;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            target.style.setProperty("--mouse-x",`${x}px`)
            target.style.setProperty("--mouse-y",`${y}px`)
            // target.style.setProperty("--mouse-x-deg",`${-1 * ((1/10) * x - 10)}deg`)
            // target.style.setProperty("--mouse-y-deg",`${1 * ((1/10) * y - 10)}deg`)
        }
        
        
        document.querySelectorAll('[name="services-card"]').forEach((card) => {
            card.onmousemove = (e) => {
                handleOnMouseMove(e);
            }
        })
   },[])
  return (
    <div id="services" className={styles.services}>
        <div className="container">
            <Heading sText={true} text={"Our Services"} count={3}></Heading>
            <Heading arabic={true} sText={true} text={"خدمانتا"} count={3}></Heading>
            
            <div language="en" className={styles.cards}>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/585452f3-aa83-46be-85a8-29db19901dd6/ObAZV9IMOg.json" background="transparent" speed="3" loop autoplay></dotlottie-player>
                        </span>
                        <h3>AI Strategy and Consultancy</h3>
                        <p>
                            Providing expert advice on AI
                            implementation, optimization, and strategy development tailored to the
                            unique needs of government and businesses in Oman.
                        </p>
                    </div>
                </div> 
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/b5d62c1d-dd20-4c76-ac15-a96fe0fe8746/hXXuSctsMr.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>Custom AI Solutions</h3>
                        <p>
                            Developing and deploying bespoke AI applications
                            designed to meet the specific challenges and objectives of our Omani
                            clients.
                        </p>
                    </div>
                </div> 
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/6b5e72a3-6732-424b-ace2-4ce14411941e/MiEgcSw21O.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
                        </span>
                        <h3>AI Products and Tools</h3>
                        <p>
                            Offering a suite of AI products and tools that
                            enhance operational efficiency, decision-making, and innovation within the
                            Omani context.
                        </p>
                    </div>
                </div> 
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/764f198f-ccf1-41e1-9a58-a0710aacd47d/OHVHZmeTqY.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>Capability Building</h3>
                        <p>
                            Conducting workshops, courses, and training programs
                            to equip the Omani workforce with essential AI skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>
            <div language="ar" className={styles.cards}>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/585452f3-aa83-46be-85a8-29db19901dd6/ObAZV9IMOg.json" background="transparent" speed="3" loop autoplay></dotlottie-player>
                        </span>
                        <h3>استراتيجية الذكاء الاصطناعي والاستشارات</h3>
                        <p>
                            تقديم النصائح الخبيرة حول تنفيذ الذكاء الاصطناعي، وتحسينه، وتطوير الاستراتيجية بما يتناسب مع احتياجات الحكومة والشركات في عمان.
                        </p>
                    </div>
                </div>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/b5d62c1d-dd20-4c76-ac15-a96fe0fe8746/hXXuSctsMr.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>حلول الذكاء الاصطناعي المخصصة</h3>
                        <p>
                            تطوير ونشر تطبيقات الذكاء الاصطناعي المخصصة مصممة لتلبية التحديات والأهداف الخاصة لعملائنا العمانيين.
                        </p>
                    </div>
                </div>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/6b5e72a3-6732-424b-ace2-4ce14411941e/MiEgcSw21O.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
                        </span>
                        <h3>منتجات وأدوات الذكاء الاصطناعي</h3>
                        <p>
                            تقديم مجموعة من المنتجات والأدوات الذكاء الاصطناعي التي تعزز الكفاءة التشغيلية واتخاذ القرار والابتكار في سياق عُمان.
                        </p>
                    </div>
                </div>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/764f198f-ccf1-41e1-9a58-a0710aacd47d/OHVHZmeTqY.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>بناء القدرات</h3>
                        <p>
                            إجراء ورش عمل ودورات وبرامج تدريبية لتزويد القوى العاملة العمانية بالمهارات والمعرفة الأساسية في مجال الذكاء الاصطناعي.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div language="en" className={styles.cards}>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/585452f3-aa83-46be-85a8-29db19901dd6/ObAZV9IMOg.json" background="transparent" speed="3" loop autoplay></dotlottie-player>
                        </span>
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestias voluptatem, ea porro harum a rem! Quidem temporibus cumque 
                            laudantium at numquam ut
                        </p>
                    </div>
                </div> 
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/b5d62c1d-dd20-4c76-ac15-a96fe0fe8746/hXXuSctsMr.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>AI Solutions</h3>
                        <p>
                            Artificial Intelligence (AI) continues to revolutionize industries, enhancing efficiency, decision-making, and enabling breakthroughs in areas like healthcare, finance, and transportation.
                        </p>
                    </div>
                </div> 
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/6b5e72a3-6732-424b-ace2-4ce14411941e/MiEgcSw21O.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
                        </span>
                        <h3>AI Products and Tools</h3>
                        <p>
                            Artificial Intelligence (AI) is reshaping how we work and live, driving innovation, automation, and new possibilities across various sectors.
                        </p>
                    </div>
                </div> 
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/764f198f-ccf1-41e1-9a58-a0710aacd47d/OHVHZmeTqY.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Artificial Intelligence (AI) empowers machines to learn, reason, and perform tasks, leading to advancements in technology and reshaping society.
                        </p>
                    </div>
                </div>
            </div>
            <div language="ar" className={styles.cards}>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/585452f3-aa83-46be-85a8-29db19901dd6/ObAZV9IMOg.json" background="transparent" speed="3" loop autoplay></dotlottie-player>
                        </span>
                        <h3>استراتيجية الذكاء الاصطناعي</h3>
                        <p>
                            الذكاء الاصطناعي يمكّن الآلات من التعلم والاستدلال وأداء المهام، مما يؤدي إلى تقدم التكنولوجيا وإعادة تشكيل المجتمع.
                        </p>
                    </div>
                </div>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/b5d62c1d-dd20-4c76-ac15-a96fe0fe8746/hXXuSctsMr.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>حلول الذكاء الاصطناعي</h3>
                        <p>
                            الذكاء الاصطناعي يعزز قدرة الآلات على التعلم والتفكير، مما يسهم في تطوير التكنولوجيا وتحويل الحياة اليومية.
                        </p>
                    </div>
                </div>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/6b5e72a3-6732-424b-ace2-4ce14411941e/MiEgcSw21O.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
                        </span>
                        <h3>الذكاء الاصطناعي</h3>
                        <p>
                            تقنية الذكاء الاصطناعي تسهم في تحسين أداء الآلات واتخاذ القرارات، وهي تغيّر من طبيعة التفاعل بين البشر والتكنولوجيا.
                        </p>
                    </div>
                </div>
                <div name="services-card" className={styles.card}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            <dotlottie-player src="https://lottie.host/764f198f-ccf1-41e1-9a58-a0710aacd47d/OHVHZmeTqY.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </span>
                        <h3>بناء القدرات</h3>
                        <p>
                            الذكاء الاصطناعي يدفع بالتقنية إلى مستويات جديدة، يمكّن الآلات من التعلم والتفكير، ويغيّر طريقة تفاعلنا مع التكنولوجيا.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Services