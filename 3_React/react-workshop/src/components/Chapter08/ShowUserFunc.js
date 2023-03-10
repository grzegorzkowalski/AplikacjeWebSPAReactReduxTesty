import {useState} from "react";

const ShowUserFunc = ({name, surname}) => {
    const [user, setUser] = useState("");
    const clickHandler = (e, name = "Grzegorz", surname = "Trener") => {
        console.log(e);
        setUser(`${name} ${surname}`);
    }
    return (
        <>
            <button onClick={(e) => clickHandler(e, name, surname )}>Dane użytkownika</button>
            <h1>{user}</h1>
        </>
    );
};

export default ShowUserFunc;
