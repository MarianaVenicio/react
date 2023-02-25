import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
//import "./Navbar.css"

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img src="https://res.cloudinary.com/dbkoxmpas/image/upload/c_scale,h_143,w_182/v1677330221/2_7_2022_2_07_03_p._m._hejxyj.png" />

      <ul className={styles.containerList}>
        <li> serum</li>
        <li>jabones</li>
        <li>cremas</li>
      </ul>
    <CartWidget />
    </div>
  );
};
//ESTILOS EN LINEA
//ESTILOS CSS
//modulos de css
export default Navbar;
