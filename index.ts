import nodemailer, {  Transporter } from 'nodemailer';

export interface Config {
    host: string;
    port: number;
    auth: {
        user: string;
        pass: string;
    }
}
export interface Message {
    from: string;
    to: string;
    subject?: string
    html: string
}
class simpleSend {
    constructor(public config: Config) {
        this.config = config;
    };
    private createTransport = () => {

        const newConfig:Config = {
            host: this.config.host,
            port: this.config.port,
            auth: this.config.auth
        }
        return nodemailer.createTransport(newConfig);
    }

    public send = (message: Message) => {
    
       try{
        const transporter: Transporter = this.createTransport();
        transporter.sendMail(message, (error: unknown, info: unknown) => {
            if (error)  throw new Error(`ERROR: ${error}`);
            else{
                return  console.log("SUCCESS!!", info);
            }
        })
       }
       catch(error:any)
       {
        return console.log(error)
       }
    }
}


export default simpleSend;
