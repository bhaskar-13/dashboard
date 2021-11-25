import './App.css';
import {useState} from "react";
import NavBar  from './component/navbar/NavBar';
import SideBar from './component/sidebar/SideBar';
import Main from './component/mainbar/Main';


const App=()=> {
 
  const [sideBarOpen,setSideBar]=useState(false);

 const openSideBar=()=>{
  setSideBar(true);
}

const closeSidebar=()=>{
  setSideBar(false);
}
  return (
   <div className="container">
        <NavBar sideBarOpen={sideBarOpen} openSideBar={openSideBar}/>
        <Main/>
        <SideBar sideBarOpen={sideBarOpen} closeSideBar={closeSidebar}/>
   </div>
  );
}

export default App;
