import React from 'react'
import { DatabaseProvider } from '../Components/DatabaseContext'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import AddQuestion from '../Components/AddQuestion'
import Questions from '../Components/Questions'

function QuizPage() {
  return (
  
    <DatabaseProvider>
    <div> 
   <Sidebar/>
   <div className='container-fluid ' style={{marginTop:'40px'}}>
       <AddQuestion/>
       <Questions/>
   </div>
   <div className='row'> 
   
  
   </div>
  
  

<Footer/>
  </div>
  
  </DatabaseProvider>
  )
}

export default QuizPage