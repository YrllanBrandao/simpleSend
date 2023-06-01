# simpleSend
**This tool will help you optimize the process of sending recurring emails such as email confirmation and password recovery.**
>
> Who has never needed to create an email confirmation or password recovery system?
> Well, this tool aims to make the life of us developers easier, bringing beautiful and easily deliverable templates with minimal configuration.

## DISCLAIMER

The app is still in alpha, so it may not work as expected. If you find any bugs or has an suggestion, please report them in the [issues](https://github.com/YrllanBrandao/simpleSend/issues) section.

### template 01 - recovery password 
![image](https://github.com/YrllanBrandao/simpleSend/assets/77467410/b00316ea-145b-49de-b849-cb6dc0297984)


### template 01 - Confirm Email  

![image](https://github.com/YrllanBrandao/simpleSend/assets/77467410/8073c946-5d4a-4723-bb4c-d30a5730f7d6)


### use Examples

[HERE](https://github.com/YrllanBrandao/simpleSendMail/tree/main/examples)


# Simple Sendmail 

<p>The Simple Sendmail library provides a simple way to send emails using Node.js. It allows you to set up email configurations, create email messages, and send them using SMTP.</p>

Installation
You can install Simple Sendmail using npm:

```
npm install simple-sendmail

```




### confirm Email Example



```
import simpleSend, {Message, Config} from "simple-sendmail";
import Template, {ConfirmEmail} from 'simple-sendmail/dist/templates/template';
```

### Usage
Creating an Email Template
Here you can choose the language for the email text. If not specified, it will be sent in English. Options: 'en' and 'pt'.
```
const template:Template = new Template();
```

Configuring Email Options
Each template (HTML) has its own options. For the 'confirmEmail' template, there are only two options, with the title being optional.

```
const confirmEmailOptions: ConfirmEmail = {
    confirmationCode: 999999 // mandatory
};

```


Configuring Email Settings
This tool uses nodemailer for sending emails, so you need to configure it accordingly.

```
// Node mailer configuration
const config: Config = {
    host: "your_host.com",
    port: 999,
    auth: {
        user: 'your_email@example.com',
        pass: 'your_password'
    }
};

```

Creating the Email Message

```
const message: Message = {
    from: 'your_email@example.com', // mandatory
    to: 'to@example.com', // mandatory
    subject: "<only a test>", // optional
    html: template.confirmEmail(confirmEmailOptions) // choose the template and its options here
};
```

### Sending the Email
<p>Create an instance of the simpleSend class using the configured email settings. Then, use the send method to send the email message</p>

```
const sender = new simpleSend(config);
sender.send(message);
```

### Result

![image](https://github.com/YrllanBrandao/simpleSendMail/assets/77467410/2470dc10-a8e5-4f40-b7a0-5d2ab3e6ae0c)
