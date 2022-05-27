import EventCard from "../Components/EventCard";
import Nav from "../Components/Nav";
import styles from "../Css/EventsLiked.module.css";

function Liked() {
    return (
      <> 
         <Nav />
          <div className={styles.div} >
          <div className={styles.card} >
          <EventCard/>
          </div>
          <div className={styles.card} >
          <EventCard/>
          </div>
          <div className={styles.card} >
          <EventCard/>
          </div>
          <div className={styles.card} >
          <EventCard/>
          </div>
          <div className={styles.card} >
          <EventCard/>
          </div>
          </div>
      </>
    );
  }
  
  export default Liked;