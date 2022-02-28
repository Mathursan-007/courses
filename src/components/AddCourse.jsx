import React, {useState} from 'react';
import { Button ,Form} from 'react-bootstrap'
import Select from 'react-select'
import axios from "axios";

function AddCourse() {


    const [courseName,setCourseName] = useState();
    const [lecturerName,setLecturerName] = useState();
    const [subjects,setSubjects] = useState();

    const addCourse = (e) => {

        e.preventDefault();

        let course = {
            courseName:courseName,
            lecturerName:lecturerName,
            subjects:subjects
        }

        axios.post("http://localhost:2000/addCourse",course,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => {
                console.log(res.data)
            }).catch(e => {
            console.log(e)
        })
    }



    return (

    <div className='container' style={{paddingTop:'20px', marginLeft:"auto", marginRight:"auto"}}>
        <Form onSubmit={addCourse}>
        <h1>Add Course</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" onChange={(event) => setCourseName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lecturer Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" onChange={(event) => setLecturerName(event.target.value)}/>
        </Form.Group>


        <Form.Group>
        <Form.Label>Select the Subjects: </Form.Label>
        <Select
            className="basic-multi-select"
            isMulti
        />
       </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Subject Material</Form.Label>
        <Form.Control type="file" />
        </Form.Group>



        <Button variant="primary" type="submit" style={{marginLeft:"auto", marginRight:"auto"}}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCourse;


