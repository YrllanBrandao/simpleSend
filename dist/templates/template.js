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
        return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    ${template_01_1.default}
    </body>
    
    </html>
    
            `;
    }
    recoveryPassword(data) {
        const title = data.title || 'Recuperação de senha';
        const user = data.username || "!";
        const url = data.url || '#';
        return (0, template_01_2.default)(title, url, user);
    }
}
exports.default = Template;
