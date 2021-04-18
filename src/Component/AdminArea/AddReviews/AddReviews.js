import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import swal from 'sweetalert';
import ReviewForm from './ReviewForm';

const AddReviews = () => {

    document.title = "Give Review - Ababil Information Technology"



 const [notification, setNotification] = useState(false);

    const [formData, setFormdata] = useState({});

    
const userInLoggedIn = JSON.parse(sessionStorage.getItem('user'));


    const handleOnBlur = e => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormdata(newData);
    }

    


    const handleSubmitForm = (e) => {
        const postData = {
            reviewDate: new Date(),
            img:userInLoggedIn.imgUrl,
            email: userInLoggedIn.email,
            userName:userInLoggedIn.name,
           reviewContent: formData.reviewContent,
           postName:formData.postName
        }

       
        fetch('https://ababil-it-assignment-11.herokuapp.com/addreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {
               if(data.insertedCount){
                setNotification(true)
               }else{
                setNotification(false)
               }
            
            })

    }


    const handlePopUp = (e) => {


            swal({
                title: ` Are you sure to Submit?`,
                text: `Publish Your Post it's appear in home page`,
                icon: "warning",
                buttons: ["Cencel", "Submit"],
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal(` Successfully Give Your Review`, {
                            icon: "success",
                            buttons: handleSubmitForm(),
                            
                        });
                    } else {
                        swal("Your Review Not Successfull.. please try again");
                    }
                });
    

        e.preventDefault();
    }




    return (
        <div >
           
        <AdminSidebar/>
       
         
        <div className="bg-secondary" style={{marginLeft:'260px', marginTop:'-50px', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Give Your Opinion</h1>
       
               {
                   notification? <h3>Your REview Add Successfully </h3>: 
                   <ReviewForm  handlePopUp={handlePopUp} handleOnBlur={handleOnBlur}></ReviewForm>

               }
         
            </div>
            </div>
     </div>
    );
};

export default AddReviews;