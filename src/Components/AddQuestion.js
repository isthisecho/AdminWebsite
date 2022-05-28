import React, { useContext,useState} from 'react'
import { DatabaseContext } from './DatabaseContext';

function AddQuestion() {
    const initialQuizValues={questionID:1,questionName:'',questionImage:'',A:'',B:'',C:'',D:'',optionTrue:''};

    const {questionForm} = useContext(DatabaseContext);
    const [questionFormValue,setQuestionFormValue] = questionForm;


    const [questionFormValues, setQuestionFormValues] = useState(initialQuizValues);
    const [incrementID,setIncrementID] = useState(1);
    const onImageChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setQuestionFormValues({ ...questionFormValues, questionImage: URL.createObjectURL(e.target.files[0]) });
    
        }
       }
    const clearFields = () => {
        document.querySelectorAll("#inputID").forEach(
            input => (input.value = "")
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setIncrementID(incrementID+1);
        setQuestionFormValues({ ...questionFormValues, questionID: incrementID });
       
        setQuestionFormValue([...questionFormValue , questionFormValues] );
        setQuestionFormValues(initialQuizValues);
        clearFields();
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;   
        setQuestionFormValues({ ...questionFormValues, [name]: value });
         console.log(questionFormValues);

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '40px' }}>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenterquiz"

            >
                Add Question
            </button>

            <div class="modal fade" data-bs-backdrop="static" id="exampleModalCenterquiz" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add Question</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Question Description</label>
                                <input type="text" class="form-control" name='questionDescription' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" placeholder="Question Description" />
                                <small id="emailHelp" class="form-text text-muted">Enter your Question here.</small>
                            </div>


                            <div className="mb-3" style={{ marginTop: '20px' }}>
                                <label for="exampleInputEmail1">Question Image &#x28; Not Required &#x29;</label>
                                <input className="form-control" name='questionImage'  onChange={(e) => { onImageChange(e); }} type="file" id="formFile" accept="image/*"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Option A</label>
                                <input type="text" class="form-control" name='A' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" placeholder="" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Option B</label>
                                <input type="text" class="form-control" name='B' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" placeholder="" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Option C</label>
                                <input type="text" class="form-control" name='C' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" placeholder="" />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1" >Option D</label>
                                <input type="text" class="form-control" name='D' onChange={(e) => { handleChange(e); }} id="inputID" aria-describedby="emailHelp" placeholder="" />

                            </div>
                            <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1"  defaultValue=''>Right Answer is; </label>
                                    <select className="form-control"  name='optionTrue' onChange={(e) => { handleChange(e); }} id="exampleFormControlSelect1"> 
                                        <option disabled selected value> -- select an option --</option>
                                        <option> A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>


                                    </select>
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => handleSubmit(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion