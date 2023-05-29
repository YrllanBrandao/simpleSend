"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function recovery_password_01(title, url, username, language) {
    // Define language-specific strings
    const strings = {
        en: {
            title: 'Password Recovery',
            greeting: `Hello, ${username}`,
            request: 'We received a password recovery request for your account.',
            button: 'Reset Password',
            ignore: 'If you did not request a password recovery, you can ignore this email.',
        },
        pt: {
            title: 'Recuperação de Senha',
            greeting: `Olá, ${username}`,
            request: 'Recebemos uma solicitação de recuperação de senha para a sua conta.',
            button: 'Redefinir Senha',
            ignore: 'Caso você não tenha solicitado a recuperação de senha, pode ignorar este e-mail.',
        },
    };
    if (language !== 'pt' && language !== 'en') {
        return 'invalid language';
    }
    // Get language-specific strings based on the provided language
    const { title: langTitle, greeting, request, button, ignore } = strings[language] || strings.en;
    // Main content
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <title>${langTitle}</title>
    </head>
    
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333333; margin-bottom: 20px;">${langTitle}</h1>
        <p style="color: #666666; margin-bottom: 10px;">${greeting}</p>
        <p style="color: #666666; margin-bottom: 10px;">${request}</p>
        <p style="color: #666666; margin-bottom: 10px;">${button}</p>
        <a href="${url}" style="display: inline-block; background-color: #4CAF50; color: #ffffff; text-align: center; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">${button}</a>
        <p style="color: #666666; margin-bottom: 10px;">${ignore}</p>
      </div>
    </body>
    
    </html>
  `;
}
exports.default = recovery_password_01;
