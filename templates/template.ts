
interface ConfirmEmail{
  title?:string;
  confirmationCode: number;
}

class Template {
  constructor() { }

  public confirmEmail(data:ConfirmEmail) {
    const title:string = data.title || 'confirmação de email'
    return `
      
            `;
  }
  
}

export default Template;
