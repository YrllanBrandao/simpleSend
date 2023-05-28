"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class Mailer {
    constructor(config) {
        this.config = config;
        this.createTransport = () => {
            return nodemailer_1.default.createTransport(this.config);
        };
        this.send = (options) => __awaiter(this, void 0, void 0, function* () {
            const transporter = this.createTransport();
            transporter.sendMail(options, (error, info) => {
                if (error)
                    return console.log("An error has Ocurred:", error);
                console.log("Success", info);
            });
        });
        this.config = config;
    }
    ;
}
exports.default = Mailer;
