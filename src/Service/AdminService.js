import axios from "axios";

export function findAllProfileUserByIdStatusUser(token) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/admin/findAllUserRegisterToLover", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                return res.data;
            }).catch(() => {
                return []
            })
        )
    })
}

export function acceptUserToLover(idAccount, token) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/admin/acceptUserToLover/" + idAccount, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                return res.data;
            }).catch(() => {
            })
        )
    })
}