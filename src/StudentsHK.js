import { useState } from "react";
import { Button } from "antd"
import { Table } from "antd"

function StudentsHK()
{
    var student = {}
    var [students,setStudents] = useState([]);

    function handleAttendance()
    {
        students.push(student)
        students = [...students]
        console.log(students)
        setStudents(students)
    }
    function handleName(e)
    {
        student.name = e.target.value;
        console.log(student)
    }
    return(
        <>
            <input  placeholder="Name" onChange={handleName}></input>
            <Button onClick ={handleAttendance}>MarkAttendance</Button>
            <br></br>
            <h1>Names</h1>
            <Table dataSource={students} columns={[{ dataIndex: 'name', title: 'Name' }]}/>
        </>
    )
}
export default StudentsHK;