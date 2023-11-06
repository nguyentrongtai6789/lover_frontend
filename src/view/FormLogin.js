import React, {useState} from 'react';
import '../css/login.css';
import {useNavigate} from "react-router-dom"; // Import tệp CSS
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";

export function FormLogin() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        nickname: "",
        username: "",
        password: "",
        email: "",
        password2: "",
    })
    const [loading, setLoading] = useState(false)
    const validationSchema = Yup.object().shape({
        nickname: Yup.string().required("Vui lòng nhập tên hiển thị trong ứng dụng!").matches(/^[a-zA-Z0-9]{1,10}$/, "Tên hiển thị chỉ chứa tối đa 10 kí tự gồm chữ cái và chữ số, không chứa kí tự đặc biệt!"),
        email: Yup.string().email('Email không đúng định dạng!').required('Vui lòng nhập email!'),
        password: Yup.string().required('Vui lòng nhập mật khẩu!').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, "Mật khẩu phải chứa tối thiểu 8 kí tự, ít nhất 1 chữ cái viết thường, ít nhất một chữ cái viết hoa, ít nhất một chữ số!"),
        password2: Yup.string().required("Vui lòng nhập lại mật khẩu").oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp'),
        username: Yup.string().required("Vui lòng nhập tên đăng nhập!").matches(/^[a-zA-Z0-9]{1,10}$/, "Tên đăng nhập chỉ chứa tối đa 10 kí tự gồm chữ cái và chữ số, không chứa kí tự đặc biệt!"),
    });

    function sendCodeToEmail() {
        let email = document.getElementById("email-form-register").value;
        if (email === "") {
            return alert("Bạn chưa nhập email!")
        }
        axios.post("http://localhost:8080/api/sendCodeToEmail/" + email).then((res) => {
            alert(res.data);
        })
    }

    function registerNewAccount(account) {
        let code = document.getElementById("code-email-verification").value;
        if (code === "") {
            return alert("Hãy điền mã xác nhận")
        }
        axios.post("http://localhost:8080/api/createNewAccount/" + code, account).then((res) => {
            alert(res.data);
        })
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
                        <div className="modal-body">
                            <input type="text" className={"form-control"} id={"email-form-login"}
                                   placeholder={"Tên đăng nhập hoặc Email"} style={{textAlign: "center"}}/>
                            <input type="text" className={"form-control"} id={"email-form-login"}
                                   placeholder={"Nhập mật khẩu"} style={{textAlign: "center", marginTop: 10}}/>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary">Đăng nhập</button>
                            <br/>
                            <button type="button" className="btn btn-primary">Đăng nhập bằng FaceBook</button>
                        </div>
                        <div className="text-center">
                            <a href="" className="nav-link scrollto" data-bs-toggle={"modal"}
                               data-bs-target={"#register"}>
                                <span className="register-link">Đăng ký tài khoản</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="register" tabIndex="-1" role="dialog" aria-labelledby="registerTitle"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <img src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo"
                                 style={{width: "100px"}}/>
                            <h1>PlayerDue</h1>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={account}
                                onSubmit={(account) => {
                                    registerNewAccount(account)
                                }}
                                validationSchema={validationSchema}
                            >
                                <Form>
                                    <Field type="text" className={"form-control"}
                                           placeholder={"Tên đăng nhập"} style={{textAlign: "center"}}
                                           name={"username"}/>
                                    <ErrorMessage name="username"/>
                                    <Field type="text" className={"form-control"}
                                           placeholder={"Tên hiển thị trong ứng dụng"} style={{textAlign: "center"}}
                                           name={"nickname"}/>
                                    <ErrorMessage name="nickname"/>
                                    <Field type="password" className={"form-control"}
                                           placeholder={"Mật khẩu"} style={{textAlign: "center", marginTop: 10}}
                                           name={"password"}/>
                                    <ErrorMessage name="password"/>
                                    <Field type="password" className={"form-control"}
                                           placeholder={"Nhập lại mật khẩu"} style={{textAlign: "center"}}
                                           name={"password2"}/>
                                    <ErrorMessage name="password2"/>
                                    <Field type="text" className={"form-control"} id={"email-form-register"}
                                           placeholder={"Email"} style={{textAlign: "center"}} name={"email"}/>
                                    <ErrorMessage name="email"/>
                                    <div style={{display: "flex"}}
                                         className="modal-footer d-flex justify-content-center">
                                        <input type="text" placeholder={"Nhập mã xác nhận email"}
                                               className={"form-control"} id={"code-email-verification"}
                                               style={{width:300}}/>
                                        <button type="button" className="btn btn-secondary"
                                                id={"button-submit-form-register"}
                                                onClick={sendCodeToEmail}>Lấy mã
                                        </button>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                        <button type="submit" className="btn btn-secondary"
                                                id={"button-submit-form-register"}>Đăng ký tài khoản
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}