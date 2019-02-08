
const express = require('express');
const app = express();

/*app.get('/:name', (req, res)=>{
  console.log(req.params.name);
  console.log(req.params['name']);
  res.send('Hello World!' + req.params.name);
});*/

app.json('/json',(req,res)=>{
	res.json({"alumnos":"Cucho":"Aleman":"Lopez":"Orteg"}); // objeto anonimo con propiedad cucho

});

/*app.post ('/json',(req,res)=>{
	res.json({'name': 'Jelly'}); // objeto anonimo con propiedad cucho

});*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//app.listen(3000,() => console.log('app listening on port 3000'))