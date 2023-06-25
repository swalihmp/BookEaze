import { Route,Routes,useLocation} from 'react-router-dom'
import Login from './account/Login';
import Register from './account/Register';
import Home from '../pages/Home';
import AdminHome from '../pages/admin/AdminHome';
import Hotels from '../pages/admin/Hotels';
import ListHotel from '../pages/user/ListHotel';
import SingleProperty from '../pages/user/SingleProperty';
import AddProperty from '../pages/admin/Property/AddProperty';
import Checkout from '../pages/user/Checkout';
import Invoice from '../pages/user/Invoice';
import AdminSingleproperty from '../pages/admin/AdminSingleproperty';
import Reservations from '../pages/admin/Reservations';

function Proutes() {

    const location = useLocation();
    return (
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/listhotels' element={<ListHotel/>}/>
            <Route path='/singleproperty/:id' element={<SingleProperty/>}/>
            <Route path='/checkout/:id' element={<Checkout/>}/>
            <Route path='/invoice/:id' element={<Invoice/>}/>



            <Route path='/ahome' element={<AdminHome/>}/>
            <Route path='/ahotel' element={<Hotels/>}/>
            <Route path='/addproperty' element={<AddProperty/>}/>
            <Route path='/Adminsingleproperty/:id' element={<AdminSingleproperty/>}/>
            <Route path='/reservations' element={<Reservations/>}/>
        </Route>

      </Routes>
  )
}

export default Proutes