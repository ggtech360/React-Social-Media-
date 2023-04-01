import Home from "./components/Home";
import Login from "./components/Login";
import Posts from "./components/Posts"
import About from "./components/About"
import Friends from "./components/Friends"
import Photos from "./components/Photos"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile/posts" element={<Posts />} />
          <Route exact path="/profile" element={<Posts/>} />
          <Route exact path="/profile/about" element={<About />} />
          <Route exact path="/profile/friends" element={<Friends />} />
          <Route exact path="/profile/photos" element={<Photos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
