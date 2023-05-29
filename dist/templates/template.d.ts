export interface ConfirmEmail {
    title?: string;
    confirmationCode: number;
}
export interface RecoveryPassword {
    title?: string;
    url: string;
    username?: string;
}
declare class Template {
    language: string;
    constructor(language?: string);
    confirmEmail(data: ConfirmEmail): string;
    recoveryPassword(data: Partial<RecoveryPassword>): string;
}
export default Template;
