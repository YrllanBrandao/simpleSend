export interface Config {
    host: string;
    port: number;
    auth: {
        user: string;
        pass: string;
    };
}
export interface Message {
    from: string;
    to: string;
    subject?: string;
    html: string;
}
declare class simpleSend {
    config: Config;
    constructor(config: Config);
    private createTransport;
    send: (message: Message) => void;
}
export default simpleSend;
