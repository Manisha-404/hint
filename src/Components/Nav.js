import logo from '../images/Logo.png';
import styles from '../Css/Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className={styles.navbar} id="nav">
      <div className={styles.left} id='left'>
        <img className={styles.img} src={logo} alt="Logo" />
        <h1>Partnership.com</h1>
      </div>
      <div id='right'>
        <ul className={styles.ul} >
          {/* <FontAwesomeIcon icon={faHome} size="xl" color='#1F628E'/>
            <FontAwesomeIcon icon={faFacebookMessenger}size="xl" color='#1F628E' />
            <FontAwesomeIcon icon={faHeart} size="xl" color='#1F628E'/>
          */}
            <Link className={styles.link} to="/hint">
            <li className={styles.rotate} >Home</li>
            </Link>
            <Link className={styles.link} to="/Messages">
            <li className={styles.rotate} >Messages</li>
            </Link>
            <Link className={styles.link} to="/Liked">
            <li className={styles.rotate} >Events Liked</li>
            </Link>
            <Link className={styles.link} to="/Search">
            <li className={styles.li} >
            <div className={styles.search} id='search' >
            <FontAwesomeIcon icon={faSearch} size="xl" color='#FDFAFA'/>
                <input className={styles.input}  type="text" placeholder="" />
            </div>
            </li>
            </Link>
            <Link className={styles.link} to="/Login">
            <li  className={styles.rotate} ><FontAwesomeIcon icon={faUserCircle} size="xl" color='#fff'/></li>
            </Link>
        </ul>
      </div>
    </div>
  );
}


export default Nav;
