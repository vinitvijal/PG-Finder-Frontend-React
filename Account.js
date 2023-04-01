import React from "react";
import "./Account.css";

export default function Account(){
        return(
            <div className="background">
                <div className="container">
                    <button className="but
                    "> X </button>
                    <div className="title">
                        <h1 className="nest">NestIn</h1>
                        <h2 className="acc">Create New Account</h2>
                    </div>
                    <div className="body">
                        <label className="hello">Full Name:</label>
                        <input className="hey" type="text" placeholder="enter your name"></input>
                        <label className="hello">Mobile Number:</label>
                        <input className="hey" type="number" placeholder="enter your phone number"></input>
                        <label className="hello">Email:</label>
                        <input className="hey" type="email" placeholder="user123@mail.com"></input>
                        <label className="hello">Password:</label>
                        <input className="hey" type="password" placeholder="********"></input>
                        <label className="hello">Current Status</label>
                        <select className="hey" >
                            <option value="working">Working</option>
                            <option value="studying">Studying</option>
                        </select>
                    </div>
                    <div className="footer">
                        <button className="account">
                            Already have an Account? Log in with Google/Facebook
                        </button>
                        <button className="sign">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        )
}

