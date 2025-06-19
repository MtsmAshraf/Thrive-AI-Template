import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Heading from "../Heading/Heading"
import styles from "./contact.module.css"
import { useSelector } from "react-redux"
import { selectLanguage } from "../../store/languageSlice"

const Contact = () => {
    const language = useSelector(selectLanguage)
    const showSuccessMsg = () => {
        document.querySelector(`[name=${"send-success-" + language}]`).style.cssText = `
            width: 350px;
            border: 2px solid var(--main-color);
            transition-delay: 0s;
        `
        document.querySelector(`[name=${"send-success-" + language}] span`).style.cssText = `
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.4s;
        `
        document.querySelector(`[name=${"send-success-" + language}] p`).style.cssText = `
            opacity: 1;
            transition-delay: 0.6s;
            transform: translateY(0);
        `
        setTimeout(() => {
            document.querySelector(`[name=${"send-success-" + language}]`).style.cssText = `
                width: 0px;
                border: none;
                transition-delay: 0.4s;
            `
            document.querySelector(`[name=${"send-success-" + language}] span`).style.cssText = `
                opacity: 0;
                transform: translateY(20px);
                transition-delay: 0s;
            `
            document.querySelector(`[name=${"send-success-" + language}] p`).style.cssText = `
                opacity: 0;
                transition-delay: 0s;
                transform: translateY(20px);
            `
        }, 2500);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        

        // ADD YOUR ACCESS KEY IN THIS LINE
        // formData.append("access_key", "ACCESS_KEY_HERE");
        formData.append("access_key", "ad1b01ce-41e1-44dd-8520-1a81a7558f33");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
    
        if (res.success) {
            console.log("Success", res);
            showSuccessMsg();
        }
    };
  return (
    <div id="contact" className={styles.contact}>
        <Heading text={"Contact Us"}></Heading>
        <Heading arabic={true} text={"تواصل معنا"}></Heading>
        <div className="container">
        <div className={styles.containerBorder}>
        </div>
            <div language="en" className={styles.containerContent}>
                <div className={styles.sendSuccess} name="send-success-en">
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                    </span>
                    <p>
                        Thank You!
                    </p>
                </div>
                <div className={styles.text}>
                    {/* <p>
                        Join us on our journey to transform Oman into a leading digital
                        economy through artificial intelligence. For partnerships, consultations,
                        or more information about our services, 
                        <br />
                        please contact us
                    </p> */}
                    <p>
                        Join us on our journey to make the best solutions through artificial intelligence. For partnerships, consultations,
                        or more information about our services, 
                        <br />
                        contact us
                    </p>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email-en">Email</label>
                        <input type="email" name="email" id="email-en" placeholder="Your Email"/>
                    </div>
                    <div>
                        <label htmlFor="msg-en">Message</label>
                        <textarea id="msg-en" placeholder="Message" name="message"></textarea>
                    </div>
                    <input type="submit" value="Send" />
                </form>
                <div className={styles.otherContacts}>
                    <p>
                        <span>
                            Email:
                        </span>
                        {/* <a href="mailto:info@thriveom.ai">
                            info@thriveom.ai
                        </a> */}
                        <a href="mailto:testing@test.com">
                            testing@test.com
                        </a>
                    </p>
                    <p>
                        <span>
                            Phone:
                        </span>
                        {/* <a href="tel:0096897755907">
                            0096897755907
                        </a> */}
                        <a href="tel:12412441">
                            12412441
                        </a>
                    </p>
                    <div className={styles.socailLinks}>
                        {/* <a href="https://api.whatsapp.com/send?phone=0096897755907" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                            </span>
                        </a>
                        <a href="tel:0096897755907">
                            <span>
                                <FontAwesomeIcon icon="fa-solid fa-phone"/>
                            </span>
                        </a> */}
                        <a href="https://api.whatsapp.com/send?phone=12431541235" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                            </span>
                        </a>
                        <a href="tel:12431541235">
                            <span>
                                <FontAwesomeIcon icon="fa-solid fa-phone"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div language="ar" className={styles.containerContent}>
            <div className={styles.sendSuccess} name="send-success-ar">
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                    </span>
                    <p>
                        شكرا لك!
                    </p>
                </div>
                <div className={styles.text}>
                    {/* <p>
                        انضم إلينا في رحلتنا لتحويل عُمان إلى اقتصاد رقمي رائد من خلال الذكاء الاصطناعي. للشراكات والاستشارات أو لمزيد من المعلومات حول خدماتنا،
                        <br />
                        يُرجى الاتصال بنا
                    </p> */}
                    <p>
                        انضم إلينا في رحلتنا لإنتاج أفضل الحلول من خلال الذكاء الاصطناعي. للشراكات، الاستشارات، أو لمزيد من المعلومات حول خدماتنا،
                        <br />
                        يُرجى الاتصال بنا
                    </p>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email-ar">البريد الإلكتروني</label>
                        <input type="email" name="email" id="emaul-ar" placeholder="بريدك الإلكتروني"/>
                    </div>
                    <div>
                        <label htmlFor="msg-ar">رسالة</label>
                        <textarea id="meg-ar" name="message" placeholder="رسالة"></textarea>
                    </div>
                    <input type="submit" value="إرسال" />
                </form>
                <div className={styles.otherContacts}>
                    <p>
                        <span>
                            بريدنا الإلكتروني: 
                        </span>
                        {/* <a href="mailto:info@thriveom.ai">
                            info@thriveom.ai
                        </a> */}
                        
                        <a href="mailto:test@test.com">
                            test@test.com
                        </a>
                    </p>
                    <p>
                        <span>
                            الهاتف: 
                        </span>
                        {/* <a href="tel:0096897755907">
                            0096897755907
                        </a> */}
                        <a href="tel:12351235">
                            12351235
                        </a>
                    </p>
                    <div className={styles.socailLinks}>
                        {/* <a href="https://api.whatsapp.com/send?phone=0096897755907" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                            </span>
                        </a>
                        <a href="tel:0096897755907">
                            <span>
                                <FontAwesomeIcon icon="fa-solid fa-phone"/>
                            </span>
                        </a> */}
                        <a href="https://api.whatsapp.com/send?phone=2412341234" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                            </span>
                        </a>
                        <a href="tel:2412341234">
                            <span>
                                <FontAwesomeIcon icon="fa-solid fa-phone"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact