import React ,{useEffect, useState} from "react";
import {getUsers} from "../../lib/firebase";
import iconDelete from "../../assets/deleteUser.png"
// import iconUpdate from "../../assets/updateUser.png"
import { removeUser } from "../../lib/firebase";

export const ProfileCrud = () => {
  
  const [users, setUsers]=useState(null);

  useEffect( ()=>{
showUser()
  }, [setUsers])

  const showUser= async ()=>{
    const toUsers= await getUsers();
    console.log(toUsers.docs)
    setUsers(toUsers.docs)
  }
//creo que falta manejo de pros
  const onRemove = (item)=>{
    console.log(item)
    removeUser(item)
      showUser()
    
  }


  return (
    <>
        <section className="register-form-crud">
            <form >
              
                { 
                  users && users.map((anUser, i)=> 
                  <div key={i} className="user-container">
                  <label >{anUser.data().email}</label>
                  <div className="btn-actions">
                  <img 
                  className="icon-delete"
                  src={iconDelete}
                  alt="iconDelete"
                  onClick={() => onRemove(anUser.data().uid)} />
                  
                  {/* <img 
                  className="icon-update"
                  src={iconUpdate}
                  alt="iconUpdate"
                 onClick={() => onRemove()}
                 /> */}
                  </div>
                  </div>
              )
                }
                
            </form>
        </section>
    </>
  );
};
