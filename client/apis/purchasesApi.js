import request from 'superagent'

const rootUrl = '/api/v1/purchases'

export function getAllPurchases() {
    return request
    .get(rootUrl)
    .then(response => response.body)
}

export function addPurchase(item) {
    console.log(item, 'this is the api speaking')
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