import { BrowserRouter , Route ,Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Components/Login';
import User from './Pages/User';
import Es from "./Components/EventsSponsered";
import './App.css';
import Post from "./Pages/EventPosting";
import Messages from "./Pages/Messages";
import Search from "./Pages/Search";
import Know from "./Pages/KnowMore";
import Liked from "./Pages/EventsLiked";
import Watch from "./Pages/WatchStreame";
import Error404 from "./Components/Error404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/User" element={<User/>}>
          <Route path="EventsSponsered" exact  element={<Es/>} />
        </Route>
        <Route path="/EventPosting" element={<Post/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/KnowMore" element={<Know/>} />
        <Route path="/Liked" element={<Liked/>} />
        <Route path="/Watch" element={<Watch/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
