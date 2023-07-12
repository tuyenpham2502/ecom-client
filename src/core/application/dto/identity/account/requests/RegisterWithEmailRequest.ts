export class RegisterWithEmailRequest{
    name:string="";
    email:string="";
    password:string="";
    confirmPassword:string="";
    roles:Array<string>=[];
    captchaToken:string="";

    constructor(email:string, password:string, name:string, confirmPassword:string, roles:Array<string>, captchaToken:string) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.roles=roles;
        this.captchaToken=captchaToken;
    }
}
