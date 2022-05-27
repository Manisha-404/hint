import main from '../images/main.jpeg';
import styles from '../Css/StreameCard.module.css';
import a from '../images/2.png';
function StreameCard() {
    return (
      <> 
        <div className={styles.div}>
        <img className={styles.img1} src={a} alt="Logo" />
        <h1 className={styles.h1}>Aparoksha IIITA</h1>
        <img className={styles.img} src={main} alt="Logo" />
        </div>
      </>
    );
  }
  
  export default StreameCard;
  