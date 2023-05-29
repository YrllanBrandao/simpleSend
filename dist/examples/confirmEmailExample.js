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
    host: "smtp.office365.com",
    port: 587,
    auth: {
        user: 'email@example.com',
        pass: process.env.PASSWORD
    }
};
// get template instance
// const template:Template = new Template('pt');
// default: en
const template = new template_1.default();
// template options
const confirmEmailOptions = {
    // optional
    title: 'Please confirm your e-mail',
    // confirmation code is number and mandatory
    confirmationCode: 999999
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
    html: template.confirmEmail(confirmEmailOptions)
};
// sending the email
const sender = new index_1.default(config);
// returns success or error
sender.send(message);
