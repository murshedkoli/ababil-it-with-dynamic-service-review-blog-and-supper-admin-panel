import React from 'react';

const Users = ({users, notification, setNotification}) => {


    const makeAdmin = (id) => {


        fetch(`http://localhost:5000/makeadmin/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const newnote = { ...notification };
                    newnote.update = "Successfully Make Admin";
                    newnote.failed = "";
                    setNotification(newnote);
                } else {
                    const newnote = { ...notification };
                    newnote.update = "";
                    newnote.failed = "Unsuccessfully Make Admin Request";
                    setNotification(newnote);
                }

            })

    }


    return (
        
        <div class="card mb-2">
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Image</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th> 
                            <th scope="col">Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr>
                                <th scope="row">{i + 1}</th>
                                <td> <img src={user.imgUrl} alt=""/> </td>
                                <td>{user.name}</td> 
                                <td>{user.email}</td>   
                                <td><button onClick={() => makeAdmin(user._id)}>Make Admin</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;