import main from '../images/main.jpeg';
import styles from '../Css/Main.module.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className={styles.card}>
        <img className={styles.img} src={main} alt="Logo" />
        <h1 className={styles.h1}>Aparoksha IIITA</h1>
        <p className={styles.p}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisi <br></br>
        Lorem ipsum dolor, sit amet consecteturLorem ipsum dolor,<br></br>
        sit amet consectetur adipisicing elit. <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisi <br></br>
        Lorem ipsum dolor, sit amet consectetur<br></br>
        </p>
      
        <Link className={styles.a} to="/KnowMore">
          Know More
        </Link><br></br>
        <Link to="/Liked">
        <button className={styles.button1}>Intrested</button>
        </Link>
        <button className={styles.button2}>Not Intrested</button>
    </div>
  );
}


export default Main;
