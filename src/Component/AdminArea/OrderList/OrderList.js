import React from 'react';
import Swal from 'sweetalert2'

const OrderList = ({ orderList, notification, setNotification }) => {

    const userInLoggedIn = JSON.parse(sessionStorage.getItem('user'));

    const submitStatus = (id, status) => {

        const statusData = {
           
            status: status,
        }

        fetch(`https://ababil-it-assignment-11.herokuapp.com/changestatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newnote = { ...notification };
                    newnote.update = "Successfully Change Status";
                    newnote.failed = "";
                    setNotification(newnote);
                } else {
                    const newnote = { ...notification };
                    newnote.update = "";
                    newnote.failed = "Unsuccessfully Change Status";
                    setNotification(newnote);
                }

            })

    }

    const handlConfirm = (id, status) => {


        Swal.fire({
            title: `Are You Want to change Status From ${status}`,
            html: `<select id="status" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
         <option value="Pending">Pending</option>
         <option value="Ongoing">Ongoing</option>
         <option value="Done">Done</option>
       </select>`,
            confirmButtonText: 'Confirm Change',
            focusConfirm: false,

            preConfirm: () => {
                const status = Swal.getPopup().querySelector('#status').value
                if (!status) {
                    Swal.showValidationMessage(`Please Select a Option`)
                }
                submitStatus(id, status)
               
            }
        }).then((result) => {

        //     Swal.fire(`
        //    ' Status Change Succeffully;`
        //         .trim())
        })


    }
    return (





        <div class="card mb-2">
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Service Cost</th>
                            <th scope="col">Status</th>
                           {
                               userInLoggedIn.isAdmin&&  <th scope="col">Action</th>
                           }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map((order, i) => <tr>
                                <th scope="row">{i + 1}</th>
                                <td> {new Date(order.orderDate).toDateString()} </td>
                                <td> {order.orderService} </td>
                                <td>{order.orderCost}</td>
                                <td className={`${order.status === 'Pending' ? 'btn btn-outline-danger' : 'btn btn-outline-success'}`}>{order.status}</td>
                                {
                                    userInLoggedIn.isAdmin && <td><button onClick={() => handlConfirm(order._id, order.status)}>Change Status</button></td>

                                }
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default OrderList;