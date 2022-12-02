
export default function PrintUserPhoto(props: { photoUrl: string | undefined; }) {
    
    return (<div>
        <img alt="userPhoto" src={props.photoUrl} /></div>);
}