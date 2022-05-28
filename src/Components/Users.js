import React, { useContext, useEffect, useState } from 'react'
import { DatabaseContext } from './DatabaseContext'

function Users() {
    const { userInfo } = useContext(DatabaseContext);
    const [userInfoValue, setUserInfoValue] = userInfo;
    const [update,setUpdate] = useState(false);
    const removePerson = (e,index) => {
        e.preventDefault();
        userInfoValue.splice(index, 1);
       setUpdate(true);
    }
    useEffect(() => {   
        setUserInfoValue([...userInfoValue]);
        setUpdate(false);
      },[update]);
    
    return (
        <div><table class="table">
            <thead class="table-dark" >
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Courses</th>
                    <th scope="col">Badges</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {userInfoValue.map((item, index) => {
                    return (
                        <tr>
                            <th scope="row">{item.ID}</th>
                            <td>{item.firstName}</td>
                            <td>{item.Surname}</td>
                            
                            <td>{item.takenCourses} </td>
                            <td>None</td>
                            <td> 
                          
                            <button className='btn btn-danger' onClick={(e) => removePerson(e,index)}>Delete</button>
                            </td>
                           
                        </tr>
                    );
                })}
            </tbody>
        </table>

        </div>
    )
}

export default Users