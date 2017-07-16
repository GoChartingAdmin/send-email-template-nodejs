const EmailTemplate = require('email-templates').EmailTemplate;
const gmailNode = require('gmail-node');
const path = require('path');
const templateDir = path.join(__dirname, 'templates');
const clientSecret = require('./config/clientSecret.json');
const token = require('./config/token.json');

const welcomeLetter = new EmailTemplate(templateDir);
var userData = {
    name: "Kashish Gupta",
    emailId: 'kashishguptatech@gmail.com',
    activationLink: "https://github.com/kashishgupta1990/send-email-template-nodejs"
};

var emailObject = {
    to: 'guptkashish@gmail.com',
    subject: 'Welcome Email Testing',
    message: ''
};

welcomeLetter.render(userData, function (err, result) {
    emailObject.message = result.html;
    gmailNode.sendHTMLWithToken(emailObject,clientSecret, token, (err, data)=>{
        console.log(err || data);
    });
});

