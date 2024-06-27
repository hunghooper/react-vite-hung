import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props
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
                        <div>
                            <img height={150} width={150}
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
                            <input type='file' hidden id='btnUpload'></input>
                        </div>
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