import React from 'react';
import Swal from 'sweetalert2'
import swal from 'sweetalert';


const ServiceForManage = ({ notification, setNotification, services }) => {

    console.log(services)
    const submitForUpdate = (id, cost, name) => {

        const dataForUpdate = {

            serviceCost: cost,
            serviceName: name,
        }

        fetch(`https://ababil-it-assignment-11.herokuapp.com/updateservice/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForUpdate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newnote = { ...notification };
                    newnote.update = "Confirm Request Successful";
                    newnote.failed = "";
                    setNotification(newnote);
                } else {
                    const newnote = { ...notification };
                    newnote.update = "";
                    newnote.failed = "Confirm Request Not Successful";
                    setNotification(newnote);
                }

            })

    }

    const updateService = (id) => {


        Swal.fire({
            title: 'Update Service',
            html: `<input type="text" id="serviceName" class="swal2-input" placeholder="Service Name">
            <input type="number" id="serviceCost" class="swal2-input" placeholder="Service Cost">`,
            confirmButtonText: 'Confirm Addmission',
            focusConfirm: true,

            preConfirm: () => {
                const serviceName = Swal.getPopup().querySelector('#serviceName').value
                const serviceCost = Swal.getPopup().querySelector('#serviceCost').value
                if (!serviceName && !serviceCost) {
                    Swal.showValidationMessage(`Please enter Name Or Price For Update`)
                }
               else{
                const costForService = parseInt(serviceCost);
                submitForUpdate(id, costForService, serviceName)
                return { ammount: costForService, name: serviceName }
               }
            }
        }).then((result) => {

            Swal.fire(` 
          ${result.value.name} Was Update Successfully;`
                .trim())
        })


    }


    const deleteService = (id) => {

        fetch(`https://ababil-it-assignment-11.herokuapp.com/deleteservice/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newnote = { ...notification };
                    newnote.update = "Successfully Delete Service";
                    newnote.failed = "";
                    setNotification(newnote);
                } else {
                    const newnote = { ...notification };
                    newnote.update = "";
                    newnote.failed = "Service Delete Request Not Successful";
                    setNotification(newnote);
                }

            })
    }


    
    const handlDelete = ( id) => {


        swal({
            title: ` Are you sure to Delete this Service?`,
            text: `Once You Delete That You are not able to recover It`,
            icon: "warning",
            buttons: ["Cencel", "Delete"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(` Successfully Delete this Product`, {
                        icon: "success",
                        buttons: deleteService(id),
                        
                    });
                } else {
                    swal("Your Delete Request Not Successfull");
                }
            });

}




    return (

        <div class="card mb-2">
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service Thubnail</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Service Cost</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, i) => <tr>
                                <th scope="row">{i + 1}</th>
                                <td> <img style={{ width: '200px', height: '150px' }} src={service.imgUrl} alt="" /> </td>
                                <td>{service.serviceName}</td>
                                <td>{service.serviceCost}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updateService(service._id)}>Update Service</button><br /><br />
                                    <button className="btn btn-danger" onClick={() => handlDelete(service._id)}>Delete Service</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceForManage;