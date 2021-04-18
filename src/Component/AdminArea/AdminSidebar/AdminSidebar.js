import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AdminSidebar.css'

const AdminSidebar = () => {
    const history = useHistory();

const handleLogout= ()=>{
    sessionStorage.clear();
    history.push('/')
}

const userInSession = JSON.parse(sessionStorage.getItem('user'));
console.log(userInSession)


    return (
        <div className="p-2">
        <div class="sidenav ">
            <img style={{borderRadius:'50%', marginLeft:'20px'}} src={userInSession.imgUrl} alt=""/>
            
            <Link to="/dashboard"> <i class="far fa-user-circle icons"></i>{userInSession.name}</Link>
            {
                userInSession.isAdmin?
                <div>
            <Link to="/"> <i class="fas fa-home icons"></i>Back to Home</Link>
            {/* <Link to="/addreviews"> <i class="far fa-plus-square icons"></i>Add Review</Link> */}
            <Link to="/addservice"> <i class="fas fa-plus-square icons"></i>Add Service</Link>
            <Link to="/addadmin"> <i class="fas fa-user-plus icons"></i> Add Admin</Link>
            <Link to="/manageservice"> <i class="fas fa-tasks icons"></i>Manage Service</Link>
            <Link to="/addpost"> <i class="far fa-plus-square icons"></i>Add Blog Post</Link>

            </div>
            :
            <div>
            <Link to="/"> <i class="fas fa-home icons"></i>Back to Home</Link>
            <Link to="/addpost"> <i class="far fa-plus-square icons"></i>Add Blog Post</Link>
            <Link to="/addreviews"> <i class="far fa-plus-square icons"></i>Add Review</Link>
            {/* <Link to="/addservice"> <i class="fas fa-plus-square icons"></i>Add Service</Link>
            <Link to="/addadmin"> <i class="fas fa-user-plus icons"></i> Add Admin</Link>
            <Link to="/manageservice"> <i class="fas fa-tasks icons"></i>Manage Service</Link> */}
            </div>
            }
            <button onClick={handleLogout}  className="btn btn-outline-danger" style={{position:'absolute', bottom:'30px', width:'100%'}}>Logout</button>
        </div>
        
    </div>
    );
};

export default AdminSidebar;