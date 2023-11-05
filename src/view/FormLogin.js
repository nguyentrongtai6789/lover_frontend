export function FormLogin() {
    return (
        <>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign:"center", display:"inline"}}>
                            <p style={{fontSize:25}}>ĐĂNG NHẬP</p>
                        </div>
                        <div className="modal-body">
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Nhập email"}
                                   style={{textAlign:"center"}}/>
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Nhập mật khẩu"}
                                   style={{textAlign:"center", marginTop:10}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Đăng nhập</button>
                            <br/>
                            <button type="button" className="btn btn-primary">Đăng nhập bằng FaceBook</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}