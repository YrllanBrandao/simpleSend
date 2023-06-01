import confirm_email_01 from './confirmEmail/template_01';
import recovery_password_01 from './recoveryPassword/template_01';


export interface ConfirmEmail{
  confirmationCode: number;
}
export interface RecoveryPassword{
 
  url:  string;
  username?:string
}

class Template {
  constructor(public language:string='en'){
    this.language = language;
   }

  public confirmEmail(data:ConfirmEmail) {
     const code:number = data.confirmationCode;
    return confirm_email_01(code, this.language);
  }
  public recoveryPassword(data:Partial<RecoveryPassword>) {
  
    const user: string  = data.username || "!";
    const url: string = data.url || '#';
   return recovery_password_01( url, user, this.language);
 }
}

export default Template;