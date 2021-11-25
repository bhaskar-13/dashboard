import "./SideBar.css";
const SideBar=({SideBarOpen,closeSideBar})=>{
    return(
      <div className={SideBarOpen? "sidebar-responsive":""} id="sidebar">
          <div className="sidebar__title">
              <div className="sidebar__img">
                  <img src="" alt=""/>
                  <h1>CodersBite</h1>
              </div>
              <i className="fa fa-times" id="sidebarIcon" onClick={()=>closeSideBar()}> </i>
          </div>

          <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                 <i className="fa fa-home"></i>
                 <a href="/#">DashBoard</a>
                 <h2>MNG</h2>
                 <div className="sidebar__link">
                     <i className="fa fa-user-secret"></i>
                     <a href="/#">Admin Management</a>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-building-o"></i>
                     <a href="/#">Company Management</a>
                </div>

                <div className="sidebar__link">
                     <i className="fa fa-wrench"></i>
                     <a href="/#">Employee Managemnt</a>
                </div>

                <div className="sidebar__link">
                     <i className="fa fa-archive"></i>
                     <a href="/#">WareHouse</a>
                </div>
                <div className="sidebar__link">
                     <i className="fa fa-handshake-o"></i>
                     <a href="/#">Contracts</a>    
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                     <i className="fa fa-question"></i>
                     <a href="/#">Request</a>    
                </div>
                <div className="sidebar__link">
                     <i className="fa fa-sign-out"></i>
                     <a href="/#">Leave Policy</a>    
                </div>

                <div className="sidebar__link">
                     <i className="fa fa-calendar-check-o"></i>
                     <a href="/#">Special Day</a>    
                </div>

                <div className="sidebar__link">
                     <i className="fa fa-files-o"></i>
                     <a href="/#">Apply For Leave</a>     
                </div>

                <h2>PAY ROLL</h2>
                <div className="sidebar__link">
                     <i className="fa fa-money"></i>
                     <a href="/#">Payroll</a>     
                </div>

                <div className="sidebar__link">
                     <i className="fa fa-breifcase-o"></i>
                     <a href="/#">PayGrade</a>     
                </div>

                
                <div className="sidebar__logout">
                     <i className="fa fa-power-off"></i>
                     <a href="/#">Log Out</a>     
                </div>










              </div>
          </div>
      </div>
    )
}

export default SideBar;
