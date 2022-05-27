import Nav from '../Components/Nav';
import Profile from '../Components/Profile';
import Main from '../Components/Main';
import Stream from '../Components/Stream';
import styles from '../Css/Home.module.css';
function Home() {
  return (
    <> <Nav />
    <div className={styles.grid}>
      <Profile />
      <div className={styles.scroll}>
      <Main/>
      <Main/>
      <Main/>
      </div>
      <Stream/>
    </div>
    </>
  );
}

export default Home;
