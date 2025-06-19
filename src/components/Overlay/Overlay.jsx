import styles from "./overlay.module.css"

const Overlay = ({dark}) => {
  return (
    <div className={dark ? styles.overlay + " " + styles.dark :  styles.overlay}>
    </div>
  )
}

export default Overlay