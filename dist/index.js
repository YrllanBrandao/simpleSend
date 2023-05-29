"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class simpleSend {
    constructor(config) {
        this.config = config;
        this.createTransport = () => {
            const newConfig = {
                host: this.config.host,
                port: this.config.port,
                auth: this.config.auth
            };
            return nodemailer_1.default.createTransport(newConfig);
        };
        this.send = (message) => {
            try {
                const transporter = this.createTransport();
                transporter.sendMail(message, (error, info) => {
                    if (error)
                        throw new Error(`ERROR: ${error}`);
                    else {
                        return console.log("SUCCESS!!", info);
                    }
                });
            }
            catch (error) {
                return console.log(error);
            }
        };
        this.config = config;
    }
    ;
}
exports.default = simpleSend;
