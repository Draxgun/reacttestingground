import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
    let [newUsername, setNewUsername] = useState("");
    let {username , setUsername} =  useContext(AppContext);
    
    return (
        <div>
            <input 
                onChange={(event) => {
                    setNewUsername(event.target.value)}}
            />
            <button 
            onClick= {() => 
                setUsername(username = newUsername)
            }
            >Change Username</button>
        </div>
    )

};