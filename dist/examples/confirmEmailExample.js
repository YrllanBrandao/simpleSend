"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_sendmail_1 = __importDefault(require("simple-sendmail"));
const template_1 = __importDefault(require("simple-sendmail/dist/templates/template"));
// default: en
const template = new template_1.default();
const confirmEmailOptions = {
    // optional
    title: 'Please confirm your e-mail',
    // confirmation code is number and mandatory
    confirmationCode: 999999
};
// e-mail config
const config = {
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: 'your_email@example.com',
        pass: 'your_password'
    }
};
// message mandatory options
const message = {
    // mandatory
    from: 'your_email@example.com',
    // mandatory
    to: 'to@example.com',
    // optional
    subject: "<only a test>",
    // you should choose the template here and put him options
    html: template.confirmEmail(confirmEmailOptions)
};
// sending the email
const sender = new simple_sendmail_1.default(config);
// returns success or error
sender.send(message);
