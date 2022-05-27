import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSearch,} from '@fortawesome/free-solid-svg-icons'
import styles from '../Css/Search.module.css';
import { Link } from 'react-router-dom';

function Search() {
    return (
      <> 
        <Link className={styles.link} to="/">
         <FontAwesomeIcon className={styles.close} icon={faCircleXmark} size="xl" color='#FDFAFA'/>
         </Link>
        <div className={styles.search} id='search' >
            <FontAwesomeIcon icon={faSearch} size="xl" color='#FDFAFA'/>
                <input className={styles.input}  type="text" placeholder="" />
            </div>
      </>
    );
  }
  
  export default Search;