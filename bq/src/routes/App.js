import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WaiterProfile from "../components/WaiterProfile/WaiterProfile";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../components/NotFound/NotFound";
import { KitchenRoom } from "../components/KitchenRoom/KitchenRoom";
import { AuthProvider } from "../components/context/AuthContext";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/KitchenRoom" element={<KitchenRoom />} />
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/WaiterProfile"
              element={
                <PrivateRoute>
                  <WaiterProfile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};
export default App;
