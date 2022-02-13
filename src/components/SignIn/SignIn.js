import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignIn extends Component {
   state = {
      login: "",
      password: "",
   };

   onChangeLogPass = (e) => {
      e.preventDefault();

      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   onClick = () => {
      this.props.onOpen(this.state.login, this.state.password);
   };

   render() {
      //   console.log(this.state);
      //   console.log(this.props);
      return (
         <div className="singup">
            <h1>Sign In</h1>
            <div className="w-50 mx-auto">
               <form className="form" onChange={this.onChangeLogPass}>
                  <label>Login</label>
                  <input name="login" className="p-2 my-3" type="text" />
                  <label>Parol</label>
                  <input name="password" className="p-2 my-3" type="password" />
               </form>

               <Link to="/app">
                  <button className="btn btn-dark w-100" onClick={this.onClick}>
                     Submit
                  </button>
               </Link>
               <Link to="/signup">
                  <div className="mt-5">Sign Up</div>
               </Link>
            </div>
         </div>
      );
   }
}

export default SignIn;
