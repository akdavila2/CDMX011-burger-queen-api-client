import React from "react";
import Footer from "../Footer/Footer";
import { NavBarAdministrator } from '../NavBar.jsx/NavBarAdministrator';
import {ProfileCrud} from '../Administrator/ProfileCrud'
import { UserRegister } from "./UserRegister";

export const AdminProfile = () => {
  return (
    <> 
    <div className="container-register">
     <header>
     <NavBarAdministrator />
     </header>
     {/* <div className="user-crud"> */}
         
            <section className="user-crud" >
            <div><UserRegister/>  </div> 
            <div><ProfileCrud /></div>
            </section>
        {/* </div> */}
      <footer>
        <div><Footer /></div>
      </footer>
      </div>
    </>
  );
};
