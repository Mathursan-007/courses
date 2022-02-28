import React, {useState} from 'react';
import { Button ,Form} from 'react-bootstrap'
import axios from 'axios'

function Registration() {

    const [fName,setFName] = useState();
    const [lName,setlName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();


    const register = (e) => {

        e.preventDefault();

        let user = {
            fName:fName,
            lName:lName,
            email:email,
            password:password
        }

        axios.post("http://localhost:2000/addUser",user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token",res.data.accessToken)
            }).catch(e => {
            console.log(e)
        })
    }



  return (

    <div className='container' style={{paddingTop:'20px', marginLeft:"auto", marginRight:"auto"}}>
        <Form onSubmit={register}>
        <h1>Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" onChange={(event) => setFName(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" onChange={(event) => setlName(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Registration;


