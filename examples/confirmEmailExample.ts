import simpleSend, {Message, Config} from "simple-sendmail";
import Template, {ConfirmEmail} from 'simple-sendmail/dist/templates/template';



// default: en
const template:Template = new Template();




const confirmEmailOptions: ConfirmEmail = {
    // optional
    title: 'Please confirm your e-mail',
    // confirmation code is number and mandatory
    confirmationCode: 999999
}


// e-mail config
const config:Config ={
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: 'your_email@example.com',
      pass: 'your_password'
    }
}


// message mandatory options
const message:Message = {
    // mandatory
    from: 'your_email@example.com',
    // mandatory
    to: 'yrllanflamengp@gmail.com',
    // optional
    subject: "<only a test>",
    // you should choose the template here and put him options
    html: template.confirmEmail(confirmEmailOptions)
}



// sending the email
const sender: simpleSend = new simpleSend(config);
// returns success or error
sender.send(message);






