import React, { createRef } from 'react'
import { Container, Row, Col, Form, FormGroup, Button, Link } from 'react-bootstrap'
import './Register.css';
import RegisterImg from '../images/RegisterImg.png'
import Icon from '../images/userIcon2.png'
import Swal from 'sweetalert2';
import axios from 'axios';
// import userIcon from'../images/user.png'

export const Register = () => {

    const ref1 = createRef()
    const ref2 = createRef()
    const ref3 = createRef()
   
    //const userData = { username, password, email }
    //console.log(userData)

    const Register = async () => {
        const username = ref1.current.value
        const password = ref2.current.value
        const email = ref3.current.value

        // const config = {
        //     headers: {
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        //     }
        //   };
          
        //   const {
        //     data: { ip }
        //   } = await axios.get("https://api.ipify.org?format=json", config);

      //  const resp = await axios.post('http://localhost:3000/Register/reg', { username, password,email});
     //   console.log(resp)

        const userData={
            username:username,
            password:password,
            email:email
        }
        console.log(userData);
        const resp = await fetch("/Register/reg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                    },
            body: JSON.stringify(userData)
        })
        console.log(resp);
        const res = await resp.json()
        if(userData.username!=='' && userData.email!=='' && userData.password!==''){
            Swal.fire({
                icon: 'success',
                title: 'Register Successfully!!!',
                text: '',
                //footer: '<a href="">Why do I have this issue?</a>'
            })
            window.location.href = 'http://localhost:3001/?#/login'
        }
        else{
            console.log("Error");
        }
        
    }
    return (
        <div>
            <Container>

                <Row>
                    <Col></Col>
                    <Col>
                        <div className='login_container d-flex justify-content-between n1'>

                            <Col >
                                <div className='m1'>
                                    <Row >
                                        <img className='user offset-2' style={{ height: "124px", width: "160px" }} src={Icon} alt="" />
                                    </Row>
                                    <Row>

                                        <h2 className='text-white'>Register</h2>

                                        <Form>
                                            <FormGroup>
                                                <input className='input1 mt-3' type="text" placeholder=" Username" required id="username"
                                                    ref={ref1} />
                                            </FormGroup>
                                            <FormGroup>
                                                <input className='input1 mt-3' type="email" placeholder=" Email" required id="email"
                                                    ref={ref3} />
                                            </FormGroup>
                                            <FormGroup>
                                                <input className='input1 mt-3' type="password" placeholder=" Password" required id="password"
                                                    ref={ref2} />
                                            </FormGroup>
                                            <container>
                                                <Button onClick={Register} className='class="btn_secondary_btn auth_btn1 mt-3 mb-2 btn btn-primary"' type='submit' style={{ width: "76%" }}>Sign Up</Button>
                                            </container>
                                        </Form>

                                        <span className='mt-2 '>
                                            <a className='para' href='#/login'> Already have an account ?</a>
                                        </span>
                                    </Row>
                                </div>
                            </Col>
                            <Col className="m-auto">
                                <div className='login_img img'>
                                    <img src={RegisterImg} alt="" />
                                </div>
                            </Col>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

            </Container >
            <br></br><br /><br></br><br /><br></br>
        </div>

    )
}
