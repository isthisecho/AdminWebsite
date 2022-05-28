import React from 'react'
import Users from '../Components/Users'
import { DatabaseProvider } from '../Components/DatabaseContext'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
function UsersPage() {
  return (
    <DatabaseProvider>
    <div>
 
   <Sidebar/>
   <div className='container-fluid ' style={{marginTop:'40px'}}></div>
   <div className='row'> 


   <div className='container col-sm-10 col-xs-10' ><Users/>  </div>
 
   </div>
  
<Footer/>
  </div>
  </DatabaseProvider>
  )
}

export default UsersPage