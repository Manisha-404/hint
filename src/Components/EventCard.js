import main from '../images/main.jpeg';
import styles from '../Css/EventCard.module.css';

function EventCard() {
    return (
      <> 
        <div className={styles.div}>
        <img className={styles.img} src={main} alt="Logo" />
        <h1 className={styles.h1}>Aparoksha IIITA</h1>
        <p className={styles.p} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Lorem ipsum dolor, sit amet consectetur adipisi 
        Lorem ipsum dolor, sit amet consectetur
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Lorem ipsum dolor, sit amet consectetur adipisi 
        Lorem ipsum dolor, sit amet consectetur
        </p>
        </div>
      </>
    );
  }
  
  export default EventCard;
  