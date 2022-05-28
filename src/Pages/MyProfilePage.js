import React from 'react';
import MyProfile from '../Components/MyProfile';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { DatabaseProvider } from '../Components/DatabaseContext';
function MyProfilePage() {
  return (
    <DatabaseProvider>
        
    <div>
 
   <Sidebar/>
   <div className='container-fluid ' style={{marginTop:'40px'}}></div>
   <div className='row'> 


   <div className='container col-sm-10 col-xs-10' > <MyProfile/>  </div>
 
   </div>
  
<Footer/>
  </div>
  </DatabaseProvider>
  )
}

export default MyProfilePage