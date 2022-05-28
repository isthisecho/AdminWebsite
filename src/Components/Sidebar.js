import React, { useContext, useState } from 'react';
import { DatabaseContext } from './DatabaseContext';
import '../Styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


function Sidebar() {

    const { Course } = useContext(DatabaseContext);
    const { Quiz } = useContext(DatabaseContext);
    const [CourseValue, setCourseValue] = Course;
    const [QuizValue, setQuizValue] = Quiz;
    const [sidebar, setSidebar] = useState(false);
    const [toggleCourse, setToggleCourse] = useState(false);
    const [toggleQuiz, setToggleQuiz] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const showCourses = () => setToggleCourse(!toggleCourse);
    const showQuizzes = () => setToggleQuiz(!toggleQuiz);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />

                    </Link>

                    <div className="navbar-nav me-auto mb-2 mb-lg-0">

                    </div>
                    <div className="dropdown-center" style={{ marginRight: '30px' ,zIndex:'2!important'}}>
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"
                        >
                            My Profile
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                            <li><a className="dropdown-item" href="/login">Logout</a></li>
                        </ul>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle' onClick={showSidebar}>

                            <Link to='#' className='menu-bars'>

                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <div className='nav-text'>
                            <a className='nav-header' href='/'>Home</a>
                        </div>
                        <div className='nav-text'>
                            <a className={toggleCourse ? 'nav-header active' : 'nav-header'} onClick={showCourses}>Courses</a>
                        </div>
                        {toggleCourse && CourseValue.map((item, index) => {

                            return (
                                <li key={index} className='nav-text'>


                                    <a href='/chapters' className='nav-text'>{item.name}</a>

                                </li>
                            );
                        })}
                        <div className='nav-text'>
                            <a className={toggleQuiz ? 'nav-header active' : 'nav-header'} onClick={showQuizzes}>Quizzes </a>

                        </div>
                        {toggleQuiz && QuizValue.map((item, index) => {

                            return (
                                <li key={index} className='nav-text'>


                                    <a href='/quiz' className='nav-text'>{item.quizName}</a>

                                </li>
                            );
                        })}

                        <div className='nav-text'>
                            <a className='nav-header' href='/users'>Users </a>

                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar