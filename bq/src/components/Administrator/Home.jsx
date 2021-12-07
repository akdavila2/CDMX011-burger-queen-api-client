// // // // import React from "react";
// // // // import { onAuthStateChanged } from "@firebase/auth";
// // // // import { auth } from "../../lib/firebase";
// // // // import { useNavigate } from "react-router";
// // // // import Login from "../Login/Login";
// // // // export const Home = ({ user }) => {
// // // //   const navigate = useNavigate();
// // // //   const sessionActive = () => {
// // // //     onAuthStateChanged(auth, (user) => {
// // // //       if (!user) {
// // // //         navigate("/");
// // // //         console.log("no user logged in ");
// // // //         // user.rol === "chef"
// // // //         //   ? navigate("/KitchenRoom")
// // // //         //   : user.rol === "waiter"
// // // //         //   ? navigate("/WaiterProfile")
// // // //         //   : navigate("/UserRegister");
// // // //       }
// // // //     });
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Login user={user} sessionActive={sessionActive} />
// // // //     </>
// // // //   );
// // // // };
