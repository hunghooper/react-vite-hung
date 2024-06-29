import React, { useEffect, useState } from 'react';
import { Button, Drawer, notification } from 'antd';
import { handleUploadFile, updateUserAvatarAPI } from '../../services/api.service';

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail, loadUser } = props

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }
    const handleUpdateUserAvatar = async () => {
        // 1: upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            // success
            const newAvatar = resUpload.data.fileUploaded;
            // 2: update avatar
            const resUpdateAvatar = await updateUserAvatarAPI(
                newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);

            if (resUpdateAvatar.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();

                notification.success({
                    message: "Update user avatar",
                    description: "Updating avatar is success"
                })

            } else {
                notification.error({
                    message: "Error when updating new avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        } else {
            notification.error({
                message: "Error when upload file",
                description: JSON.stringify(resUpload.message)
            })
        }
    }

    return (
        <>
            <Drawer title="User detail"
                onClose={() => {
                    setDataDetail(null)
                    setIsDetailOpen(false)
                }}
                open={isDetailOpen}
            >
                {dataDetail ?
                    <>
                        <p>ID: {dataDetail._id} </p>
                        <br></br>
                        <p>Name: {dataDetail.fullName} </p>
                        <br></br>
                        <p>Email: {dataDetail.email} </p>
                        <br></br>
                        <p>Phone: {dataDetail.phone} </p>
                        <br></br>
                        <div style={{
                            marginTop: "10px",
                            height: "100px", width: "150px",
                            border: "1px solid #ccc"
                        }}>
                            <img style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                        </div>
                        <div>
                            <label htmlFor='btnUpload'
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    color: "white",
                                    cursor: "pointer"
                                }}>Upload Avatar</label>
                            <input type='file' hidden id='btnUpload' onChange={(event) => handleOnChangeFile(event)}></input>
                        </div>
                        {preview &&
                            <>
                                <div style={{
                                    marginTop: "10px",
                                    height: "100px", width: "150px",
                                    border: "1px solid #ccc"
                                }}>
                                    <img style={{ height: `100%`, width: `100%`, objectFit: "contain" }}
                                        src={preview} />
                                </div>
                                <Button type='primary'
                                    onClick={() => handleUpdateUserAvatar()}
                                >Save</Button>
                            </>
                        }
                    </>
                    :
                    <>
                        <p>No data is found</p>
                    </>
                }
            </Drawer>
        </>
    );
}

export default ViewUserDetail;