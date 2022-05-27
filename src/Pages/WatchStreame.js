import Nav from '../Components/Nav';
import StreameCard from '../Components/StreameCard';
import styles from '../Css/WatchStreame.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import styles1 from '../Css/Search.module.css';

function Watch() {
    return (
      <>
      <Link className={styles1.link} to="/">
        <FontAwesomeIcon className={styles1.close} icon={faCircleXmark} size="xl" color='#FDFAFA'/>
      </Link>
      <div className={styles.div} >
          <div className={styles.card} >
          <StreameCard/>
          </div>
          <div className={styles.card} >
          <StreameCard/>
          </div>
          <div className={styles.card} >
          <StreameCard/>
          </div>
          <div className={styles.card} >
          <StreameCard/>
          </div>
          <div className={styles.card} >
          <StreameCard/>
          </div>
          </div>
      </>
    );
  }
  
  export default Watch;