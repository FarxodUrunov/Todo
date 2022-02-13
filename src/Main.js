import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import "./Main.css";

const Admin = () => {
   return <h2>This is Admin</h2>;
};

class Main extends React.Component {
   state = {
      isAuht: false,
   };

   onOpen = (log, pass) => {
      if (log !== "" && pass !== "") {
         this.setState({
            isAuht: true,
         });
	  }
   };

   render() {
      return (
         <main>
            <nav>
               <ul className="d-flex">
                  <li>
                     <Link className="btn btn-dark" to="/">
                        Sign In
                     </Link>
                  </li>
                  <li>
                     <Link className="btn btn-dark" to="/app">
                        App
                     </Link>
                  </li>
                  <li>
                     <Link className="btn btn-dark" to="/admin">
                        Admin
                     </Link>
                  </li>
               </ul>
            </nav>
            <Routes>
               <Route path="/" element={<SignIn onOpen={this.onOpen} />} />
               {this.state.isAuht && <Route path="/app" element={<App />} />}
				  <Route path="/admin" element={<Admin />} />
				  <Route path="/signup" element={<SignUp onOpen={this.onOpen}/>}/>
            </Routes>
         </main>
      );
   }
}
export default Main;
