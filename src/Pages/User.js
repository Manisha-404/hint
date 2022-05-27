import Nav from '../Components/Nav';
import Profile from '../Components/Profile';
import UserMenu from '../Components/UserMenu';
import styles from '../Css/User.module.css';
import { Outlet } from "react-router-dom";

function User() {
  return (
    <div>
      <Nav />
      <Profile />
      <div className={styles.div}>
      <UserMenu/>
      </div>
      <Outlet/>
    </div>
  );
}

export default User;
