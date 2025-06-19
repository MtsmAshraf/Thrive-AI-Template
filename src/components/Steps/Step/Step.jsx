import styles from './step.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../../store/themeSlice'

const Step = ({count, title, paragraph, isReversed,arabic, children}) => {
    let theme = useSelector(selectTheme);
    let [animateStep, setAnimateStep] = useState(false) 
    useEffect(() => {
        let stepSections = document.querySelector(`[name='step-${count}']`)
        window.addEventListener("scroll", () => {
            if(window.scrollY >=  stepSections.offsetTop - 100){
                setAnimateStep(true)
            }else{
                setAnimateStep(false)
            }
        }) 
    },)
  return (
      <div animate={animateStep ? "yes" : "no"} theme={theme} id={count} name={`step-${count}`} className={isReversed ? styles.step + " " + styles.reversed : styles.step}>
        <div className={animateStep ? styles.one + " " + styles.animate : styles.one}>
                <h2>{title}</h2>
            <div className={styles.text}>
                <p>{paragraph}</p>
            </div>
        </div>
        <span>{arabic ? count - 4 :  count}</span>
        <p className={styles.circle}></p>   
        <div className={animateStep ? styles.two + " " + styles.animate  : styles.two}>
            <div className={styles.img}>
                {children}
            </div>
        </div>
        <div>
            <a href={(count !== 4 && count !== 8) ? `#${count + 1}` : "#expertise"} className={styles.scrollNextStep}>
                <FontAwesomeIcon icon="fa-solid fa-angles-down" />
            </a>    
        </div>
    </div>
  )
}

export default Step