import React, { createRef, useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button, Link } from 'react-bootstrap'
import './Login.css'
import LoginImg from '../images/LoginImg.png'
import userIcon from '../images/userIcon.png'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { Home } from '../Home/Home'
import { HashRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

// import userIcon from'../images/user.png'

export const Login = () => {

    const [data2, setData2] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Register/login", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData")
                setData2(data.data);
            });
    }, []);

    const ref1 = createRef();
    const ref2 = createRef();

    const navigate = useNavigate();

    const userCheck = async () => {

        let uemail = ref1.current.value
        let upass = ref2.current.value

        let flag = false;
        data2.map((obj) => {

            const { email, password } = obj;

            if (uemail === email && upass === password) {
                flag = true;
            }
        })

        if (flag === true) {
            // console.log('Login Successfully')
            //alert('Login Successfully!!!')
            Swal.fire({
                icon: 'success',
                title: 'Login Successfully!!!',
                text: '',
                //footer: '<a href="">Why do I have this issue?</a>'
              })
            navigate("/home");
            }
        else if (flag === false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect Email or Password!',
                //footer: '<a href="">Why do I have this issue?</a>'
              })
            //alert('Login Failed!!!')
            navigate("/login")
        }

    }

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })
    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = e => {
        e.preventDefault();
    }
    return (
        <section>
            <Container>

                <Row>
                    <Col></Col>
                    <Col>
                        <div className='login_container1 d-flex justify-content-between n1'>

                            <Col className="m-auto">
                                <div className='login_img img'>
                                    <img src={LoginImg} alt="" />
                                </div>
                            </Col>

                            <Col >
                                <div className='logbox'>
                                    <Row >
                                        <img className='user offset-3' style={{ height: "150px", width: "160px" }} src={userIcon} alt="" />
                                    </Row>
                                    <Row>
                                        <h2 className='text-white'>Login</h2>
                                        <Form>
                                            <FormGroup>
                                                <input className='mt-3 input1' type="email" ref={ref1} placeholder=" Email" required id="email"
                                                    onChange={handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <input className='mt-3 input1' type="password" ref={ref2} placeholder=" Password" required id="password"
                                                    onChange={handleChange} />
                                            </FormGroup>
                                            <container>
                                                <Button className='btn_secondary_btn auth_btn1 mt-3 mb-2' onClick={userCheck} type='submit' style={{ width: "50%" }}>Sign In</Button>
                                            </container>
                                        </Form>

                                        <span className='mt-2 '>
                                            <a className='para' href='#/register'> Don't have an account ?</a>
                                        </span>
                                    </Row>
                                </div>
                            </Col>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

            </Container >
            <br></br><br /><br></br><br /><br></br>
        </section >

    )
}
