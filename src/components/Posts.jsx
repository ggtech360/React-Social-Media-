import { useLocation, useNavigate } from "react-router-dom";
import Feed from "./Feed";
import Profile from "./Profile";
import { useEffect } from "react";

const posts = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/profile" || location.pathname === "/profile/") {
      navigate("/profile/posts");
    }
  },[]);

  return (
    <Profile>
      <Feed marginTop={true} />
    </Profile>
  );
};

export default posts;
