import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";import HomePage from './Component/HomeComponent/HomePage/HomePage';
import Login from './Component/Login/Login';
import Dashboard from './Component/AdminArea/Dashboard/Dashboard';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';
import AddService from './Component/AdminArea/AddService/AddService';
import AddAdmin from './Component/AdminArea/AddAdmin/AddAdmin';
import ManageService from './Component/AdminArea/ManageService/ManageService';
import AddBlogPost from './Component/AdminArea/AddBlogPost/AddBlogPost';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddReviews from './Component/AdminArea/AddReviews/AddReviews';
import OrderForm from './Component/AdminArea/OrderForm/OrderForm';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>


          <Route  path="/login">
            <Login/>
          </Route>

          <PrivateRoute  path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          
          <PrivateRoute  path="/addservice">
            <AddService/>
          </PrivateRoute>
          
          <PrivateRoute  path="/addadmin">
            <AddAdmin/>
          </PrivateRoute>
          
          <PrivateRoute  path="/manageservice">
            <ManageService/>
          </PrivateRoute>
          <PrivateRoute  path="/addpost">
            <AddBlogPost/>
          </PrivateRoute>

          <PrivateRoute  path="/addreviews">
            <AddReviews/>
          </PrivateRoute>


          <PrivateRoute  path="/orderform/:_id">
            <OrderForm/>
          </PrivateRoute>


          <Route  path="/*">
            <NotFoundPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
