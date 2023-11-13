import axios from "axios";

export function findAllByPage(token, page) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/profileLover/findAll?page=" + page,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    return res;
                }).catch(() => {
                return []
            })
        )
    })
}
export function getTotalPage(token) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/profileLover/getTotalPage",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    return res;
                }).catch(() => {
                return 0;
            })
        )
    })
}
