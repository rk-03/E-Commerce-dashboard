// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         let result = await fetch("http://127.0.0.1:5000/login", {
//             method: 'post',
//             body: JSON.stringify({ email, password }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         result = await result.json();
//         console.warn(result)
//         if (result.name) {
//             localStorage.setItem('user', JSON.stringify(result));
//             // localStorage.setItem('token', JSON.stringify(result.auth));
//             navigate("/")
//         } else {
//             alert("Please enter connect details")
//         }
//     }
//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input
//                 className="inputBox"
//                 type="text"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 className="inputBox"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin} className="appButton" type="button">Login</button>
//             {error && <p className="error-message">{error}</p>}
//             <p>
//                 Don't have an account? <span onClick={() => navigate('/signup')} className="signup-link">Sign Up</span>
//             </p>
//         </div>
//     );
// };

// export default Login;











// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// const Login = () => {

//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const navigate = useNavigate();

//     // useEffect(() => {
//     //     const auth = localStorage.getItem('user');
//     //     if (auth) {
//     //         navigate("/")
//     //     }
//     // }, [])



//     return (
//         <div className='login'>
//             <h1>Login</h1>
//             <input type="text" className="inputBox" placeholder='Enter Email'
//                 onChange={(e) => setEmail(e.target.value)} value={email} />
//             <input type="password" className="inputBox" placeholder='Enter Password'
//                 onChange={(e) => setPassword(e.target.value)} value={password} />
//             <button onClick={handleLogin} className="appButton" type="button">Login</button>
//         </div>
//     )
// }

// export default Login;











//******************************************************************************


import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { isAuthenticated, loginWithPopup } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
            loginWithPopup();
        }
    }, [isAuthenticated, loginWithPopup]);

    return null; 
};

export default Login;






