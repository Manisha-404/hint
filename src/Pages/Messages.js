import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import Nav from "../Components/Nav";
import styles from "../Css/Messages.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLink, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';

function Messages() {
    return (
      <>
       <Nav />
      <div className={styles.grid}>
        <div className={styles.bar}>
        <ul className={styles.ul}>
            <li className={styles.li}>
            <img className={styles.img} src={two} alt="Logo" /> 
            </li>
            <li className={styles.li}>
            <img className={styles.img} src={three} alt="Logo" />
            </li>
            <li className={styles.li} >
            <img className={styles.img} src={four} alt="Logo" />                
            </li>
            <li className={styles.li} >
            <img className={styles.img} src={five} alt="Logo" />
            </li>
            <li className={styles.li} >
            <img className={styles.img} src={six} alt="Logo" />
            </li>
            <li className={styles.li}>
            <img className={styles.img} src={two} alt="Logo" /> 
            </li>
            <li className={styles.li}>
            <img className={styles.img} src={three} alt="Logo" />
            </li>
            <li className={styles.li} >
            <img className={styles.img} src={four} alt="Logo" />                
            </li>
            <li className={styles.li} >
            <img className={styles.img} src={five} alt="Logo" />
            </li>
            <li className={styles.li} >
            <img className={styles.img} src={six} alt="Logo" />
            </li>
        </ul>
        </div>
        <div className={styles.msg}>
            <div className={styles.nav}>
            <img className={styles.img1} src={two} alt="Logo" /> 
            <FontAwesomeIcon className={styles.bars} icon={faBars} size="xl" color='#fff'/>
            </div>
            <div className={styles.msgbox}>
                <div className={styles.msgs}>
                <span className={styles.in}>
                    <p>msg1</p>
                </span>
                <span className={styles.in}>
                     <p>msg2</p>
                </span>
                <span className={styles.out}>
                    <p>msg2</p>
                </span>
                <span className={styles.in}>
                    <p>msg1</p>
                </span>
                <span className={styles.in}>
                     <p>msg2</p>
                </span>
                <span className={styles.out}>
                    <p>msg2</p>
                </span>
                <span className={styles.in}>
                    <p>msg1</p>
                </span>
                <span className={styles.in}>
                     <p>msg2</p>
                </span>
                <span className={styles.out}>
                    <p>msg2</p>
                </span>
                <span className={styles.in}>
                    <p>msg1</p>
                </span>
                <span className={styles.in}>
                     <p>msg2</p>
                </span>
                <span className={styles.out}>
                    <p>msg2</p>
                </span>
                </div>
                <div className={styles.send}>
                <FontAwesomeIcon className={styles.icon} icon={faSmile} size="xl" color='#fff'/>
                <FontAwesomeIcon className={styles.icon} icon={faLink} size="lg" color='#fff'/>
                <input className={styles.input}  type="text" placeholder="Type a message" />
                <FontAwesomeIcon className={styles.iconplane} icon={faPaperPlane} size="lg" color='#fff'/>
                </div>
            </div>
        </div>    
      </div>
      </>
    );
  }
  
  export default Messages;