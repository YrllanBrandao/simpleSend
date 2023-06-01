export interface ConfirmEmail {
    confirmationCode: number;
}
export interface RecoveryPassword {
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
