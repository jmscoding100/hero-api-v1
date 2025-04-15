//step 1
const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
//router is going here...
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

//step 3
// handle security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOringinEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "http: data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded( {extended: true }))


//step 4
//make root route
//localhost:3000/api
server.get('/api', (req, res)=> {
    res.json({
        'All Heroes': `http://localhost:${PORT}/api/hero`,
        'All Franchises': `http://localhost:${PORT}/api/franchise`,
        'All Teams': `http://localhost:${PORT}/api/team`,
        'All Species': `http://localhost:${PORT}/api/species`,
        'All Powers': `http://localhost:${PORT}/api/power`
    })
})


//step 5
//add router & set view engine
server.use('/', router)
server.set('view engine', 'ejs')



//step 2
server.listen(PORT, ()=> console.log(`It works ${PORT}`))

