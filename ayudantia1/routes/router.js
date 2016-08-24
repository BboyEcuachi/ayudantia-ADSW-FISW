/**
 * Created by famancil on 17-08-16.
 */
var express = require('express');
var app= express();

app.get('/',function(req,res){
    res.send('<h1> Hola Mundo </h1>');
});

module.exports = app;
