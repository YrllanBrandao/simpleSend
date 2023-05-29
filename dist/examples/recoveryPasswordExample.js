"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("../index"));
const template_1 = __importDefault(require("../templates/template"));
// load enviroment variables
dotenv_1.default.config();
// e-mail config
const config = {
    host: "smtp.example.com",
    port: 587,
    auth: {
        user: 'email@example.com',
        pass: process.env.PASSWORD
    }
};
// get template object
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
// message mandatory options
const message = {
    // mandatory
    from: 'email@example.com',
    // mandatory
    to: 'to@example.com',
    // optional
    subject: "only a test",
    // you should choose the template here and put him options
    html: template.recoveryPassword(recoveryPasswordOptions)
};
// sending the email
const sender = new index_1.default(config);
// returns success or error
sender.send(message);
