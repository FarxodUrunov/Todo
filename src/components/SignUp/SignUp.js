import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

let ddd = {
   data: {
      id: 23,
      users: {
         name: "farxod",
         password: "123456",
      },
      info: ["aaa", "bbb", "ssss", "ooo"],
   },
};

class SignUp extends Component {
   state = {
      login: "",
      password: "",
      confirmpassword: "",
      error: "",
      passState: false,
   };

   componentDidMount() {
      fetch("https://vast-mesa-55659.herokuapp.com/api/user-1s", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(ddd),
      })
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            console.log(data);
         });
   }

   onChangeLogPass = (e) => {
      e.preventDefault();

      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   onClick = () => {
      if (this.state.confirmpassword === this.state.password) {
         this.props.onOpen(this.state.login, this.state.password);
         this.setState({
            passState: true,
         });
      } else {
         this.setState({
            error: "Error password",
            login: "",
            password: "",
            confirmpassword: "",
         });
      }
   };

   render() {
      return (
         <div className="singup">
            <h1>Sign Up</h1>
            <div className="w-50 mx-auto">
               <form className="form" onChange={this.onChangeLogPass}>
                  <label>Login</label>
                  <input name="login" className="p-2 my-3" value={this.state.login} type="text" />
                  <label>Password</label>
                  <input name="password" className="p-2 my-3" value={this.state.password} type="password" />
                  <label>Confirm Password</label>
                  <input name="confirmpassword" value={this.state.confirmpassword} className="p-2 my-3" type="password" />
                  <p className="text-danger">{this.state.error}</p>
               </form>

               {this.state.passState ? (
                  <Link to="/app">
                     <button className="btn btn-dark w-100" onClick={this.onClick}>
                        Submit
                     </button>
                  </Link>
               ) : (
                  <button className="btn btn-dark w-100" onClick={this.onClick}>
                     Submit
                  </button>
               )}
            </div>
         </div>
      );
   }
}

export default SignUp;
