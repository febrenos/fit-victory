import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { NotLoggedScreen } from "../access";
import { LoggedScreen } from "../activity";

export const ToggleAccess = () => {
    const {isLoggedIn} = useContext(AuthContext)

    if(isLoggedIn){
        return <LoggedScreen />
    }

    return <NotLoggedScreen />
}