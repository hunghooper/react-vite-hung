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