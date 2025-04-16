import { useEffect, useState } from 'react';
import { db } from '../config/firebaseAuth';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';

import NewEntry from './newData';

export default function Chatbox(props) {

    const [data , setData] = useState([]);

    // const getData = async () => {
    //     console.log("REQUEST MADE");
    //     try {
    //         const collectionReference = collection(db, 'chatbox');
    //       const q = query(collectionReference, orderBy('createdAt', 'asc'));
    //       const snapshot = await getDocs(q);
    //       // console.log(q);
    //       const filterData = snapshot.docs.map((doc) => ({...doc.data() , id: doc.id}));
    //       setData(filterData);
    //       // console.log(filterData);
    //     } catch (err) {
    //       console.log(err);
    //     }
        
    //   }
    

    useEffect(() => {
        // getData();
        console.log("Request created");
        const q = query(collection(db, 'chatbox'), orderBy("createdAt", "desc"))
        const un = onSnapshot(q, snapshot => {
            setData(snapshot.docs.map(doc => (
                {...doc.data() , id: doc.id}
            )))
        })
        return un
    },[]);

    const deleteData = async (id) => {
        const toDeleteData = doc(db, "chatbox", id);
        try {
            await deleteDoc(toDeleteData);
        }
        catch(err)
        {
            console.log("error");
        }
    }

    return (
        <div className="chatboxcontainer p-4 mb-12 max-md:p-0">
            {data && data.map((msg) => (
                <div key={msg.id} 
                    style={ msg.username === props.displayName ? {flexDirection: 'row-reverse'} : {flexDirection : 'row'}}
                    className='messagebox w-full flex m-2 p-2 rounded-md max-md:m-0' 
                >
                    <p 
                        style={ msg.username === props.displayName ? {backgroundColor: '#64748B'} : {backgroundColor: '#475569'}}
                        className='text-slate-50 p-2 rounded-lg text-left'
                    >{msg.username === props.displayName ? "" : msg.username + " - " }  {msg.message} {msg.username === props.displayName ? 
                    <button onClick={() => {deleteData(msg.id)}} 
                    className='deletebtn transition-all delay-0 bg-red-400 ml-1 px-2 text-black rounded-md hover:font-bold hover:bg-red-500' 
                    > X </button> : ""}</p>
                </div>
            ))}
            <NewEntry username = {props.displayName} />
        </div>
    )
}