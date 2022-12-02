import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function DisplayName(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (<label>{props.name}</label>);
}