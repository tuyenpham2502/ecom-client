export class ChangePasswordForForgotRequest{
    resetToken:string="";
    newPassword:string="";
    confirmNewPassword:string="";
    captchaToken:string="";
    tenantId:string="";

    constructor(resetToken:string, newPassword:string, confirmNewPassword:string, captchaToken:string, tenantId:string) {
        this.resetToken=resetToken;
        this.newPassword=newPassword;
        this.confirmNewPassword=confirmNewPassword;
        this.captchaToken=captchaToken;
        this.tenantId=tenantId;
    }
}
