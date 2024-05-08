//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import ListCake from './ListCake';
import UserList from './UserList';
//import Datatable from './Datatable';
import SignUp from './SignUp';
import Meeting from './Meeting';
import StudentsHK from './StudentsHK';
import PersonDetails from "./personDetails";
import ForgetPassword from "./ForgetPassword";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from './Products';
import Admin from './Admin';
import EditUSer from './EditUser';
import Search from './Search';
import CakeDetails from './CakeDetails';
import Cart from './Cart';
function App() 
{
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ListCake></ListCake>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/personDetails' element={<personDetails></personDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/editUser/:userid' element={<EditUSer></EditUSer>}></Route>
        {/* <Route path='/listCake' element={<ListCake></ListCake>}></Route> */}
        <Route path ='/search' element={<Search></Search>}></Route>
        {/* <Route path ='/cakeList' element={<ListCake></ListCake>}></Route> */}
        <Route path='/details/:cakeid' element={<CakeDetails></CakeDetails>}></Route>
        <Route path='cakecart' element={<Cart></Cart>}></Route>

        {/* <Route path='/address' element={<Address></Address>}>

          <Route path='/abc'/>
        </Route> */}


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;