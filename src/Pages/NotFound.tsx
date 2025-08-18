import { Link } from "react-router";
import styles from "./NotFound.module.css";
import miImagen from "../assets/ups.jpeg"

function NotFound() {
  return (
    <>
    <div>
      <img src={miImagen}
      className={styles.back} />
    </div>
    <Link to="/">Volver a inicio</Link>
    </>
  );
};

export default NotFound;