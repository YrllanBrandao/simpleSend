function confirm_email_01( code: number, language: string) {
  // Define language-specific strings
  const strings = {
    en: {
      title: 'Confirmation Code',
      greeting: 'Hello!',
      confirmationCode: 'Your confirmation code is:',
      useCode: 'Use this code to confirm your account.',
    },
    pt: {
      title: 'Código de Confirmação',
      greeting: 'Olá!',
      confirmationCode: 'Seu código de confirmação é:',
      useCode: 'Utilize este código para confirmar sua conta.',
    },
  };
  if(language !== 'pt' && language !== 'en')
  {
      return 'invalid language';
  }
  // Get language-specific strings based on the provided language
  const { title: langTitle, greeting, confirmationCode, useCode } = strings[language] || strings.en;

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
        <p style="color: #666666; margin-bottom: 10px;">${confirmationCode}</p>
        <p style="font-size: 24px; font-weight: bold; color: #333333; margin-top: 30px; margin-bottom: 40px;">${code}</p>
        <p style="color: #666666; margin-bottom: 10px;">${useCode}</p>
      </div>
    </body>
    
    </html>
  `;
}

export default confirm_email_01;
