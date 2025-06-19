import { useEffect } from "react"
import styles from "./steps-scroll.module.css"
// import { selectLanguage } from "../../../store/languageSlice";
// import { useSelector } from "react-redux";

const StepsScroll = () => {
    // let language = useSelector(selectLanguage);
   useEffect(() => {
        let stepsStart = document.querySelector("#steps").offsetTop
        let stepsHeight = document.querySelector("#steps").offsetHeight
        let bodyHeight = document.body.offsetHeight;
        let stepsEnd = stepsHeight - stepsStart + bodyHeight;
        window.addEventListener("scroll", () => {
            if(window.scrollY > stepsStart && window.scrollY < stepsEnd){
                // console.log(document.querySelector("[name='step-4']"))
                if(((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) > 10 && ((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) <= 25){
                    document.querySelectorAll("#steps-scroll span").forEach((span) => {
                        span.style.cssText = `
                            // width: ${((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd))}%;
                            width: calc(0% / 3);
                        `
                    })
                }else if(((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) > 26 && ((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) <= 50){
                    document.querySelectorAll("#steps-scroll span").forEach((span) => {
                        span.style.cssText = `
                            // width: ${((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd))}%;
                            width: calc(100% / 3);
                        `
                    })
                }else if(((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) > 51 && ((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) <= 75){
                    document.querySelectorAll("#steps-scroll span").forEach((span) => {
                        span.style.cssText = `
                            // width: ${((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd))}%;
                            width: calc(100% / ( 3 / 2 ));
                        `
                    })
                }else if(((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) > 76 && ((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd)) <= 100){
                    document.querySelectorAll("#steps-scroll span").forEach((span) => {
                        span.style.cssText = `
                            // width: ${((-100 * window.scrollY) / (stepsStart - stepsEnd)) + ((100 * stepsStart) / (stepsStart - stepsEnd))}%;
                            width: calc(100%);
                        `
                    })
            }
            document.querySelectorAll("#steps ul li").forEach((li, index) => {
                if(document.querySelectorAll(`#steps [name]`)[index].getAttribute("animate") === "yes"){
                    li.style.cssText = `
                        background-color: transparent;
                        background-image: var(--main-gradient);
                        color: white:
                    `
                }else if(document.querySelectorAll(`#steps [name]`)[index].getAttribute("animate") === "no"){
                    li.style.cssText = `
                        background-image: none;
                        background-color: var(--main-bg-color);
                        color: var(--text-color)
                    `
                }
            })
   }})
        // let stepsEndSmall = stepsHeight - stepsStart + 1000;
        // window.addEventListener("scroll", () => {
        //     if(window.scrollY > stepsStart && window.scrollY < stepsEndSmall){
        //         document.querySelector("#steps-scroll span:last-of-type").style.cssText = `
        //             width: ${((-100 * window.scrollY) / (stepsStart - stepsEndSmall)) + ((100 * stepsStart) / (stepsStart - stepsEndSmall))}%;
        //         `
        //     }
        // })
   })
  return (
    <div id="steps-scroll" className={styles.stepsScroll}>
        <ul language="en">
            <li>
                1
            </li>
            <li>
                2
            </li>
            <li>
                3
            </li>
            <li>
                4
            </li>
            <span></span>
        </ul>
        <ul language="ar">
            <li>
                1
            </li>
            <li>
                2
            </li>
            <li>
                3
            </li>
            <li>
                4
            </li>
            <span></span>
        </ul>
    </div>
  )
}

export default StepsScroll