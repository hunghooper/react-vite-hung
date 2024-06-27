import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState()
    const handleOk = () => {
        handleSubmitBtn();
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }


    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Create a user is success"
            })
            handleCancel();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

        console.log(`check state >>>`, res.data);
    }

    return (
        <div className="user-form" style={{ margin: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type="primary">
                    Create user
                </Button>
            </div>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                okText={"CREATE"}
            >

                <div className="user-form" style={{ margin: "20px 0" }}>
                    <div style={{ display: "flex", gap: " 15px", flexDirection: "column" }}>
                        <div>
                            <span>Full name</span>
                            <Input
                                value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }} />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div>
                            <span>Phone number</span>
                            <Input
                                value={phone}
                                onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                    </div>
                </div >
            </Modal>
        </div>
    )
}

export default UserForm;