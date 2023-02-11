import { Link } from "react-scroll";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="Nav">
      <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? <BiX /> : <BiMenu />}</button>

      <ul style={{display: showMenu ? "flex" : "none"}}>
        <li>
          <Link 
            activeClass="active"
            to="home" 
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'
          ><FaHome /> Home</Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'><FaUserAlt /> About</Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="my_study"
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'><IoSchoolSharp /> My Study</Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="contact" 
            spy={true}
            smooth={true}
            duration={500} 
            scrolling='horizontal'><MdConnectWithoutContact /> Contact</Link>
        </li>
      </ul>
    </div>
  );
  
}
  
export default Nav;