import React, { useState } from "react";


import UserContext from "./UserContext";

export const UserState = (props) => {

    const data = {
        "customerid": "",
        "fname": "",
        "lname": "",
        "address": "",
        "email": "",
        "mob1": "",
        "mob2": "",
        "crtype": "",
        "crno": "",
        "aadhar": "",
        "dob": "",
        "nation": "",
        "state": "",
        "city": "",
        "zip": "",
        "dlno": "",
        "dlvalidthrough": "",
        "passportno": "",
        "passvalidthrough": "",
         "prefcartype": "",
        "password": "",
        "flag": "0"

    }

     


    const [state, setState] = useState(data);


    return (
        <>
            <UserContext.Provider value={{ state, setState }}>

                {props.children}
            </UserContext.Provider>
        </>
    )
}
