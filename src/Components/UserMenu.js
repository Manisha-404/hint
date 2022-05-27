import styles from "../Css/UserMenu.module.css";
import { Link } from "react-router-dom";

function UserMenu() {
    return (
     <div className={styles.div}>
          <ul className={styles.ul} >
            <Link className={styles.link} to="/User/EventsSponsered">
            <li className={styles.rotate} >Events Sponsered</li>
            </Link>
            {/* <Link className={styles.link} to="/Search/ng"> */}
            <li className={styles.rotate} >Badges earned</li>
            {/* </Link>
            <Link className={styles.link} to="/Search/Hotel"> */}
            <li className={styles.rotate} >Saved</li>
            {/* </Link> */}
            {/* <Link className={styles.link} to="/Search/Weather"> */}
            <li className={styles.rotate} >Tagged</li>
            {/* </Link>             */}
        </ul>
     </div>
    );
  }
  
  export default UserMenu;
  