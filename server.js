//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/elearning-app'));

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "qohevxsvamoqpe",
  host: "ec2-54-247-125-38.eu-west-1.compute.amazonaws.com",
  database: "d3rs5pp0o7bsfi",
  password: "c936e205038f8b2feceae596b3cc32c1c60dca5a8f34107a9242450af36fa435",
  port: "5432"
});

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/elearning-app/index.html'));
});

app.post('/log', function(req,res) {
    console.log(req.body);

    let body = req.body;

    pool.query(
        "INSERT INTO public.log(id, edad, sexo, tiempocountries, tiempoquiz, aciertos, fallos, tiempo, pistasrestantes, preguntaspista, consecacert, consecfall, sincontestar) VALUES ('" + body.id + "','" + body.edad + "','" + body.sexo + "'," + body.tiempoCountries + "," + body.tiempoQuiz + "," + body.respuestasAcertadas + "," + body.respuestasFalladas + ",'" + body.date + "'," + body.pistasRestantes +"," + body.preguntasPista + "," + body.consecAcert + "," + body.consecFall + "," + body.contadorNoConstestadas + ");",
        (err, res) => {
            console.log(err, res);
            //pool.end();
        }
      );
});

app.post('/logQuestion', function(req,res) {
  console.log(req.body);

  let body = req.body;

  pool.query(
      "INSERT INTO public.log(id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12) VALUES ('" + body[0] + "','" + body[1] + "','" + body[2] + "','" + body[3] + "','" + body[4] + "','" + body[5] + "','" + body[6] + "','" + body[7] + "','" + body[8] + "','" + body[9] + "','" + body[10] + "','" + body[11] + "','" + body[12] + "');",
      (err, res) => {
          console.log(err, res);
          //pool.end();
      }
    );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);