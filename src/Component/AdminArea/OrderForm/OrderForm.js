import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import Payment from '../../Payment/Payment';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrderForm = () => {


    const [notification, setNotification] = useState(false);


    const { _id } = useParams();

    

    useEffect(() => {

        const url = "http://localhost:5000/orderservice?serviceId=" + _id;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [_id]);

    const [service, setService] = useState({});
   

    const userInLoggedIn = JSON.parse(sessionStorage.getItem('user'));


    const handleSubmitForm = (e) => {
        const orderData = {
            orderDate: new Date(),
            orderService: service.serviceName,
            orderCost: service.serviceCost,
            email: userInLoggedIn.email,
            userName: userInLoggedIn.name,
            status:'pending'
        }
  


        fetch('http://localhost:5000/addorder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedCount) {
                    setNotification(true)
                } else {
                    setNotification(false)
                }

            })

    }

    const handlePopUp = (e) => {


        swal({
            title: ` Hey ${userInLoggedIn.name} are sure to Place Order?`,
            text: `Once you submit order you can't cancel`,
            icon: "warning",
            buttons: ["Cencel", "Place Order"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(` Your Order Successfully Placed`, {
                        icon: "success",
                        buttons: handleSubmitForm(),

                    });
                } else {
                    swal("Your Order Not Succefully Placed...");
                }
            });


        e.preventDefault();
    }

    return (
        <div >

            <AdminSidebar />


            <div className="bg-secondary" style={{ marginLeft: '260px', marginTop: '-50px', width: '87%' }}>
                <div className="p-5" style={{ marginTop: '30px' }}>
                    <h1 style={{ textAlign: 'center', color: 'white', borderBottom: '1px solid #37517e', marginBottom: '40px' }}>Place Your Order</h1>

                    {
                        notification ? <h3>Your Order Placed Successfully</h3> :

                            <div>

                                <form name="newPost" onSubmit={handlePopUp} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>



                                    <div class="mb-3">
                                        <label class="form-label">Service Name</label>
                                        <input type="text" defaultValue={service.serviceName} class="form-control" name="ServiceName" placeholder="Service Name Here" disabled required />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Service Cost</label>
                                        <input type="number" defaultValue={service.serviceCost} class="form-control" name="ServiceCost" placeholder="Service Cost Here" disabled required />
                                    </div>


                                    <button style={{ width: '100%' }} type="submit" class="btn btn-lg btn-success">Place Order</button>
                                </form>
                            </div>

                    }

                    <div >
                        
                        <Payment />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderForm;