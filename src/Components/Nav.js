import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import "./Nav.css";
const Nav = () => {
  const match = useRouteMatch();
  return (
    <nav>
      <div className="nav">
        <div id="logo">
          <span class="image avatar48">
            <img src="images/avatar.jpg" alt="" />
          </span>
          <h1 id="title">Nick Place</h1>
          <p>Hyperspace Engineer</p>
        </div>

       
          <NavLink
            className="navLink"
            exact to="/"
          >
            Home
          </NavLink>
       
        
          <NavLink className="navLink" to="/my-work">
            My Work
          </NavLink>
      
        
          <NavLink className="navLink" to="/about">
            About Me
          </NavLink>
     
     
          <NavLink className="navLink" to="/resume">
            Resume
          </NavLink>
      
          <NavLink className="navLink" to="/contact">
            Contact
          </NavLink>
  
      </div>
    </nav>
  );
};

export default Nav;
