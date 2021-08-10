import request from 'superagent'

const rootUrl = '/api/v1/purchases'

export function getAllPurchases() {
    return request
    .get(rootUrl)
    .then(response => response.body)
}

export function addPurchase(item) {
    return request
    .post(rootUrl)
    .send(item)
    .then(res => {
        return res.body
    })
    .catch(err => {
        console.log(err.message)
    })
}

export function deletePurchase(id) {
    return request
    .delete('/api/v1/purchases/' + id)
    .then(res => res.body)
}