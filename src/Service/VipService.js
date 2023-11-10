import axios from "axios";

export function findAll() {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/vipService/findAll")
                .then((res) => {
                    return res.data;
                }).catch(() => {
                return []
            })
        )
    })
}