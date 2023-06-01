"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_sendmail_1 = __importDefault(require("simple-sendmail"));
const template_1 = __importDefault(require("simple-sendmail/dist/templates/template"));
// default: en
const template = new template_1.default();
// template options
const recoveryPasswordOptions = {
    // mandatory
    url: 'https://domain.test/tokenexample?1244',
    // username is optional
    username: 'zequinha',
    // optional
    title: "recovery pass.."
};
// e-mail config
const config = {
    host: "your email host",
    port: 23,
    auth: {
        user: 'your_email@example.com',
        pass: 'your_pass'
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
    html: template.recoveryPassword(recoveryPasswordOptions)
};
// sending the email
const sender = new simple_sendmail_1.default(config);
// returns success or error
sender.send(message);
