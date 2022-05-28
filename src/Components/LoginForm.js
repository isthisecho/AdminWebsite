import React, { useContext, useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DatabaseContext, DatabaseProvider } from "./DatabaseContext";
import '../Styles/LoginPage.css';
export const LoginForm = () => {
    let navigate = useNavigate();
    const {userInfo} = useContext(DatabaseContext);
    const [userInfoValue,setUserInfoValue] = userInfo;

    const [wrong, setWrong] = useState(false);
    const [alert, setAlert] = useState('');
    var temp = '';
    const checkLogin = async (values) => {
        
      
        await userInfoValue.map(item => {
            if (values.email === item.email && values.password === item.password) {
                
            navigate('/');
             

            }
        
            if (values.email !== item.email) {
               
                setAlert('Email Or Password is Wrong !');
                setWrong(true);
            }

        })
        ;





    };
    const validate = Yup.object({

        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().required(' Password is required'),


    })
    return (
    
 <Formik
            initialValues={{

                email: '',
                password: ''

            }}
            validationSchema={validate}
            onSubmit={values => {
                checkLogin(values);

            }}
        >
            {formik => (
                <div className='row'>
                    <div className='col-md-10' style={{ marginTop: "15%" }}>
                        <h1 className='my-5 font-weight-bold-display-4' style={{ color: "black", fontSize: "3em", marginLeft: "30%" }}>Login</h1>
                        <Form>

                            <TextField label="Email" name="email" type="text"/>
                            <TextField label="Password" name="password" type="password" />

                            <button className='btn btn-primary mt-3' type="submit" disabled={!formik.isValid}>Login</button>
                            {wrong && (
                                <div className="alert alert-danger" style={{ marginTop: '20px' }} role="alert">
                                    {alert}
                                </div>
                            )}

                        



                        </Form>
                        &nbsp;





                        <Link to="/signup" d style={{ color: "#1a83ff" }}  >
                            <h6 style={{ fontWeight: "bold", textDecoration: " underline" }}>Haven't You Signed Up ?</h6>
                        </Link>

                    </div>
                </div>
            )

            }
        </Formik >
    
       
    )
}

export default LoginForm;
