import React ,{useState} from 'react'
import { DatabaseProvider } from '../Components/DatabaseContext';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import AddChapter from '../Components/AddChapter';
import Chapters from '../Components/Chapters';
function ChaptersPage() {

  return (

    <DatabaseProvider>
    <div> 
   <Sidebar/>
   <div className='container-fluid ' style={{marginTop:'40px'}}>
  <AddChapter/>
  <Chapters/>
   </div>
   <div className='row'> 
   
  
   </div>
  
  

<Footer/>
  </div>
  
  </DatabaseProvider>
  )
}

export default ChaptersPage