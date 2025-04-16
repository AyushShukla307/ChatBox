import { useState } from 'react';
import { db } from '../config/firebaseAuth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default function NewEntry(props) {
    // props.username

    const [message, setMessage] = useState("");
    
    const addNew = async (e) => {
        e.preventDefault();
        const collectionReference = collection(db, 'chatbox');
        if (message !== "")
        {
            try{
                await addDoc(collectionReference , {
                    message : message,
                    username : props.username,
                    createdAt : serverTimestamp()
                })
                setMessage("");
            }
            catch(err)
            {
                console.log("Error sending message");
            }
        }
    }

    return(
        <div className='entry fixed left-0 bottom-0 w-full bg-slate-600 text-center p-4 mt-4 rounded-md'>
            <form onSubmit={addNew} className='flex justify-evenly max-md:block'>
                <input type="text" placeholder="Message" value={message} onChange={(e) => {setMessage(e.target.value)}} 
                    className='w-11/12 p-2 outline-none border-b-2 border-orange-400 rounded-md max-md:w-full'
                autoFocus/> <br/>
                <button type='submit'
                    className='bg-slate-400 transition-all ease-in-out delay-0 w-1/12 ml-2 p-2
                    text-white rounded-md hover:font-bold hover:bg-orange-300
                    max-md:bg-orange-300 max-md:w-full max-md:m-0 max-md:mt-2'
                >Send</button>
            </form>
        </div>
    )
}