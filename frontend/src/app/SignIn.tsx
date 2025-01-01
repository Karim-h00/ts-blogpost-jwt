import { useState } from "react";
function SignIn() {
    const[data, setData] = useState({});
    function handleChange(){
        console.log("working")
    }
    return (
        <div className="sign-in-card">
            <div>
                <label htmlFor="usrname">Username</label>
                <input type="text" name="username" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button>sign In</button>
            </div>
        </div>
    )
}
export default SignIn