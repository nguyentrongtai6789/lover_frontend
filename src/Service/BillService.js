import axios from "axios";

export function findAllByAccountUserId(id, token) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/bill/findAllByAccountUserId/" + id,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    return res.data;
                }).catch(() => {
                return []
            })
        )
    })
}
export function deleteById(id, token) {
    return new Promise((resolve) => {
        resolve(
            axios.delete("http://localhost:8080/api/bill/deleteById/" + id,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    alert(res.data)
                }).catch(() => {
            })
        )
    })
}