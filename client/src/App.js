import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';
import LogoutButton from './components/Logout';
import Profile from './components/profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Nav />
      <Routes>
      <Route element={<PrivateComponent/>} >
      <Route path='/' element={<ProductList/>} />
      <Route path='/add' element={<AddProduct/>} />
      <Route path='/update/:id' element={<UpdateProduct/>} />
      <Route path='/logout' element={<LogoutButton/>} />
      <Route path='/profile' element={<Profile/>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      </Routes> 
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;