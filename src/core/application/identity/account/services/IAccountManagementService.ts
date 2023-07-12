import { Variables, RequestDocument } from "graphql-request";
import { ForgotPasswordRequest } from "src/core/application/dto/identity/account/requests/ForgotPasswordRequest";
import { ChangePasswordForForgotRequest } from "src/core/application/dto/identity/account/requests/ChangePasswordForForgotRequest";
import Cookie from "src/core/application/common/models/Cookie";
import { SignInWithPasswordRequest } from "src/core/application/dto/identity/account/requests/SignInWithPasswordRequest";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import { SignInWithOAuthRequest } from "src/core/application/dto/identity/account/requests/SignInWithOAuthRequest";
import { GetUserByRoleRequest } from "src/core/application/dto/identity/account/requests/GetUserByRoleRequest";

export interface IAccountManagementService {
    /**
     * Sign in with email
     * @param request
     */
    signInWithEmailAsync(query: RequestDocument, cookie: Cookie, variable: SignInWithPasswordRequest): Promise<RequestResponse>

    /**
     * Sign in with phone number
     * @param query
     * @param variables
     */
     logoutAsync(query: RequestDocument, cookie: Cookie, variable: Variables): Promise<RequestResponse>

    /**
     * Sign with OAuth
     * @param provider
     * @param request
     */
    signInWithOAuthAsync(query: RequestDocument, cookie: Cookie, request: SignInWithOAuthRequest): Promise<RequestResponse>

   /**
     *
     * @param request
     */
    forgotPasswordAsync(query: RequestDocument, cookie: Cookie, variable: ForgotPasswordRequest): Promise<RequestResponse>
    
    
   /**
     *
     * @param request
     */
    changePasswordForForgot(query: RequestDocument, cookie: Cookie, variable: ChangePasswordForForgotRequest): Promise<RequestResponse>

    /**
     *
     * @param request
     */
    getUserByRoleAsync(query: RequestDocument, cookie: Cookie, variable: GetUserByRoleRequest): Promise<RequestResponse>
}
