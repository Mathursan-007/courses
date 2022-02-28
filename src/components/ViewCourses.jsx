import React,{useEffect,useState} from 'react';
import { Table} from 'react-bootstrap'
import {Axios as axios} from 'axios';

function ViewCourses() {

    const[courses,setCourses] = useState([])


    useEffect(() => {
        axios.get("http://localhost:2000/get-courses")
            .then((res) =>{
                setCourses(res.data)
            }).catch((e) => {
                console.log(e)
        })
    },[])

  return (

    <div className='container' style={{paddingTop:'20px', marginLeft:"auto", marginRight:"auto"}}>
       <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Course Name</th>
                <th>Lecturer Name</th>
                <th>Subjects</th>
                <th>Subject Material</th>
                </tr>
            </thead>
            <tbody>
            {courses.map((course)=> {

            })}
            </tbody>
        </Table>
    </div>
  );
}

export default ViewCourses;


