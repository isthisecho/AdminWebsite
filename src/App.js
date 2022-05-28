import { render } from "react-dom";
import {
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignPage from './Pages/SignPage';
import Dashboard from "./Pages/Dashboard";
import UsersPage from "./Pages/UsersPage";
import ChaptersPage from "./Pages/ChaptersPage";
import MyProfilePage from "./Pages/MyProfilePage";
import QuizPage from "./Pages/QuizPage";
export default function Main() {

    return (
        <div>
           
        
          <Routes>
                    <Route path="signup" element={<SignPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/chapters" element={<ChaptersPage />} />
                    <Route path="/profile" element={<MyProfilePage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                  
                </Routes>
           
               
            

        </div>












    )
}