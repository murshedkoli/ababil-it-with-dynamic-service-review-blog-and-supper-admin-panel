import React from 'react';
import { useState, useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Admins from './Admins';
import Users from './Users';

const AddAdmin = () => {

    const [admins, setAdmins] = useState([]);
    console.log(admins)
    
    const [users, setUsers] = useState([]);
    
    const [notification, setNotification] = useState({
        update:"",
        failed:''
    })



    useEffect(() => {
        fetch('https://ababil-it-assignment-11.herokuapp.com/admins')
          .then(res => res.json())
          .then(data => {
    
            setAdmins(data)
    
          })
      },[ notification] )

      useEffect(() => {
        fetch('https://ababil-it-assignment-11.herokuapp.com/users')
          .then(res => res.json())
          .then(data => {
    
            setUsers(data)
    
          })
      },[ notification] )


    return (
        <div >
           
        <AdminSidebar/>
       
         
        <div className="bg-secondary" style={{marginLeft:'260px', marginTop:'-46px', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Add New Admin</h1>
       
            <div>
            <h2 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>All Admin</h2>
                <Admins admins={admins} notification={notification} setNotification={setNotification} />
            </div>

            <div>
            <h2 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>All Users</h2>
                <Users users={users} notification={notification} setNotification={setNotification}/>
            </div>

         
            </div>
            </div>
     </div>
    );
};

export default AddAdmin;