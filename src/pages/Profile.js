import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = (props) => {
    let {username} =  useContext(AppContext);

    return (
    <div>
        <div>Profile,The user is {username}</div>
        <ChangeProfile></ChangeProfile>
    </div>
)
}