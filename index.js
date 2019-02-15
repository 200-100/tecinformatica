/*BodyRequest toma lo que se mete en el puerto de xhttp(middlewer)*/

const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html'); /*res.sendFile porque con mayusculas!*/

});

app.post('/user',function(req,res) {
	var user_name=req.body.user;
	var clave=req.body.clave;
	console.log("user name="+user_name+", password is"+ clave);
   var obj = JSON.parse(req.body.content);
   var fs = require("fs");
	fs.writeFileSync('./usuarios.json', obj, 'utf-8'); 
      res.json({'status':'OK' });      
});
/*
///JQuery post()
{
	$("button").click(function(){
	  $.post("file:///C:/Users/aalem/Documents/express/index.html"){
	  	alert("id:"+9999+"\nname"+ Aleman);

	  }
	});
}*/


/*var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



/*TAREA LO DE SEND, METER UNA PAG HTML DEBE TENER DOS INPUTS, PARA METER EL ID DEL ALUMNO Y EL OTRO DEBE TENER EL NOMBRE
DEBE TENER UN BOTON UN BOTON PARA LA LLAMADA POST CUANDO PULSE EL BOTON DEBEMOS INDICAR QUE YA SE AGREGO EL JQuery.post() para contectar con el node
con el post


JQUERY POST*/