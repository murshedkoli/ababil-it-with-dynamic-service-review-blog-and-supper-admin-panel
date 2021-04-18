import React from 'react';
import { useState, useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ServiceForManage from './ServiceForManage';

const ManageService = () => {

        
    const [notification, setNotification] = useState({
        update:"",
        failed:''
    })


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => {
    
            setServices(data)
    
          })
      },[notification] )

      
    
    return (
        <div >
           
        <AdminSidebar/>
       
         
        <div className="bg-secondary" style={{marginLeft:'260px', marginTop:'-46px', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
               

                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Manage Service {services.length}</h1>
                <h3 style={{color:'green', textAlign:'center'}}>{notification.update}</h3>
                <h3 style={{color:'green', textAlign:'center'}}>{notification.failed}</h3>
                <ServiceForManage services={services} notification={notification} setNotification={setNotification}  />
         
            </div>
            </div>
     </div>
    );
};

export default ManageService;