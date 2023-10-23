import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TateBook</h3>
                    <span className="loginDesc">Connect with friends and world around you on TateBook.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginBtn">Sign Up</button>
                        <button className="loginRegisterBtn">Log Into Existing Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}