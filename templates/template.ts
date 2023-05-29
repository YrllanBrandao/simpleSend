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
  constructor(public language:string='en'){
    this.language = language;
   }

  public confirmEmail(data:ConfirmEmail) {
     const title:string = data.title || 'confirmação de email';
     const code:number = data.confirmationCode;
    return confirm_email_01(title, code);
  }
  public recoveryPassword(data:Partial<RecoveryPassword>) {
    const title:string = data.title || 'Recuperação de senha';
    const user: string  = data.username || "!";
    const url: string = data.url || '#';
   return recovery_password_01(title, url, user, this.language);
 }
}

export default Template;
