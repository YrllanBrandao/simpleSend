"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_01_1 = __importDefault(require("./confirmEmail/template_01"));
const template_01_2 = __importDefault(require("./recoveryPassword/template_01"));
class Template {
    constructor() { }
    confirmEmail(data) {
        const title = data.title || 'confirmação de email';
        const code = data.confirmationCode;
        return (0, template_01_1.default)(title, code);
    }
    recoveryPassword(data) {
        const title = data.title || 'Recuperação de senha';
        const user = data.username || "!";
        const url = data.url || '#';
        return (0, template_01_2.default)(title, url, user);
    }
}
exports.default = Template;
