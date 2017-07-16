const EmailTemplate = require('email-templates').EmailTemplate;
const gmailNode = require('gmail-node');
const path = require('path');
const templateDir = path.join(__dirname, 'templates');
const clientSecret = require('./config/clientSecret.json');
const token = require('./config/token.json');

const welcomeLetter = new EmailTemplate(templateDir);
var user = {
    name: "Kashish Gupta",
    emailId: 'kashishguptatech@gmail.com',
    activationLink: "https://github.com/kashishgupta1990/send-email-template-nodejs"
};
welcomeLetter.render(user, function (err, result) {
    console.log(result.html);
});

