import axios from "axios";

export const findByIdLover = (id) => {
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/profileLover/findById/" + id).then((res) => {
                return res.data
            })
        )
    })
}
export const findImagesByIdLover = (id) => {
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/image/findAllByIdProfileLover/" + id).then((res) => {
                return res.data
            })
        )
    })
}

export function findVipServicesByIdLover(id) {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:8080/api/vipService/findVipServicesOfLover/" + id)
                .then((res) => {
                    return res.data
                }).catch(() => {
                return []
            })
        )
    })
}

export function createBill(bill, token) {
    return new Promise((resolve) => {
        resolve(
            axios.post("http://localhost:8080/api/bill/createBill", bill,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(() => {
                    alert("Tạo bill thành công!")
                }).catch(() => {
                alert("Xảy ra lỗi trong quá trình tạo bill!")
            })
        )
    })
}