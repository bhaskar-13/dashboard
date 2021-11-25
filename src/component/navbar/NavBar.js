import "./NavBar.css";
const NavBar=({sideBarOpen,openSideBar})=>{
    return(
      <nav className="navbar">
          <div className="nav-icon" onClick={()=>openSideBar()}>
           <i className="fa fa-bars"></i>
          </div>
          <div className="navbar__left">
           <a href="/#">Subscriber</a>
           <a href="/#">Video Manager</a>
           <a className="active_link" href="/#">Admin</a>
          </div> 
          <div className="navbar__right">
              <a href="/#">
                <i className="fa fa-search"></i>
              </a>
              <a href="/#">
                <i className="fa fa-clock-o"></i>
              </a>
              <a href="/#">
                  <img width= "30" src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg" alt="userlogo"/>
              </a>
          </div>
      </nav>    
    )
}

export default NavBar;