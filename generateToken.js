const gmailNode = require('gmail-node');
const fs = require('fs');
const clientSecret = require('./config/clientSecret.json');
const key = '4/hfWgzJAjK9t15ekSnPdiKGMtmKxwgOwlVUT4k-bM3FE'; // Replace this key with your actual key.
gmailNode.generateToken(clientSecret, key,(err, data)=>{
    if(err){
        throw err;
    }else {
        console.log(data);
        fs.writeFileSync('./config/token.json', JSON.stringify(data));
    }
});
