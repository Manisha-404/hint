import main from '../images/main.jpeg';
import styles from '../Css/ES.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Es() {
    return (
      <div className={styles.div}>
       <img className={styles.img} src={main} alt="Logo" />
       <img className={styles.img} src={main} alt="Logo" />
       <img className={styles.img} src={main} alt="Logo" />
       <img className={styles.img} src={main} alt="Logo" />
       <Link className={styles.link} to="/EventPosting">
       <FontAwesomeIcon className={styles.icon} icon={faPlusCircle} size="2xl" color='#fff'/>
       </Link>
      </div>
    );
  }
  
  export default Es;
  