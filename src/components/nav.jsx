import { Link } from "react-router-dom";

const Nav = () => {
  
return(
  <div id="navbar">
          <Link to={"/red"}>red</Link>
          <Link to={"/blue"}>blue</Link>
          <Link to='/'>Home</Link>
          <Link to='/yellow'>yellow</Link>
        </div>
)
}
export default Nav;