import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
    let {username} =  useContext(AppContext);
    return (
    <div>
        This is a homepage and the user is {username}
    </div>
    );
};