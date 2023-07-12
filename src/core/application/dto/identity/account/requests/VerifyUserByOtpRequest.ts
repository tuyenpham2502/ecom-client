export class VerifyUserByOtpRequest{
    email:string="";
    otp:string="";
    captchaToken:string="";

    constructor(email:string, otp:string, captchaToken:string) {
        this.email=email;
        this.otp=otp;
        this.captchaToken=captchaToken;
    }
}
