import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../../assets/user.png";


const Navbar = () => {
    const navLinks = <>
    <li><a> <NavLink to='/'>Home</NavLink></a></li>
    <li><a> <NavLink to='/about'>About</NavLink></a></li>
    <li><a> <NavLink to='/career'>Career</NavLink></a></li>
   
    
    
    
    </>
    return (
       <>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
     
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className='navbar-end'>
    

 
  <div className="w-10 h-10 rounded-full btn btn-ghost btn-circle avatar tabIndex={0} role">
  <img src={userDefaultPic}/>
</div>


    <Link to =''><button className="btn">Login</button></Link>
  
  </div>
</div>

        
        
        </>
        
        
    );
};

export default Navbar;