import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import swal from 'sweetalert';
import axios from 'axios';
import ServiceForm from './ServiceForm';

const AddService = () => {


 const [notification, setNotification] = useState(false);

    const [imageUrl, setImageUrl] = useState('https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg');

    const [uploadPercentage, setUploadPercentage] = useState(0);

    const [formData, setFormdata] = useState({});




    const handleOnBlur = e => {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormdata(newData);
    
    }

    
    const handleImgUpload = event => {

        const image = event.target.files[0];
        const imagefile = event.target;


        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


        if (!allowedExtensions.exec(imagefile.value)) {
            swal({
                title: "Your file is not a photo",
                text: "Select a photo",
                icon: "warning",
                button: "Okay!",
            });

            imagefile.value = "";
        }


        if (image.size > 500000) {
            swal({
                title: "Your file is big",
                text: "Select A small size file!",
                icon: "warning",
                button: "Okay!",

            });
            imagefile.value = "";
        }


        else {
            uploadImage(image)
        }

    }

    
    const uploadImage = (image) => {

        const imageData = new FormData();
        imageData.set('key', '707ad238025806ece51d9e63679151f7')
        imageData.append('image', image);

        console.log(image)

        const options = {
            onUploadProgress: (ProgressEvent) => {
                const { loaded, total } = ProgressEvent;
                let percent = Math.floor((loaded * 100) / total)

                if (percent < 100) {
                    setUploadPercentage(percent)
                }
            }
        }

        axios.post('https://api.imgbb.com/1/upload', imageData, options)
            .then(response => {
                setImageUrl(response.data.data.display_url);
                setUploadPercentage(100, () => {
                    setTimeout(() => {
                        setUploadPercentage(0);
                    }, 1000);
                })
            })
            .catch(err => {
                console.log(err);
            });
    }


    const handleSubmitForm = (e) => {
        const ID = 'ababilIt_'+formData.ServiceName+formData.ServiceCost;
        console.log(ID)
        const serviceData = {
            imgUrl: imageUrl,
            serviceName: formData.ServiceName,
            serviceCost: formData.ServiceCost,
            serviceId: ID
        }

       
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
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
                title: ` Are you sure to Add a New Service?`,
                text: `Press Submit Button to Confirm Add`,
                icon: "warning",
                buttons: ["Cencel", "Submit"],
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal(` Successfully Add a New Service`, {
                            icon: "success",
                            buttons: handleSubmitForm(),
                            
                        });
                    } else {
                        swal("New Service Add Unsuccessful");
                    }
                });
    

        e.preventDefault();
    }




    return (
        <div >
           
        <AdminSidebar/>
       
         
        <div className="bg-secondary" style={{marginLeft:'260px', marginTop:'-46px', width:'87%'}}>
            <div className="p-5" style={{marginTop:'30px'}}>
                <h1 style={{textAlign:'center', color:'white', borderBottom:'1px solid #37517e',  marginBottom:'40px'}}>Add New Service</h1>
       
               {
                   notification? <h3>Your Post Successfully Published</h3>: 
                   <ServiceForm uploadPercentage={uploadPercentage} handlePopUp={handlePopUp} handleImgUpload={handleImgUpload} imageUrl={imageUrl} handleOnBlur={handleOnBlur}></ServiceForm>

               }
         
            </div>
            </div>
     </div>
    );
};

export default AddService;