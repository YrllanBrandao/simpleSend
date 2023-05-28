"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333333; margin-bottom: 20px;">Confirmação de Código</h1>
        <p style="color: #666666; margin-bottom: 10px;">Olá,</p>
        <p style="color: #666666; margin-bottom: 10px;">Seu código de confirmação é:</p>
        <p style="font-size: 24px; font-weight: bold; color: #333333; margin-top: 30px; margin-bottom: 40px;">${data.confirmationCode}</p>
        <p style="color: #666666; margin-bottom: 10px;">Utilize este código para confirmar sua conta.</p>
        <a href="#" style="display: inline-block; background-color: #4CAF50; color: #ffffff; text-align: center; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">Confirmar</a>
      </div>
    </body>
    
    </html>
    
            `;
    }
}
exports.default = Template;
