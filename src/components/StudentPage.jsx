import React from 'react';
import { Table} from 'react-bootstrap'


function ViewAllCourses() {
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
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                
            </tbody>
        </Table>
    </div>
  );
}

export default ViewAllCourses;


