import abs from '../images/abs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import styles from '../Css/Profile.module.css';
import { Link } from 'react-router-dom';
function Profile() {
  return (
    <div className={styles.card}>
       {/* <span className={styles.abs}>
        <img className={styles.img} src={abs} alt="Logo" />

        </span> */}
        <Link className={styles.link} to="/User/EventsSponsered">
        <FontAwesomeIcon className={styles.icon} icon={faUser} size="4x" color='#FFFFFF'/>
        </Link>
        <h1 className={styles.h1}>Britania.co</h1>
        <p className={styles.p}>
        Lorem ipsum dolor, sit amet <br></br> consectetur adipisicing elit. <br></br>
        Lorem ipsum dolor, sit amet consectetur <br></br>adipisicing Lorem ipsum dolor,<br></br> sit amet consectetur
        </p>
    </div>
  );
}


export default Profile;
