import React, {useState} from 'react';
import '../css/login.css';
import {FormRegisterContent} from "./FormRegisterContent";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {LoadingButton} from "./LoadingButton";
import * as Yup from "yup";
import {ButtonLogin} from "./ButtonLogin";


export function FormLogin(props) {
    const [account] = useState({
        password: "",
        email: "",
        password2: "",
    })
    const [showFormRegister, setShowFormRegister] = useState(false);
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email không đúng định dạng!').required('Vui lòng nhập email!'),
        password: Yup.string().required('Vui lòng nhập mật khẩu!').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, "Mật khẩu phải chứa tối thiểu 8 kí tự, ít nhất 1 chữ cái viết thường, ít nhất một chữ cái viết hoa, ít nhất một chữ số!"),
        password2: Yup.string().required("Vui lòng nhập lại mật khẩu").oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp'),
    });
    function showFormRegis() {
        document.getElementById("content-form-login").style.display = "none";
        document.getElementById("content-form-forgot-password").style.display = "none";
        document.getElementById("footer-form-register").style.display = "block";
        setShowFormRegister(true)
    }

    function hiddenFormRegis() {
        document.getElementById("content-form-login").style.display = "block";
        document.getElementById("footer-form-register").style.display = "none";
        document.getElementById("content-form-forgot-password").style.display = "none";
        setShowFormRegister(false)
    }

    function forgetPassword() {
        document.getElementById("content-form-login").style.display = "none";
        document.getElementById("footer-form-register").style.display = "none";
        document.getElementById("content-form-forgot-password").style.display = "block";
        setShowFormRegister(false)
    }

    function login(account) {
        axios.post("http://localhost:8080/api/login", account).then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("idAccount", res.data.id)
            localStorage.setItem("role", res.data.roles[0].authority)
            // console.log(res)
            props.m(true);
            props.n(res.data.id)
            props.l(res.data.roles[0].authority)
            navigate("/")
        }).catch(() => {
            // trường hợp kết nối được đến máy chủ nhưng tài khoản hoặc mật khẩu không đúng:
            alert("Tài khoản hoặc mật khẩu không đúng!")
        })
    }
    function sendCode() {
        let email = document.getElementById("email-form-forgot-password").value;
        if (email === "") {
            return alert("Bạn chưa nhập email!")
        }
        setLoading1(true)
        axios.post("http://localhost:8080/api/sendCodeToEmail2/" + email).then((res) => {
            alert(res.data);
            setLoading1(false)
        }).catch(()=>{
            alert("Địa chỉ email không đúng!")
            setLoading1(false)
        })
    }
    function changePassword(account) {
        let code = document.getElementById("code-email-verification-2").value;
        if (code === "") {
            return alert("Hãy điền mã xác nhận")
        }
        setLoading2(true)
        try {
            axios.post("http://localhost:8080/api/changePassword/" + code, account).then((res) => {
                alert(res.data);
                setLoading2(false)
            })
        } catch (error) {
            alert("Không thể kết nối đến máy chủ!")
        }
    }
    return (
        <>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <img src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo"
                                 style={{width: "100px"}}/>
                            <h1>PlayerDue</h1>
                        </div>
                        <div id={"container-form"}>
                            <div id={"content-form-login"}>
                                <div className="modal-body">
                                    <Formik
                                        initialValues={{}}
                                        onSubmit={(account) => {
                                            login(account)
                                        }}
                                    >
                                        <Form>
                                            <Field type="text" className={"form-control"} id={"email-form-login"}
                                                   placeholder={"Tên đăng nhập"}
                                                   name={"username"}
                                                   style={{textAlign: "center"}}/>
                                            <Field type="text" className={"form-control"} id={"email-form-login"}
                                                   placeholder={"Mật khẩu"} name={"password"}
                                                   style={{textAlign: "center", marginTop: 10}}/>
                                            <div className="modal-footer d-flex justify-content-center">
                                                <button type="submit" className="btn btn-secondary" id={"button-login-1"} data-bs-dismiss="modal">Đăng nhập</button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                                <div className="text-center" style={{marginBottom: 10, display: "flex"}}>
                                    <a href="#" className="nav-link scrollto">
                                        <span className="register-link" onClick={showFormRegis}
                                              style={{paddingLeft: 10, color: "#f0564a"}}>Đăng ký tài khoản</span>
                                    </a>
                                    <a href="#" className="nav-link scrollto">
                                        <span className="register-link" onClick={forgetPassword}
                                              style={{paddingLeft: 240, color: "#f0564a"}}>Quên mật khẩu</span>
                                    </a>
                                </div>
                            </div>

                            <div id={"content-form-forgot-password"} style={{display: "none"}}>
                                <div className="modal-body">
                                    <Formik
                                        initialValues={account}
                                        onSubmit={(account) => {
                                            changePassword(account)
                                        }}
                                        validationSchema={validationSchema}
                                    >
                                        <Form>
                                            <Field type="text" className={"form-control"} id={"email-form-forgot-password"}
                                                   placeholder={"Nhập địa chỉ email đã đăng kí"}
                                                   name={"email"} style={{textAlign: "center"}}/>
                                            <ErrorMessage name="email"/>
                                            <div style={{display: "flex"}}
                                                 className="modal-footer d-flex justify-content-center">
                                                <input type="text" placeholder={"Nhập mã xác nhận email"}
                                                       className={"form-control"} id={"code-email-verification-2"}
                                                       style={{width: 300}}/>
                                                <Button1 loading1={!loading1}/>
                                                <LoadingButton loading={loading1}/>
                                            </div>
                                            <Field type="text" className={"form-control"} id={"email-form-login"}
                                                   placeholder={"Nhập mật khẩu mới"} name={"password"}
                                                   style={{textAlign: "center"}}/>
                                            <ErrorMessage name="password"/>
                                            <Field type="text" className={"form-control"} id={"email-form-login"}
                                                   placeholder={"Nhập lại mật khẩu mới"} name={"password2"}
                                                   style={{textAlign: "center", marginTop: 10}}/>
                                            <ErrorMessage name="password2"/>
                                            <div className="modal-footer d-flex justify-content-center">
                                                <Button2 loading2={!loading2}/>
                                                <LoadingButton loading={loading2}/>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                                <div className="text-center" style={{marginBottom: 10, display: "flex"}}>
                                    <a href="#" className="nav-link scrollto">
                                        <span className="register-link" onClick={hiddenFormRegis}
                                              style={{paddingLeft: 10, color: "#f0564a"}}>Đăng nhập</span>
                                    </a>
                                    <a href="#" className="nav-link scrollto">
                                        <span className="register-link" onClick={showFormRegis}
                                              style={{paddingLeft: 275, color: "#f0564a"}}>Đăng kí tài khoản</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <FormRegisterContent prop={showFormRegister}/>
                        <div id={"footer-form-register"} style={{marginBottom: 5, display: "none"}}>
                            <div className="text-center" style={{display: "flex"}}>
                                <a href="#" className="nav-link scrollto" style={{paddingLeft: 10, color: "#f0564a"}}>
                                    <span className="register-link" onClick={hiddenFormRegis} style={{color: "#f0564a"}}>Đăng nhập</span>
                                </a>
                                <a href="#" className="nav-link scrollto" style={{paddingLeft: 290}}>
                                    <span className="register-link" onClick={forgetPassword} style={{color: "#f0564a"}}>Quên mật khẩu</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
    function Button1({loading1}) {
        if (loading1) {
            return (
                <button type="button" className="btn btn-secondary"
                        id={"button-send-code-form-register"}
                        onClick={sendCode}>Lấy mã
                </button>
            )
        }
        return (
            <></>
        )
    }
    function Button2({loading2}) {
        if (loading2) {
            return (
                <button type="submit" className="btn btn-secondary"
                        id={"button-submit-form-register"}>Đổi mật khẩu
                </button>
            )
        }
        return (
            <></>
        )
    }
}

