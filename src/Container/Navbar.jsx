import React from "react";
// import Logo from "../constants/Images/logo.png";
// import Data from "../Data"
import "../Style/Main.css";
import "../Style/Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <aside>
        <div className="top">
  ////////////////////
          <div className="close" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>
        <div className="sidebar">
          <a href="#" className="active">
            <span className="material-icons-sharp"> dashboard </span>
            <h3>Dashboard</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> person_outline </span>
            <h3>Customers</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> receipt_long </span>
            <h3>Orders</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> insights </span>
            <h3>Analytics</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> mail_outline </span>
            <h3>Messages</h3>
            <span className="message-count">26</span>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> report_gmailerrorred </span>
            <h3>Reports</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> add </span>
            <h3>Add Product</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> settings </span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp"> logout </span>
            <h3>Logout</h3>
          </a>

        <a href="https://github.com/sudheerj/reactjs-interview-questions#what-is-react">
          <button className="material-icons-sharp">logout</button>
          <h3>Reactjs</h3>
        </a>
        </div>
      </aside>
      {/* endshere */}
    </div>
  );
};
export default Navbar;
