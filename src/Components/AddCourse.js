import React,{useContext,useState} from 'react'
import { DatabaseContext } from './DatabaseContext';
function AddCourse() {
  const { Course } = useContext(DatabaseContext);
  const [CourseValue, setCourseValue] = Course;
  const {courseForm} =useContext(DatabaseContext);
  const [courseFormValue,setCourseFormValue] = courseForm;

  const clearFields = () => {
    document.querySelectorAll("#inputID").forEach(
      input => (input.value = "")
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(CourseValue);
    setCourseValue([...CourseValue , courseFormValue] );
    console.log(CourseValue);
    clearFields();
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCourseFormValue({ ...courseFormValue, [name]: value });
    
  }
  return (
    <div className='container col-sm-10 col-xs-10' style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '40px' }}>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
      style={{ marginLeft: '15px' }}
    >
      Add Course
    </button>

  <div class="modal fade" data-bs-backdrop="static" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Add Course</h5>
        </div>
        <div class="modal-body">
          <form >
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Course Name</label>
              <input type="text" onChange={(e) => { handleChange(e); }} name='name' class="form-control" id="inputID" aria-describedby="emailHelp" placeholder="Course Name" />
              <small id="emailHelp" class="form-text text-muted">Enter your Course Code here.</small>
              <label htmlFor="exampleInputPassword1">Course Description</label>
              <textarea name='description' onChange={(e) => { handleChange(e); }} class="form-control" placeholder='Description' id="inputID" rows="3"></textarea>
              <small id="description" class="form-text text-muted">Enter your course description here.</small>
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onClick={(e) => handleSubmit(e)}
          >Save changes</button>
        </div>
      </div>
    </div>
  </div>

</div>
  )
}

export default AddCourse