import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import DisplayName from "./DisplayName";
import PrintUserPhoto from "./PrintUserPhoto";

export default function DisplayUserNameAndPhoto(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; photoUrl: string | undefined; }) {
  
    return (
        <>
            <DisplayName name={props.name} />
            <PrintUserPhoto photoUrl={props.photoUrl} />
        </>
    );
}