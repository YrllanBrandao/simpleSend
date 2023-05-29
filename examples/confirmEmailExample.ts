import dotenv from 'dotenv';
import simpleSendMail, {Config, Message} from "../index";
import Template, {ConfirmEmail, RecoveryPassword} from "../templates/template";


// load enviroment variables
dotenv.config();



// e-mail config
const config:Config ={
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: 'email@example.com',
      pass: process.env.PASSWORD!
    }
}

// get template instance
// const template:Template = new Template('pt');
// default: en
const template:Template = new Template();
// template options

const confirmEmailOptions: ConfirmEmail = {
    // optional
    title: 'Please confirm your e-mail',
    // confirmation code is number and mandatory
    confirmationCode: 999999
}

// message mandatory options
const message:Message = {
    // mandatory
    from: 'email@example.com',
    // mandatory
    to: 'to@example.com',
    // optional
    subject: "only a test",
    // you should choose the template here and put him options
    html: template.confirmEmail(confirmEmailOptions)
}


// sending the email
const sender: simpleSendMail = new simpleSendMail(config);
// returns success or error
sender.send(message);

