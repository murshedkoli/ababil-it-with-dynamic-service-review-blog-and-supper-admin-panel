import React from 'react';

const ReviewForm = ({  handleOnBlur, handlePopUp }) => {
    return (
        <div>

            <form name="newPost" onSubmit={handlePopUp} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>

            <div class="mb-3">
                    <label class="form-label">Post and Company</label>
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="postName" placeholder="Your Post Name" required ></input>
                </div>
               
                <div class="mb-3">
                    <label class="form-label">Review Content</label>
                    <textarea onBlur={handleOnBlur} type="textarea" class="form-control" name="reviewContent" placeholder="Review Content Here" required ></textarea>
                </div>
               
              

                <button style={{ width: '100%' }} type="submit" class="btn btn-lg btn-success">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;