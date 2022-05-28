import React, { useContext, useEffect ,useState } from 'react'
import { DatabaseContext } from './DatabaseContext';
function Questions() {
    
    const { questionForm } = useContext(DatabaseContext);
    const [questionFormValue, setQuestionFormValue] = questionForm;
   
    const [update,setUpdate] = useState(false);

    const removeQuestion = (e, index) => {
        e.preventDefault();
        questionFormValue.splice(index, 1);
        setUpdate(true);

    }
    useEffect(() => {
        setQuestionFormValue([...questionFormValue]);
        setUpdate(false);
    }, [update]);

    return (
        <div>
            {questionFormValue.map((item, index) => {
                return (

                    <>

                        <div className="accordion accordion-flush" id="accordionFlushExample">



                            <div className="card" style={{ marginBottom: '25px' }}>
                                <h3 className="card-header">
                                    Question  {index + 1}
                                </h3>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ marginBottom: '40px' }}>{item.questionDescription} </h5>

                                    <p className="card-text" >
                                        {item.questionImage !== '' && (
                                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}>
                                                <img src={item.questionImage} alt="preview image" height='50%' width='50%' />
                                            </div>
                                        )
                                        }


                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                A :  {item.A}
                                            </label>


                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                B :  {item.B}
                                            </label>


                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                C :  {item.C}
                                            </label>


                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                D  :  {item.D}
                                            </label>


                                        </div>

                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '25px' }}>
                                        <button className='btn btn-danger' style={{ marginLeft: '20px' }} onClick={(e) => removeQuestion(e, index)}>
                                            Delete
                                        </button>


                                    </div>



                                </div>
                            </div>

                        </div>


                    </>

                );
            })}
        </div>

    )
}

export default Questions