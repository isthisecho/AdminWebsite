import React ,{useState, createContext,useEffect} from 'react'
import pdf1 from '../pdf/deneme.pdf'
export const DatabaseContext = createContext();

export const DatabaseProvider = props => {
    const userlist = [{
        ID:'1',
        firstName:'Ekrem',
        Surname:'Görgüç',
        email:"ekremberkgorguc@gmail.com",
        password:"1234567",
        takenCourses:['CMPE 472, ','CMPE 491 ']
    }
    ,
    {
        ID:'2',
        firstName:'Furkan',
        Surname:'Erkan',
        email:"furkanerkan@gmail.com",
        password:"zxcvb12",
        takenCourses:['CMPE 472, ',' CMPE 316, ',' CMPE 242 ']
    },
    {
      ID:'3',
      firstName:'Shelly',
      Surname:'Bates',
      email:"shelly.bates@example.com",
      password:"polo",
      takenCourses:['CMPE 316, ',' CMPE 242']
  },
  {
    ID:'4',
    firstName:'Virgil',
    Surname:'Butler',
    email:"virgil.butler@example.com",
    password:"morris",
    takenCourses:['CMPE 242']
},
{
  ID:'5',
  firstName:'Erik',
  Surname:'Holmes',
  email:"erik.holmes@example.com",
  password:"bears",
  takenCourses:['CMPE 472, ',' CMPE 492']
}
  ]
  const courses = [
    {
      name: 'CMPE 472',
      description: 'Lorem Ipsum',
      

    },
    {
      name: 'CMPE 491',
      description: 'Lorem Ipsum',
     

    },
    {
      name: 'CMPE 316',
      description: 'Lorem Ipsum',
      

    },
    {
      name: 'CMPE 242',
      description: 'Lorem Ipsum',
      

    },
  ]
  const quizzes = [
    {
      quizName:'Quiz 1',
      questionNumber:20,
      quizDate: "2022-05-17",
      startTime:'10:00',
      endTime:'11:00',
    },
    {
      quizName:'Quiz 2',
      questionNumber:20,
      quizDate:  "2022-05-23",
      startTime:'14:00',
      endTime:'15:00',
    },
    {
      quizName:'Quiz 3',
      questionNumber:20,
      quizDate:  "2022-05-20",
      startTime:'14:00',
      endTime:'15:00',
    },
    {
      quizName:'Quiz 4',
      questionNumber:20,
      quizDate:  "2022-05-26",
      startTime:'9:00',
      endTime:'10:00',
    },
  ]
    const initialQuizValues=[{questionNo:0,questionName:'',questionImage:''}];
    const initialQuizOptionValues={optionA:'',optionB:'',optionC:'',optionD:'',optionTrue:''};

    const initialCourseValues = { name: '', description: '',chapters:[{chapterName:'',chapterDescription:'',chapterMaterial:''}]};
    const initialChapterValues=[
      {chapterName:'Introduction to AI Part-1',chapterDescription:'This is the first chapter of this course',chapterPdf:{pdf1},chapterVideo:"https://www.youtube.com/watch?v=yN7ypxC7838"},
      {chapterName:'Introduction to AI Part-2',chapterDescription:'This is the second chapter of this course',chapterPdf:{pdf1},chapterVideo:"https://www.youtube.com/watch?v=6M5VXKLf4D4&t=1s"}];
    const [userInfo, setUserInfo] = useState(userlist);
    const [Quiz,setQuiz] = useState(quizzes);
    const [Course,setCourse]= useState(courses);
    const [Update,setUpdate] =useState(false);
    const [courseForm,setCourseForm] = useState(initialCourseValues);
    const [chapterForm,setChapterForm] = useState(initialChapterValues);
    const [questionForm,setquestionForm] =useState([]);
    const [questionAnswerForm,setQuestionAnswerForm] =useState([]);
    async function fetchData() {
       setUserInfo([...userInfo]);
      
      }


      useEffect(() => {
       
        fetchData();
        setUpdate(false);
      },[Update]);

    


  

  return (
   <DatabaseContext.Provider value={{
     userInfo: [userInfo, setUserInfo],
     Update: [Update,setUpdate],
     Course: [Course,setCourse],
     Quiz: [Quiz,setQuiz],
     courseForm: [courseForm,setCourseForm],
     chapterForm: [chapterForm,setChapterForm],
     questionForm: [questionForm,setquestionForm],
     questionAnswerForm: [questionAnswerForm,setQuestionAnswerForm]
    }}>
    {props.children}
   </DatabaseContext.Provider>
  )
}