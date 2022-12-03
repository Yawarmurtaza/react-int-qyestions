
import { ServerResponse } from "http";
import { useEffect, useState } from "react";
import DisplayUserNameAndPhoto from "./components/User";
import { GetRandomUserData } from "./data/dataAccess";
import useRandomUserData from './hooks/useRandomUserDatahook';
import { UserInfoModel } from './UserInfoModel';

export default function UserInfoComponent(userInfo: UserInfoModel) {
   
     
    
     //console.log(data.name);
    // const photoUrl = randomUserData.picture.large;
    // return (<DisplayUserNameAndPhoto name={name} photoUrl={photoUrl} />);
    return (<pre></pre>);
}