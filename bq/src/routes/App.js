import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WaiterProfile from "../components/WaiterProfile/WaiterProfile";
import NotFound from "../components/NotFound";
import Login from '../components/Login/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/WaiterProfile" element={<WaiterProfile />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
