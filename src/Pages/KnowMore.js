import styles from '../Css/Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Know() {
    return (
      <>
      hrkko
      <Link className={styles.link} to="/">
        <FontAwesomeIcon className={styles.close} icon={faCircleXmark} size="xl" color='#FDFAFA'/>
      </Link>
      </>
    );
  }
  
  export default Know;