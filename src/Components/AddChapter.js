import React, { useContext, useState } from 'react'
import { DatabaseContext } from './DatabaseContext';
function AddChapter() {
    const initialchapter={chapterName:'',chapterDescription:'',chapterPdf:null,chapterVideo:null};
    const [formValues, setFormValues] = useState(initialchapter);
    const { chapterForm } = useContext(DatabaseContext);
    const [chapterFormValue, setChapterFormValue] = chapterForm;
    
     const handleVideoUpload = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, chapterVideo: URL.createObjectURL(e.target.files[0]) });
        console.log(formValues);
    };

    const handlePdfUpload = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, chapterPdf: URL.createObjectURL(e.target.files[0]) });
        console.log(formValues);
    };
    

    const clearFields = () => {
        document.querySelectorAll("#inputID").forEach(
            input => (input.value = "")
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        setChapterFormValue([...chapterFormValue, formValues]);
        console.log(chapterFormValue);
        clearFields();
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }
    return (
        <div>
            <div className='container col-sm-10 col-xs-10' style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '40px' }}>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"

                >
                    Add Chapter
                </button>

            </div>



            <div className="modal fade" data-bs-backdrop="static" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Chapter</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Chapter Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name='chapterName' onChange={(e) => { handleChange(e); }} aria-describedby="emailHelp" placeholder="Chapter Name" />
                                    <small id="emailHelp" className="form-text text-muted">Enter your Chapter Code here.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Chapter Description</label>
                                    <textarea className="form-control" name='chapterDescription' onChange={(e) => { handleChange(e); }} placeholder='Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <small id="emailHelp" className="form-text text-muted">Enter your chapter description here.</small>
                                </div>
                            
                                <div className="mb-3" style={{ marginTop: '20px' }}>
                                    <label htmlFor="formFile" className="form-label">Upload Pdf</label>
                                    <input className="form-control" name='chapterPdf' onChange={(e) => { handlePdfUpload(e); }}  type="file" id="formFile" />
                                </div>
                                <div className="mb-3" style={{ marginTop: '20px' }}>
                                    <label htmlFor="formFile" className="form-label">Upload Materials</label>
                                    <input className="form-control" name='chapterVideo' onChange={(e) => { handleVideoUpload(e); }}  type="file" id="formFile" />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => handleSubmit(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddChapter