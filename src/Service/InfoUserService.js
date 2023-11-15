import axios from "axios";

export function findByIdAccount(id, token) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/profileUser/findByIdAccount/" + id,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    return res;
                }).catch(() => {
                return {}
            })
        )
    })
}

export function updateAvatar(url, id, token) {
    return new Promise((resolve) => {
        let obj = {
            avatarImage: url
        }
        resolve(
            axios.post("http://localhost:8080/api/profileUser/updateAvatarImage/" + id, obj,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).catch(() => {
                alert("Lỗi kết nối đến máy chủ!")
            })
        )
    })
}

export function updateInfo(profileUser, token) {
    return new Promise((resolve) => {
        resolve(
            axios.post("http://localhost:8080/api/profileUser/updateInformation", profileUser,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                return res.data
            })
                .catch(() => {
                    return profileUser;
                })
        )
    })
}

export const userRegisterToLover = (idAccountUser, token) => {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/profileUser/registerToLover/" + idAccountUser, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                return res.data;
            })
        )
    })
}

