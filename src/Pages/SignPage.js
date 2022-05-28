
import "../Styles/SignPage.css";
import tempimage from '../images/rocket.png'
import {Signup} from '../Components/Signup';
import { DatabaseProvider } from "../Components/DatabaseContext";
import Footer from "../Components/Footer";
function App() {
  return (
    <DatabaseProvider>

    <div className='container mt-5'>

      <div className='row'>
        <div className='col-md-5'>
          <Signup/>
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

export default App;
