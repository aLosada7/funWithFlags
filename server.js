//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/elearning-app'));

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "qohevxsvamoqpe",
  host: "ec2-54-247-125-38.eu-west-1.compute.amazonaws.com",
  database: "d3rs5pp0o7bsfi",
  password: "1234",
  port: "c936e205038f8b2feceae596b3cc32c1c60dca5a8f34107a9242450af36fa435"
});

app.get('/*', function(req,res) {
    pool.query(
        "INSERT INTO public.log(id, edad, sexo, tiempocountries, tiempoquiz, aciertos, fallos, tiempo) VALUES ('prueba','1','',14,14,14,14,'');",
        (err, res) => {
          console.log(err, res);
          pool.end();
        }
      );
res.sendFile(path.join(__dirname+'/dist/elearning-app/index.html'));
});

app.post('/log', function(req,res) {
    console.log(req.body);
    res.status(200).json("Updated");

    let body = req.body.userInfo;

    pool.query(
        "INSERT INTO public.log(id, edad, sexo, tiempocountries, tiempoquiz, aciertos, fallos, tiempo) VALUES ('" + body.id + "','" + body.edad + "','" + body.sexo + "'," + body.tiempoCountries + "," + body.tiempoQuiz + "," + body.respuestasAcertadas + "," + body.respuestasFalladas + ",'" + body.date + "');",
        (err, res) => {
          console.log(err, res);
          pool.end();
        }
      );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);