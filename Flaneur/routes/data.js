const express 		= require('express')
const db 			= require(__dirname + '/../modules/database')
const routerData 	= express.Router()



//
routerData.get('/data', (req,res)=>{
	db.Poem.findAll({
	}).then( result =>{
		res.send(result)
	})
	
})

module.exports = routerData 