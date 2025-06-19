import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./footer.module.css"
// import { useSelector } from "react-redux"
// import { selectLanguage } from "../../store/languageSlice"

const Footer = () => {
    // const language = useSelector(selectLanguage)
    return (
    <div className={styles.footer}>
    <div className={styles.social}>
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
            <a href="https://api.whatsapp.com/send?phone=141234" target="_blank" rel="noreferrer">
                <span>
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </span>
            </a>
            <a href="tel:141234">
                <span>
                    <FontAwesomeIcon icon="fa-solid fa-phone"/>
                </span>
            </a>
            <a href="https://facebook.com">
                <span>
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </span>
            </a>
            <a href="https://linkedin.com">
                <span>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </span>
            </a>
        </div>
        <div className={styles.info}>
            <p language="en">Address details, city, country</p>
            <p language="ar">العنوان بالتفصبل, المدينة, الدولة</p>
            {/* <p>
                <a href="tel:0096897755907">
                    0096897755907
                </a>
            </p>
            <p>
                <a href="mailto:info@thriveom.ai">
                    info@thriveom.ai
                </a>
            </p> */}
            <p>
                <a href="tel:8978768768">
                    12345678
                </a>
            </p>
            <p>
                <a href="mailto:info@ttest.com">
                    info@ttest.com
                </a>
            </p>
        </div>
    </div>
  )
}

export default Footer