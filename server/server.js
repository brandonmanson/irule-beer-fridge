/**
 * Created by brandon on 3/6/15.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded( {
    extended: true
}));
app.use(bodyParser.json());

var mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/beer-fridge');

var Product = mongoose.model('Product', {name: String});

app.get("/", function(req, res){
    Product.find(function(err, products) {
        res.send(products);
    })
})

app.post("/add", function(req, res) {
    var name = req.body.name;
    var product = new Product({name: name});
    product.save(function(err) {
        res.send();
    })

})

app.listen(3000);