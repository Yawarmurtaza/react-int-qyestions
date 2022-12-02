import axios, { Axios } from "axios";
import { ServerResponse } from "http";
import { useEffect, useState } from "react";
import DisplayUserNameAndPhoto from "./components/DisplayUserData";

export default function GetDataFromApi() {
    const [randomUserData, setRandomUserData] = useState<any>();
    const url = "https://randomuser.me/api";

    useEffect(() => {

        async function getRandomUserData() {
            await new Promise(resolve => setTimeout(resolve, 0));
            try {

                axios.get(url).then(response => {
                    const userData = response.data.results[0];
                    console.log(userData);
                    setRandomUserData(userData);
                });
            } catch (ex) {
                console.log(ex);
            }
        }

        getRandomUserData();
    }, []);


    
    const name = randomUserData.user.name ;
    const photoUrl = randomUserData.picture.large;

    return (<DisplayUserNameAndPhoto name={name} photoUrl={photoUrl} />);
}