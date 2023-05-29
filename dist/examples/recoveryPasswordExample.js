"use strict";
// import dotenv from 'dotenv';
// import simpleSendMail, {Config, Message} from "../index";
// import Template, {ConfirmEmail, RecoveryPassword} from "../templates/template";
// // load enviroment variables
// dotenv.config();
// // e-mail config
// const config:Config ={
//     host: "smtp.example.com",
//     port: 587,
//     auth: {
//       user: 'email@example.com',
//       pass: process.env.PASSWORD!
//     }
// }
// // get template object
// const template:Template = new Template();
// // template options
// const recoveryPasswordOptions:RecoveryPassword = {
//     // mandatory
//     url: 'https://domain.test/tokenexample?1244',
//     // username is optional
//     username: 'zequinha',
//     // optional
//     title: "recovery pass.."
// }
// // message mandatory options
// const message:Message = {
//     // mandatory
//     from: 'email@example.com',
//     // mandatory
//     to: 'to@example.com',
//     // optional
//     subject: "only a test",
//     // you should choose the template here and put him options
//     // html: template.recoveryPassword(recoveryPasswordOptions)
// }
// // sending the email
// const sender: simpleSendMail = new simpleSendMail(config);
// // returns success or error
// sender.send(message);
