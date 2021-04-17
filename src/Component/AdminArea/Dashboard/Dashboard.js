import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderList from '../OrderList/OrderList';

const Dashboard = () => {
    return (
        <div >
           
           <AdminSidebar/>
          
           <div className="bg-secondary" style={{marginLeft:'260px', height:'100%', position:'fixed', top:'0', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Service Orders Here</h1>
       
          
            <OrderList/>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;