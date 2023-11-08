import axios from "axios";

export function findByIdAccount(id, token) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/profileUser/findByIdAccount/" + id,
                {headers:{
                        Authorization: `Bearer ${token}`
                    }})
                .then((res) => {
                    return res;
                }).catch(() => {
                return {}
            })
        )
    })
}