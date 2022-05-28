import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { DatabaseContext, DatabaseProvider } from '../Components/DatabaseContext';
import DashboardCourses from '../Components/DashboardCourses';
import Sidebar from '../Components/Sidebar';
import DashboardQuizzes from '../Components/DashboardQuizzes';
import Footer from '../Components/Footer';
import AddCourse from '../Components/AddCourse';
import AddQuiz from '../Components/AddQuiz';

function Dashboard() {


  return (

    <DatabaseProvider>
      <div style={{}}>
        <Sidebar />
        <div className='container-fluid ' style={{ marginTop: '40px' }}></div>
        <div className='row'>
       <div  className='container col-sm-10 col-xs-10' style={{ display: 'flex', flexDirection: 'row'}}>
       <AddCourse/>
        <AddQuiz/>
       </div>
       
       
       
          
        
          <div className='container col-sm-10 col-xs-10'><DashboardCourses />  </div>
          <div className='container col-sm-10 col-xs-10' style={{ marginTop: '50px' }}><DashboardQuizzes />  </div>
        </div>



        <Footer />
      </div>

    </DatabaseProvider>
  )
}

export default Dashboard