import React from 'react'
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TateBook</h3>
                    <span className="loginDesc">Connect with friends and world around you on TateBook.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginBtn">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterBtn">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
