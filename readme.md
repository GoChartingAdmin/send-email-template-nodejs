# Send Email Template from GMail via Nodejs

## Install dependency
- `npm install`

## How to get secret key ?
- Open link https://console.developers.google.com/flows/enableapi?apiid=gmail
- Use this wizard to create or select a project in the Google Developers Console and automatically turn on the API. 
- Click Continue, then Go to credentials.
- At the top of the page, select the OAuth consent screen tab. Select an Email address, enter a Product name if not already set, and click the Save button.
- Select the Credentials tab, click the Create credentials button and select OAuth client ID.
- Select the application type Other, enter the any name "gmail-node-app", and click the Create button.
- Click OK to dismiss the resulting dialog.
- Click the file_download (Download JSON) button to the right of the client ID.
- Move this file to config directory in your working directory and use it with any name like clientSecret.json.

## How to generate token ?
- `node generateUrl.js` - Execute the command, It will show you URL. Copy that url and past on your browser after that it will ask for GMail password and return one key like `4/hfWgzJAjK9t15ekSnPdiKGMtmKxwgOwlVUT4k-bM3FE`
- Replace that key present in file `generateToken.js` with new key which looks like `4/hfWgzJAjK9t15ekSnPdiKGMtmKxwgOwlVUT4k-bM3FE`
- `node generateToken.js` - Execute the command. If everything goes well you will see the `token.json` file in `config` folder.

## Execute the application
- Update `emailObject` and `userData` present in `app.js` file. 
- Update the template present in `templates/welcome.html.hbs` file.
- `node app.js` - Execute to see the result.
