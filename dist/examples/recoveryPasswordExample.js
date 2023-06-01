"use strict";
// import simpleSend, {Message, Config} from "simple-sendmail";
// import Template, {RecoveryPassword} from 'simple-sendmail/dist/templates/template';
// // default: en
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
// // e-mail config
// const config:Config ={
//     host: "your email host",
//     port: 23,
//     auth: {
//       user: 'your_email@example.com',
//       pass: 'your_pass'
//     }
// }
// // message mandatory options
// const message:Message = {
//     // mandatory
//     from: 'your_email@example.com',
//     // mandatory
//     to: 'to@example.com',
//     // optional
//     subject: "<only a test>",
//     // you should choose the template here and put him options
//     html: template.recoveryPassword(recoveryPasswordOptions)
// }
// // sending the email
// const sender: simpleSend = new simpleSend(config);
// // returns success or error
// sender.send(message);
