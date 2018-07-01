// const http = require('http');
// http.createServer((req, res)=>{
//     conesole.log('server start');
// }).listen(8000);

const express = require('express');
const database = require('database');
const config = require('config');
const app = express();
const DB_PORT = config.get('DB_PORT');
app.listen('8000', async() => {
    try{
        console.log('database connect1')
        await database.connect();
        console.log('database connect2')
    } catch (error) {
        console.log('error');
    }
console.log(`server start : ${DB_PORT}`);
})
