import { useState } from 'react';
import './App.css';

import SignUp from './pages/signUp.js';
import SignIn from './pages/signIn.js';

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);


  return (
    <div className="App text-right m-2 max-md:text-center selection:bg-orange-300">
      { <button  onClick={() => {setSignIn(true); setSignUp(false)}}
        className='signButton transition-all delay-0 bg-slate-600 text-slate-50 px-2 py-2 m-2 rounded-md hover:scale-110 hover:bg-orange-300'
      >Sign In</button>}

      { <button onClick={() => {setSignUp(true); setSignIn(false)}}
        className='signButton transition-all delay-0 bg-slate-800 text-slate-50 px-2 py-2 m-2 rounded-md hover:scale-110 hover:bg-orange-300' 
      >Sign Up</button>}
      {signUp && <SignUp />}
      {signIn && <SignIn />}
    </div>
  );
}

export default App;
