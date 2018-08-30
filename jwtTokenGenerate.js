var api_key = "GGt79K2USZ-P2YDd8uIsXg";
var api_secret = "S4vuqWwgvW0Rr1ZvEaOBJPECiJJTFJgrJO0h";
var btoa = require("btoa");
var crypto = require("crypto-js");
//var jwt = require('jsonwebtoken');

var header = {
    "typ": "JWT",
    "alg": "HS256"
};
var payload = {
    "iss": api_key,
    "exp": 1535628102923
};

var encodedHeader = btoa(JSON.stringify(header));
var encodedPayLoad = btoa(JSON.stringify(payload));

var hash = crypto.HmacSHA256(encodedHeader + "." +
    encodedPayLoad, api_secret);
var signature = crypto.enc.Base64.stringify(hash);

var token = encodedHeader + "." + encodedPayLoad + "." + signature;
//var token = jwt.sign(payload, api_secret);
console.log(token);