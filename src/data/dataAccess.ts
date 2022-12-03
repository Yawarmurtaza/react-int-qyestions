import axios from "axios";

export function GetRandomUserData(url: string): any{
    return axios.get(url).then(({data}) => {
        console.log(data);
        return data.results[0];
    })
    .catch((err) => {
        console.log(err);
        return null;
    });
}