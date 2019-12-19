const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => {
	request({
		headers: {
			'Device-Id': 'curl',
			'Device-OS': 'linux'
		},
		uri: 'https://+79117875764:681824@proverkacheka.nalog.ru:9999/v1/inns/*/kkts/*/fss/9284000100198625/tickets/79725?fiscalSign=1336674326&sendToEmail=no',
		method: 'GET'
	}, function (err, res, body) {
		res.send(body)
	})
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
