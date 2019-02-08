
const express = require('express');
const app = express();

/*app.get('/:name', (req, res)=>{
  console.log(req.params.name);
  console.log(req.params['name']);
  res.send('Hello World!' + req.params.name);
});*/

/*app.json('/json',(req,res)=>{
	res.json({"alumnos":"Cucho":"Aleman":"Lopez":"Orteg"}); // objeto anonimo con propiedad cucho

});*/

/*app.post ('/json',(req,res)=>{
	/*res.json('name': 'Jelly','Josefina');*/ // objeto anonimo con propiedad cucho
    /* res.json (myData = []; 
// w  ww. j a va  2  s.  c  o  m
      myData.push('maria','pedro','arial'); // add at the end 
      console.log(myData)// prints [1] 
/*});*/

    app.post ('/json',(req,res)=>{
	res.json({'alumnos[]','Jelly','Maria','Pedro'}); // objeto anonimo con propiedad cucho

});

    /*var nombresUsuarios={datos:[{nombre :''},{acierto:''},{fallo:''}]};

    var obj = JSON.parse(nombresUsuarios);

    for (var i = 0; i < rows.length; i++) {
     obj['datos'].push({"nombre":rows[i].nombre,"acierto":rows[i].dato1,"fallo":rows[i].dato2});
};

     nombresUsuarios= JSON.stringify(obj);*/



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//app.listen(3000,() => console.log('app listening on port 3000'))