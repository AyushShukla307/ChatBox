import { auth } from '../config/firebaseAuth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import WelcomePage from './welcome';

export default function SignIn() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const [success , setSuccess] = useState(false);
        const [error , setError] = useState(false);
    
        const [userEmail, setUserEmail] = useState("");
        const [signIn, setSignIn] = useState(true);
    
        const SignInFunction = async () => {
            await signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUserEmail(user.user.email);
                setSuccess(true);
                setError(false);
                setEmail("");
                setPassword("");
                setSignIn(false);
            })
            .catch((err) => {
                setError(true);
                setSuccess(false);
                setEmail("");
                setPassword("");
            })
        }
    
        return (
            <div>
                {
                signIn && 
                <div className="signincontainer flex mt-12 justify-around text-center">
                    <div className='bg-slate-400 w-6/12 px-4 py-8 rounded-md shadow-2xl'>
                    <h1 className='text-3xl font-bold underline mb-4'>Sign In</h1>
                    <input type="email" placeholder="Email" value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        className='w-6/12 p-1 m-3 hover:bg-slate-200 focus:bg-slate-200 outline-none border-none'
                    autoFocus
                    required/> <br/>
                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        onKeyDown={(e) => {if (e.key === 'Enter') {SignInFunction()}}}
                        className='w-6/12 p-1 m-3 hover:bg-slate-200 focus:bg-slate-200 outline-none border-none'
                    required/> <br/>
                    <button onClick={SignInFunction}
                        className='transition-all delay-0 bg-slate-600 text-white p-2 mt-3 w-4/12 rounded-md hover:scale-110'
                    >Sign In</button>
                    </div>
                </div>
                }
    
                {
                success && 
                    <div>
                        <WelcomePage email={userEmail}/>
                    </div>
                }
                
                {error && <h1>Error</h1>}
    
            </div>
        )
}