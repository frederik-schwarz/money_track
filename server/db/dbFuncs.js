const connection = require('./connect')



const getAllPurchases = (db = connection) => {
    return db('purchases')
    .select()
    .catch(err => {
        console.log('db error', err.message)
    })
}

const postNewPurchase = (purchase, db = connection) => {
    return db('purchases')
    .insert(purchase)
    .catch(err => {
        console.log(err.message)
    })
}

const updatePurchase = (id ,purchase, db = connection) => {
    return db('purchases')
    .where('id', id)
    .update(purchase)
}
const deletePurchase = (id, db = connection) => {
    return db('purchases')
    .where('id', id)
    .delete()
}

const getSinglePurchase = (id, db = connection) => {
    return db('purchases')
    .where('id', id)
    .select()
}
//write your db funcs that are called from routes here

module.exports = {
    getAllPurchases,
    postNewPurchase,
    updatePurchase,
    deletePurchase,
    getSinglePurchase
}