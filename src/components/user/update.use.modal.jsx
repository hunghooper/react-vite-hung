import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";
import { Input, notification, Modal } from "antd";

const UpdateUserModal = (props) => {

    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props
    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName)
            setId(dataUpdate._id)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhone("")
        setDataUpdate(null)
    }

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
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

    const handleOk = () => {
        handleSubmitBtn();
        resetAndCloseModal();
    }
    const handleCancel = () => {
        setIsModalUpdateOpen(false)
    }

    return (
        <Modal
            title="Update a user"
            open={isModalUpdateOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            okText={"SAVE"}
        >

            <div className="user-form" style={{ margin: "20px 0" }}>
                <div style={{ display: "flex", gap: " 15px", flexDirection: "column" }}>
                    <div>
                        <span>ID</span>
                        <Input
                            value={id}
                            disabled />
                    </div>
                    <div>
                        <span>Full name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }} />
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