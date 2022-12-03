import React, { useState } from 'react';
import './App.css';
import ButtonWithIncreament from './ButtonWIthIncreament';
import GetDataFromApi from './GetDataFromApi';
import { useEffect } from 'react';
import { GetRandomUserData } from './data/dataAccess';
import dataJson from "./data/randomUserdata.json";
import { UserInfoModel } from './UserInfoModel';
import UserInfoComponent from './GetDataFromApi';
import User from './components/User';
import Users from './components/Users';

function App() {
  const url = "https://randomuser.me/api";

  const [data, setData] = useState<any>();

  const [userData, setUserData] = useState<Array<UserInfoModel>>();

  useEffect(() => {
    //const userData = GetRandomUserData(url);
    setData(dataJson.results[0]);
  }, []);

  
  const data2 = dataJson.results[0];

  const userInfo: UserInfoModel = new UserInfoModel();
  userInfo.name = `${data2.name.title}. ${data2.name.first} ${data2.name.last}`;
  userInfo.pictureUrl = data2.picture.large;

  
  const userData: Array<UserInfoModel> = [userInfo];


  function AddUser(){
    
  }
  return (<div className="App">


    {userData.map(u => {
      return (
        <User name={u.name} pictureUrl={u.pictureUrl} />)
    })}
    <button className='btn btn-primary' onClick={AddUser}>Show More</button>


  </div>);
}

export default App;