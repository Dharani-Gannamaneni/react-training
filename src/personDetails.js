import { useState } from "react";
import { Button } from "antd"
import { Table,Space } from "antd"
import { DeleteOutlined } from '@ant-design/icons';

function PersonDetails()
{
    var person = {}
    var [persons,setPersons] = useState([]);

    function deleteUser(index){
        persons.splice(index,1)
        setPersons([...persons])
    }

    function displayPersonDetails()
    {
        persons.push(person)
        persons = [...persons]
        setPersons(persons)
    }
    function handleName(e)
    {
        person.name = e.target.value;
    }
    function handleRole(e)
    {
        person.role = e.target.value;
    }
    function handleLocation(e)
    {
        person.location = e.target.value;
    }
    function handleDelete(index) {
        setPersons(persons.filter((_, i) => i !== index));
    }

    const columns = [
        { dataIndex: 'name', title: 'Name' },
        { dataIndex: 'role', title: 'Role' },
        { dataIndex: 'location', title: 'Location' },
        {
            title: 'Action',
            render: (_, record, index) => (
                <Space size="middle">
                    <Button icon={<DeleteOutlined />} onClick={() => handleDelete(index)} />
                </Space>
            ),
        },
    ];
    return(
        <>
            <input  placeholder="Name" onChange={handleName}></input>
            <br></br>
            <input  placeholder="Role" onChange={handleRole}></input>
            <br></br>
            <input  placeholder="Location" onChange={handleLocation}></input>
            <br></br>
            <Button onClick ={displayPersonDetails}>Display PersonDetails</Button>
            <br></br>
            <h1>Person Details</h1>
            <Table dataSource={persons} columns={columns}/>
        </>
    )
}
export default PersonDetails;