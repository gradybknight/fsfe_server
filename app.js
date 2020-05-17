const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
	res.send('hello world from express linked to github');
});

app.get('/demo', (req,res)=> {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('Coffee is better');
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
