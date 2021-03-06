import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderList from '../OrderList/OrderList';

const Dashboard = () => {

  document.title = "Dashboard - Ababil Information Technology"


    const [orderList, setOrderList] = useState([]);
    const [notification, setNotification] = useState({
        update:"",
        failed:''
    })

    const userInLoggedIn = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {
        fetch('https://ababil-it-assignment-11.herokuapp.com/orderlist?email='+userInLoggedIn.email)
          .then(res => res.json())
          .then(data => {
    
            setOrderList(data)
    
          })
      },[userInLoggedIn.email, notification] )
    return (
        <div >
           
           <AdminSidebar/>
          
           <div className="bg-secondary" style={{marginLeft:'260px', marginTop:'-46px', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Service Orders Here</h1>
                <h4>Total Order : {orderList.length}</h4>
                <h3 style={{color:'green', textAlign:'center'}}>{notification.update}</h3>
                <h3 style={{color:'red', textAlign:'center'}}>{notification.failed}</h3>
          {
             orderList.length? <OrderList notification={notification} setNotification={setNotification}  orderList={orderList} /> : <h4>You Have No Order Yet</h4>
          }
            
            </div>
            </div>
        </div>
    );
};

export default Dashboard;