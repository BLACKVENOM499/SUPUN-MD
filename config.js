const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'xStEmQSI#VLBaTVnoYRb_NC5Xhb6nQRSndlY5TsUyDW7JgJMoCDk', //add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/nMky5xTB/7341.jpg',
MAX_SIZE: 500
};

