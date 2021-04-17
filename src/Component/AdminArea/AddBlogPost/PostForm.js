import React from 'react';

const PostForm = ({ handleImgUpload, handleOnBlur, handlePopUp, imageUrl, uploadPercentage }) => {
    return (
        <div>

            <form name="newPost" onSubmit={handlePopUp} style={{ padding: '40px', borderRadius: '20px', boxShadow: '2px 0px 10px', backgroundColor: 'white' }}>

               

                <div class="mb-3">
                    <label class="form-label">Post Title</label>
                    <input onBlur={handleOnBlur} type="text" class="form-control" name="postTitle" placeholder="Post Title Here" required />
                </div>
               
                <div class="mb-3">
                    <label class="form-label">Post Content</label>
                    <textarea onBlur={handleOnBlur} type="textarea" class="form-control" name="postContent" placeholder="Post Content Here" required ></textarea>
                </div>
               
               

                <div style={{ padding: '10px' }}>
                    <img className={(uploadPercentage > 60 ? 'green' : 'red')} style={{ width: '200px', padding: '2px', }} src={imageUrl} alt="" />
                </div>
                <div class="mb-3">
                    <label for="photo" class="form-label">Upload Post Thumbnail</label>
                    <input type="file" class="form-control-file" id="photo" name="photoupload" onChange={handleImgUpload} />
                </div>
                {
                    uploadPercentage > 0 &&
                    <div class="progress" style={{ marginBottom: '15px' }}>
                        <div class={"progress-bar progress-bar-striped " + (uploadPercentage > 80 ? 'bg-success' : 'bg-danger')} role="progressbar" style={{ width: uploadPercentage + '%' }} aria-valuenow={uploadPercentage} aria-valuemin="0" aria-valuemax="100">{uploadPercentage}%</div>
                        <br /><br />
                    </div>
                }

                <button style={{ width: '100%' }} type="submit" class="btn btn-lg btn-success">Publish</button>
            </form>
        </div>
    );
};

export default PostForm;