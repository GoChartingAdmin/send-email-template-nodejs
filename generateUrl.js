const gmailNode = require('gmail-node');
const clientSecret = require('./config/clientSecret.json');
var url = gmailNode.generateUrl(clientSecret);
console.log("URL: ", url);
