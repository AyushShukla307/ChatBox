import Chatbox from "./chatbox";

export default function WelcomePage(props) {
    return(
        <div className="welcome">
            <h1 className="text-2xl max-md:text-xl font-bold m-4" style={{textAlign: 'center'}}>Welcome, {props.email}</h1>
            <Chatbox displayName={props.email}/>
        </div>
    )
}