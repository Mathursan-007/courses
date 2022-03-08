import React, {useState} from 'react';
import { Button ,Form} from 'react-bootstrap'
import axios from "axios";

function AddCourse() {

    const [subjectName,setSubjectName] = useState();//oath
    const [subjectID,setSubjectID] = useState();

    const addSubject = (e) => {

        e.preventDefault();

        let subject = {
            subjectName:subjectName,
            subjectID:subjectID
        }

        axios.post("http://localhost:2000/addSubject",subject,{
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
        <Form onSubmit={addSubject}>
        <h1>Add Subjects</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subject Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject Name" onChange={(event) => setSubjectName(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subject ID</Form.Label>
          <Form.Control type="text" placeholder="Enter Subject ID"  onChange={(event) => setSubjectID(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCourse;


