const Navbar = () => {
    const navOption = (
      <>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <details>
            <summary>Item 2</summary>
            <ul className="p-2 bg-black">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </>
    );
  
    return (
      <>
        <div className="navbar fixed z-10 bg-opacity-90 bg-black text-white max-w-screen-xl">
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black">
                {navOption}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
          </div>
          <div className="navbar-center hidden lg:flex bg-black">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Get Started</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;
  