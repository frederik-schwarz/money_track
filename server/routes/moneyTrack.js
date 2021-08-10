
const express = require('express')

const dbFuncs = require('../db/dbFuncs')

const router = express.Router()

router.get('/', (req,res) => {
    dbFuncs.getAllPurchases()
    .then(purchase => {
        res.json(purchase)
    })
})
router.get('/:id', (req,res) => {
    dbFuncs.getSinglePurchase(parseInt(req.params.id))
    .then(purchase => {
        res.json(purchase)
    })
})

router.post('/', (req,res) => {
    dbFuncs.postNewPurchase(req.body)
    .then(purchase => {
        console.log(purchase)
        res.json(purchase)
    })
})

router.patch('/:id', (req, res) => {
    dbFuncs.updatePurchase(parseInt(req.params.id), req.body)
    .then(dbFuncs.getAllPurchases()
    .then(purchase => {
        res.json(purchase)
    }))
})

router.delete('/:id', (req,res) => {
    dbFuncs.deletePurchase(parseInt(req.params.id))
    .then(deleted => {
        res.json(deleted)
    })
})



//write your get post patch del and other routes here 

module.exports = router