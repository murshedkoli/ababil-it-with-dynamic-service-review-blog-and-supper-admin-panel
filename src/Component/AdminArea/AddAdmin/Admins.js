import React from 'react';

const Admins = ({admins}) => {
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
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins.map((user, i) => <tr>
                                <th scope="row">{i + 1}</th>
                                <td> <img src={user.imgUrl} alt=""/> </td>
                                <td>{user.name}</td> 
                                <td>{user.email}</td>   
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admins;