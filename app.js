const mysql = require('mysql');  //initialize le module dans une variable 

const con = mysql.createConnection({   
    host: "localhost",   
    user: "nom_utilisateur",   
    password: "mot_de_passe_utilisateur" 
}); 

con.connect(
    function(err) {   
        if (err) throw err;   
        console.log("Connecté à la base de données MySQL!");
    });