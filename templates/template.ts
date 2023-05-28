import confirm_email_01 from './confirmEmail/template_01';
import recovery_password_01 from './recoveryPassword/template_01';

export interface ConfirmEmail{
  title?:string;
  confirmationCode: number;
}
export interface RecoveryPassword{
  title?:string;
  url:  string;
  username?:string
}

class Template {
  constructor() { }

  public confirmEmail(data:ConfirmEmail) {
     const title:string = data.title || 'confirmação de email';
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    ${confirm_email_01}
    </body>
    
    </html>
    
            `;
  }
  public recoveryPassword(data:Partial<RecoveryPassword>) {
    const title:string = data.title || 'Recuperação de senha';
    const user: string  = data.username || "!";
    const url: string = data.url || '#';
   return recovery_password_01(title, url, user);
 }
}

export default Template;
