
export default function PrintUserPhoto(props: { pictureUrl: string | undefined; }) {
    
    return (<div>
        <img alt="userPhoto" src={props.pictureUrl} /></div>);
}