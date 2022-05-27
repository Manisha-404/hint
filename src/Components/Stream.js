import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import styles from '../Css/Stream.module.css';
import { Link } from 'react-router-dom';
function Stream() {
  return (
    <div className={styles.card}>
        <h1 className={styles.h1}>Watch stream</h1>
        <ul className={styles.ul}>
            <Link className={styles.link} to="/Watch"> 
            <li>
            <img className={styles.img} src={two} alt="Logo" /> 
            </li>
            </Link>
            <li>
            <img className={styles.img} src={three} alt="Logo" />
            </li>
            <li>
            <img className={styles.img} src={four} alt="Logo" />                
            </li>
            <li>
            <img className={styles.img} src={five} alt="Logo" />
            </li>
            <li>
            <img className={styles.img} src={six} alt="Logo" />
            </li>
        </ul>
    </div>
  );
}


export default Stream;
