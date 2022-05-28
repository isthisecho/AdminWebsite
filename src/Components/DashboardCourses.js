import React, { useContext,useState,useEffect } from 'react'
import { DatabaseContext, DatabaseProvider } from './DatabaseContext';
import image from '../images/cardimage.jpg' ;
import { useNavigate } from 'react-router-dom';
import '../Styles/DashboardCourses.css';
function DashboardCourses() {
    let navigate = useNavigate();
    const {chapterForm} =useContext(DatabaseContext);
    const [chapterFormValue,setChapterFormValue] = chapterForm;
    const [update,setUpdate] = useState(false);

    const removeCourse = (e, index) => {
        e.preventDefault();
        CourseValue.splice(index, 1);
        setUpdate(true);
  
    }
    useEffect(() => {
      setCourseValue([...CourseValue]);
        setUpdate(false);
    }, [update]);
  

    const handleSubmit = (e,name,description,item) => {
        e.preventDefault();
       
        setChapterFormValue({[name]:name,[description]:description} );
        navigate('/chapters');
        console.log(item.chapters[0].chapterName);
      }
    
    const { Course } = useContext(DatabaseContext);
    const [CourseValue, setCourseValue] = Course;

    return (
     
<>
<div style={{display:'flex',justifyContent:'space-between'}}>
<h1 style={{marginBottom:'35px'}}>Courses</h1>
</div>

<div className='deneme' style={{display:'flex',flexDirection:'row', gap:'12px',marginTop:'0px'}}>
         
                {CourseValue.map((item, index) => {
                    return(
                        <div className="card" key={index} style={{ width: '18rem'}}>
                            <img src={image} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description} </p>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <a href="/chapters"  className="btn btn-primary" onClick={(e) => handleSubmit(e,item.name,item.description,item)}>Go to Course</a>
                                <button className='btn btn-danger' style={{ marginLeft: '20px' }} onClick={(e) => removeCourse(e, index)}>
                                            Delete
                                        </button>
                                </div>
                              
                            </div>
                        </div>
                    );
                })}

            </div>
</>
          
      



    )
}

export default DashboardCourses