import React,{useState} from 'react';
import { Button ,Form} from 'react-bootstrap'
import axios from 'axios'


function Login() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();


    const login = (e)=>{

        e.preventDefault();

        let user = {
            email:email,
            password:password
        }

        axios.post("http://localhost:2000/login",user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token",res.data.accessToken)
            }).catch(e => {
                console.log(e)
        })
    }

  return (

    <div className='container' style={{paddingTop:'30px'}}>
        <Form onSubmit={login}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
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

export default Login;


