import { RequestDocument } from "graphql-request";
import Cookie from "src/core/application/common/models/Cookie";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import { RegisterWithEmailRequest } from "src/core/application/dto/identity/account/requests/RegisterWithEmailRequest";
import { SendOtpRequest } from "src/core/application/dto/identity/account/requests/SendOtpRequest";
import { VerifyUserByOtpRequest } from "src/core/application/dto/identity/account/requests/VerifyUserByOtpRequest";

export interface IRegisterAccountManagementService {
        /**
     * Sign in with phone number
     * @param request
     */
    registerWithEmailAsync(query: RequestDocument, cookie: Cookie, variable: RegisterWithEmailRequest): Promise<RequestResponse>

    verifyUserByOtpAsync(query: RequestDocument, cookie: Cookie, variable: VerifyUserByOtpRequest): Promise<RequestResponse>
    
    sendOtpAsync(query: RequestDocument, cookie: Cookie, variable: SendOtpRequest): Promise<RequestResponse>
}