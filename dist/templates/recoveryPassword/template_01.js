"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recovery_password_01 = (title, url, username) => {
    // main content
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #333333; margin-bottom: 20px;">Recuperação de Senha</h1>
    <p style="color: #666666; margin-bottom: 10px;">Olá${username}</p>
    <p style="color: #666666; margin-bottom: 10px;">Recebemos uma solicitação de recuperação de senha para a sua conta.</p>
    <p style="color: #666666; margin-bottom: 10px;">Clique no botão abaixo para redefinir sua senha:</p>
    <a href="${url}" style="display: inline-block; background-color: #4CAF50; color: #ffffff; text-align: center; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">Redefinir Senha</a>
    <p style="color: #666666; margin-bottom: 10px;">Caso você não tenha solicitado a recuperação de senha, pode ignorar este e-mail.</p>
  </div>
    </body>
    
    </html>
  
    `;
};
exports.default = recovery_password_01;
