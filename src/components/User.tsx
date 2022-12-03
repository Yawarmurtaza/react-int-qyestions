import { UserInfoModel } from "../UserInfoModel";
import DisplayName from "./DisplayName";
import PrintUserPhoto from "./PrintUserPhoto";

const DisplayUserNameAndPhoto: React.FC<UserInfoModel> = (props: UserInfoModel) => {
  
    const userInfo = props;
    console.log(userInfo.name);
    console.log(userInfo.pictureUrl);
    return (
        <>
            <DisplayName name={userInfo.name} />
            <PrintUserPhoto pictureUrl={userInfo.pictureUrl} />
        </>
    );
}

export default DisplayUserNameAndPhoto;