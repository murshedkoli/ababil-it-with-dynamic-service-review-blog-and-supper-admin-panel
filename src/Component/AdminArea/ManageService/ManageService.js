import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageService = () => {
    return (
        <div >
           
        <AdminSidebar/>
       
         
        <div className="bg-secondary" style={{marginLeft:'260px', height:'100%', position:'fixed', top:'0', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Manage Service</h1>
       
          
         
            </div>
            </div>
     </div>
    );
};

export default ManageService;