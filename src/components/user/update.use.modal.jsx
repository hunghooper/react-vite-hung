import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import { Input, notification, Modal } from "antd";

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(true)
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
                message: "Update a user",
                description: "Updating user is success"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error when update a user",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Modal
            title="Update a user"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            okText={"SAVE"}
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
    )
}

export default UpdateUserModal;