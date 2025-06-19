// import { useState } from "react";
import styles from "./loader.module.css"
import { useSelector } from "react-redux";
import { selectLoader } from "../../store/loaderSlice";


const Loader = () => {
    let loader = useSelector(selectLoader);
  return (
    <div id="loader" className={styles.loader} loader={loader ? "yes" : "no"}>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Loader