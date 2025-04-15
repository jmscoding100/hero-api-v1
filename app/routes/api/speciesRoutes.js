const express = require('express')
const router = express.Router()
const dao = require('../../daos/api/speciesDao')


//findAll
//localhost:3000/api/power
router.get('/', (req, res)=>{
    dao.findAll(res, dao.table)
})

router.get('/species/:species', (req, res)=>{
    dao.findHeroesBySpecies(res, dao.table, req.params.power)
})



//sort
router.get('/sort', (req, res)=>{
    dao.sortGeneral(res, dao.table)
})


//findById
router.get('/:id', (req, res)=>{
    dao.findById(res, dao.table, req.params.id)
})


module.exports = router