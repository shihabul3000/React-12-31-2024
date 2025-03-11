import { Link } from "react-router-dom";


const NavBar = () => {
    const navOptions = (
        <>
            <li><Link to='/'><a>Home</a></Link></li>
            <li><Link to='/about'><a>About</a></Link></li>
            <li tabIndex={0}>
                <a className="justify-between">
                    Services
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                    <li><Link to ='/audit'><a>Audit</a></Link></li>
                    <li><Link to='/taxsation'><a>Taxation</a></Link></li>
                    <li><Link to='/accounting'><a>Accounting (IFRS / US GAAP)</a></Link></li>
                    <li><Link to='/projectprofile'><a>Project Profile</a></Link></li>
                    <li><Link to='/fasibility'><a>Feasibility Report</a></Link></li>
                    <li><Link to='/companyformation'><a>Company Formation</a></Link></li>
                    <li><Link to="/foregin"><a>Foreign Co./Liaison Office</a></Link></li>
                    <li><Link to='/regulatory'><a>Regulatory Support</a></Link></li>
                    <li><Link to="/financialadvisory"><a>Financial Advisory Services</a></Link></li>
                </ul>
            </li>


            <li><Link to="/blogpost"><a>Blog Post</a></Link></li>
            <li><Link to="/career"><a>Career</a></Link></li>
            <li><Link to="/contactus"><a>Contact Us</a></Link></li>
        </>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white w-full px-4 lg:px-8 py-2 flex items-center justify-between">
            <div className="navbar-start flex items-center">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
             <div className="-mt-2  -ml-10">
                  <a className="btn btn-ghost normal-case text-xs flex flex-col items-center ">
                    <ul>
                        <span className="text-yellow-500 text-sm md:text-sm ">م. أ. روف وشركاه للمحاسبة القانونية</span>
                    
                    <ul> <span className="text-blue-800 text-lg md:text-lg font-bold">M A Rouf & Co.</span></ul>

                    <ul> <span className="text-yellow-600 text-sm md:text-sm ">Chartered Accountants</span></ul>
                   
                   
                    </ul>
                </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <a className="btn">Login</a>
                <a className="btn">Register</a>
            </div>
        </div>
    );
};

export default NavBar;
