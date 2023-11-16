import {useEffect, useState} from "react";
import {acceptUserToLover, findAllProfileUserByIdStatusUser} from "../Service/AdminService"

export function HomeAdmin() {
    const [account1s, setAccount1s] = useState([])
    const token = localStorage.getItem("token")
    const [check, setCheck] = useState(false);
    useEffect(() => {
        findAllProfileUserByIdStatusUser()
            .then((res) => {
                setAccount1s(res)
                console.log(res)
            })
    }, [check])
    function acceptUserRequest(accountUser) {
        console.log(accountUser)
        acceptUserToLover(accountUser.id, token)
            .then((res)=>{
                alert(res)
                setCheck(!check)
            })
    }
    return (
        <>
            <p style={{marginTop: 100, fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Danh sách tài khoản
                đăng kí làm lover</p>
            <table className={"table table-striped"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên người dùng</th>
                    <th>Ảnh đại diện</th>
                    <th>Nickname</th>
                    <th>Số chứng minh nhân dân</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ email</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {account1s.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.lastName} {item.firstName}</td>
                            <td><img src={item.avatarImage} alt="" style={{width: 150, height: 150}}/></td>
                            <td>{item.account?.nickname}</td>
                            <td>{item.citizenNumber}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.account?.email}</td>
                            <td><button className={"btn btn-primary"} onClick={()=>acceptUserRequest(item.account)}>Xác nhận</button></td>
                            <td><button className={"btn btn-danger"}>Huỷ</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}