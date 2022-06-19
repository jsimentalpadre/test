
const colors = require('colors');
const express = require('express');

const server = express();

server.get('/', function(req,res){
    res.send('<h1>Hola Mundo Con Express</h1>');
});

server.listen(3000, function(){
    console.log('Sever on port 3000'.red);
});


/* const http = require('http');

const colors = require('colors');

const handleServer = function(req, res){  
    res.writeHead(200, { 'content-type':'text/html'}) 
    res.write('<h1>Hola Mundo </h1>');
    res.end();
}


const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on Port 3000'.green);
})
 */

/*
const fs = require('fs');

fs.readFile('./texto.txt', function(err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

*/

/*
fs.writeFile('./texto.txt','Linea Uno',function(err){
    if (err){
        console.log(err);
    }
    console.log('Archivo Creado')

});
console.log('Ultima Lineas de Codigo');
*/
    
// const os = require('os');

// console.log(os.platform());
// console.log(os.release());
// console.log('Free Mem:' + os.freemem(), 'bytes');
// console.log('Total Mem:' + os.totalmem(), 'bytes');