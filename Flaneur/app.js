// Requiring modulus
const express = require('express');
const dotenv = require('dotenv').config()
const db = require(__dirname + '/modules/database')

const app = express();

app.use(express.static('./'));

app.get('/', (req, res) => {
	db.Poem.findAll({
	}).then( result =>{
	res.render('index', {result: result})

	})
})

app.use('/', require(__dirname + '/routes/data'))
/// Listen on port 3000
app.listen(3000, function() {
	console.log('listening on 3000')
})


