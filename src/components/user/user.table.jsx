import { Table } from 'antd';

const UserTable = (props) => {
    console.log(props)
    const { dataUsers } = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    return (
        <>
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
        </>
    );
}

export default UserTable;