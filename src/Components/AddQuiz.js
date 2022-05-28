import React,{useState,useContext}  from 'react'
import { DatabaseContext } from './DatabaseContext';

function AddQuiz() {
  const {Quiz} = useContext(DatabaseContext);
  const [QuizValue,setQuizValue] = Quiz;

  const initialQuizValues= {
    quizName:'',
    courseName:0,
    quizDate: '',
    startTime:'',
    endTime:'',
  };
  const [formValues, setFormValues] = useState(initialQuizValues);
  const clearFields = () => {
    document.querySelectorAll("#inputID").forEach(
      input => (input.value = "")
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
     setQuizValue([...QuizValue , formValues] );
    
     clearFields();
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '40px' }}>
 
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenterquiz"
     
    >
      Add Quiz
    </button>

  <div class="modal fade" data-bs-backdrop="static" id="exampleModalCenterquiz" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Add Quiz</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="exampleInputEmail1" >Quiz Name</label>
            <input type="text" class="form-control" name='quizName'  onChange={(e) => { handleChange(e); }}  id="inputID" aria-describedby="emailHelp" placeholder="Quiz Name" />
            <small id="emailHelp" class="form-text text-muted">Enter your Quiz Code here.</small>
          </div>
          <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1"  defaultValue=''>Select Course</label>
                                    <select className="form-control"  name='courseName' id="exampleFormControlSelect1" onChange={(e) => { handleChange(e); }} >
                                    <option disabled selected value> -- select a course --</option>
                                        <option>CMPE 472</option>
                                        <option>CMPE 242</option>
                                        <option>CMPE 316</option>
                                        <option>CMPE 492</option>


                                    </select>
                                </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Quiz Date</label>
            <input type="date" class="form-control"  name='quizDate' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" placeholder="Course Name" />
            <small id="emailHelp" class="form-text text-muted">Enter your Quiz Date here.</small>
          </div>
          <div class="form-group" style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
            <label for="exampleInputEmail1" style={{ marginRight: '15px' }}>Start Time</label>
            <input type="time" class="form-control"   name='startTime' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" />
            <label for="exampleInputEmail1" style={{ marginLeft: '25px' }}>End Time</label>
            <input type="time" class="form-control"  name='endTime'  onChange={(e) => { handleChange(e); }} style={{ marginLeft: '25px' }} id="inputID" aria-describedby="emailHelp" />


          </div>
         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onClick={(e) => handleSubmit(e)}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddQuiz