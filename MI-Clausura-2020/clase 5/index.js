const Express = require('express');
const mysql = require('mysql');
const app = Express();
var conn = mysql.createConnection({
    // host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // user: 'qzqnulaytevijlws',
    // password: 'i84u2au7zwfo18xr',
    // database: "cl93gc22d59vt2qc",
    // port: "3306"
    host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "c3yxm56xoiva8nz1",
    password: "om1hjmtbl3qcxgcs",
    database: "o4dti14tbvvdeb98",
    port: "3306"

});
//alt 96

        conn.connect();
app.get("/db", function (req, res) {
    console.log("usuario es: ", req.query.user);
    console.log("password es: ", req.query.pass);
    // res.send(`usuario es:   ${req.query.user} ,
    // password es:  ${req.query.pass}`);
    try {
        conn.query("SELECT * FROM mi01", function (err, rows, fields) {
            if (err)
                throw err;
            console.log("primer fila: ", rows[0]);
            
            console.log("primer fila: ", rows[1]);
            
            console.log("primer fila: ", rows[2]);
            var sies = false;
            rows.forEach(element => {
                // 
                if (element.username == req.query.user && element.password == req.query.pass) {
                    sies = true;
                    
                res.send(element);
                } else {
                    sies = false;
                }

            });
            if (sies) {
                res.send(rows[0]);
            } else {
                res.send("noexiste");
            }
        });
      //  conn.end();

    } catch (error) {
        console.error(error);
    } finally {
        //conn.end;
    }

});

app.get('/', (req, res) => {
    res.send("<h1>Aló polisia</h1>");

});

app.get('/saludosChetos', (req, res) => {
    res.send("<h2>Saludos Chetos GET</h2>");

});

app.post('/saludosChetos', (req, res) => {
    res.send("<h2>Saludos Chetos POST</h2>");

});

app.listen('3000', () => {
    console.log(" El Servidor se ha inicializado en el puerto 3000");
});





