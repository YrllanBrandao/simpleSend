import nodemailer, { TransportOptions, Transporter } from 'nodemailer';

interface Auth{
    user: string;
    password: string;
}
interface Config{
    host: string;
    port: string;
    auth: Auth;
}
interface Options{
    from: string;
    to: string;
    subject?:string
    template: string
}
class Mailer{
    constructor(public config:Config){
        this.config = config;
    };
    private  createTransport = () =>
    {
      return  nodemailer.createTransport(this.config as TransportOptions);
    }
   
    public send = async (options:Options) =>
    {   
       const transporter: Transporter = this.createTransport();
       transporter.sendMail(options, (error:unknown, info:unknown)=> {
        if(error) return console.log("An error has Ocurred:", error);
        console.log("Success", info);
       })
    }
}


export default Mailer;