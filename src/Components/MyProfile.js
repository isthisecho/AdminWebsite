import React, { useContext } from 'react'
import { DatabaseContext } from './DatabaseContext'

function MyProfile() {
    const {userInfo} = useContext(DatabaseContext);
    const [userInfoValue,setUserInfoValue] = userInfo;

  return (
    <div class="card">
    <div class="card-header">
      My Profile
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>Name : {userInfoValue[0].firstName +"  "+ userInfoValue[0].Surname}</p>
        <p>Email : {userInfoValue[0].email }  <button type="button" style={{marginLeft:'20px'}} className="btn btn-primary">
    Change
</button> </p>
        <p >Password : **********       <button type="button" style={{marginLeft:'20px'}} className="btn btn-primary">
    Change
</button></p>
        <p >Courses Taken : {userInfoValue[0].takenCourses }  </p>
        <p class="card-text"> </p>

      </blockquote>
      
    </div>
    
  </div>
  )
}

export default MyProfile