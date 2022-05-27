import Nav from '../Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-regular-svg-icons';
import styles from '../Css/Ep.module.css';

function Post() {
    return (
      <>
        <Nav/>
      <div className={styles.div}>
       <h1 className={styles.h1} >CREATE NEW POST</h1>
       <div >
           <div className={styles.grid}>
            <div className={styles.add} >
            <FontAwesomeIcon className={styles.icon} icon={faImages} size="xl" color='#FDFAFA'/> <br></br> 
             <h3>UPLOAD IMAGES AND VIDEOS</h3>
            </div>
            <div className={styles.one} >
            </div>   
            </div>  
            <div className={styles.grid1}>
            <div className={styles.two} >
            </div>
            <div className={styles.three} >
            </div>
            </div> 
       </div>
      </div>
      </>
    );
  }
  
  export default Post;