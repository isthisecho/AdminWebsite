import React, { useContext ,useEffect,useState} from 'react'
import { DatabaseContext, DatabaseProvider } from './DatabaseContext';
import image from '../images/cardimage.jpg'
import '../Styles/DashboardCourses.css'
function DashboardQuizzes() {
    const { Quiz } = useContext(DatabaseContext);
    const [QuizValue, setQuizValue] = Quiz;
    const [update,setUpdate] = useState(false);

    const removeQuiz = (e, index) => {
        e.preventDefault();
        QuizValue.splice(index, 1);
        setUpdate(true);
  
    }
    useEffect(() => {
      setQuizValue([...QuizValue]);
        setUpdate(false);
    }, [update]);

    return (
     
<>
<div style={{display:'flex',justifyContent:'space-between'}}>
<h1 style={{marginBottom:'35px'}}>Quizzes</h1>

</div>
<div  className='deneme' style={{display:'flex',flexDirection:'row', gap:'8px'}}>
         
                {QuizValue.map((item, index) => {
                    return(
                        <div className="card" key={index} style={{ width: '18rem' }}>
                            <img src={image} class="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title" style={{display:'flex',justifyContent:'center'}}>{item.quizName}</h5>
                                <p className="card-text" style={{display:'flex',justifyContent:'center'}}>Date: {item.quizDate} </p>
                                <div style={{display:'flex',flexDirection:'row' ,fontSize:14 ,justifyContent:'space-between'}}>
                                <p className="card-text" >Start Time : {item.startTime} </p>
                                <p className="card-text">End Time: {item.endTime} </p>
                                </div>    
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <a href="/quiz" className="btn btn-primary">Go to Quiz</a>
                                <button className='btn btn-danger' style={{ marginLeft: '20px' }} onClick={(e) => removeQuiz(e, index)}>
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

export default DashboardQuizzes