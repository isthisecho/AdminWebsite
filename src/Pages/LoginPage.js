
import '../Styles/LoginPage.css';
import tempimage from '../images/rocket.png'
import {LoginForm} from '../Components/LoginForm';
import { DatabaseProvider } from '../Components/DatabaseContext';
import Footer from '../Components/Footer';
function LoginPage() {
  return (
    <DatabaseProvider>

    <div className='container mt-5'>

      <div className='row'>
        <div className='col-md-5'>
          <LoginForm/>
          </div>
          <div className='col-md-7 my-auto'>
            <img className="img-fluid w-100" src={tempimage} alt="image"></img>
          </div>
         </div>
         <Footer/>
    </div>
    </DatabaseProvider>
  );
}

export default LoginPage;
