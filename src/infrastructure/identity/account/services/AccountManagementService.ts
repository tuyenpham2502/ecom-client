
import { gql, RequestDocument } from 'graphql-request';
import { ForgotPasswordRequest } from "src/core/application/dto/identity/account/requests/ForgotPasswordRequest";
import { ChangePasswordForForgotRequest } from "src/core/application/dto/identity/account/requests/ChangePasswordForForgotRequest";
import { LogOutRequest } from "src/core/application/dto/identity/account/requests/LogOutRequest";
import { UpdateAccountRequest } from "src/core/application/dto/identity/account/requests/UpdateAccountRequest";
import { ChangePasswordRequest } from "src/core/application/dto/identity/account/requests/ChangePasswordRequest";
import { IAccountManagementService } from 'src/core/application/identity/account/services/IAccountManagementService';
import LoggerService from 'src/infrastructure/services/LoggerService';
import CookieService from 'src/infrastructure/services/CookieService';
import RequestGraphQLService from 'src/infrastructure/services/RequestGraphQLService';
import Cookie from 'src/core/application/common/models/Cookie';
import { SignInWithOAuthRequest } from 'src/core/application/dto/identity/account/requests/SignInWithOAuthRequest';
import { RequestResponse } from 'src/core/application/dto/common/responses/RequestResponse';
import SuccessResponse from 'src/core/application/dto/common/responses/SuccessResponse';
import FailureResponse from 'src/core/application/dto/common/responses/FailureResponse';
import InvalidModelStateResponse from 'src/core/application/dto/common/responses/InvalidModelStateResponse';
import NetworkException from 'src/core/application/common/exceptions/NetworkException';
import { SignInWithPasswordRequest } from 'src/core/application/dto/identity/account/requests/SignInWithPasswordRequest';
import { GetUserByRoleRequest } from 'src/core/application/dto/identity/account/requests/GetUserByRoleRequest';
export class AccountManagementService implements IAccountManagementService {
    private readonly loggerService = new LoggerService();
    private readonly cookieService = new CookieService();

    async signInWithOAuthAsync(query: RequestDocument, cookie: Cookie, variables: SignInWithOAuthRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
            if (result.status == 200) {
                this.cookieService.setCookie(document, new Cookie(true, (result as SuccessResponse).data.signInWithOAuth?.token || '', (result as SuccessResponse).data.signInWithOAuth?.refreshToken || ''));
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }
    }

    public async logoutAsync(query: RequestDocument, cookie: Cookie, variables: LogOutRequest): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);

            if (result.status == 200) {
                this.cookieService.setCookie(document, new Cookie(false, '', ''));
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }
    }

    public async signInWithEmailAsync(query: RequestDocument, cookie: Cookie, variable?: SignInWithPasswordRequest): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                this.cookieService.setCookie(document, new Cookie(true, (result as SuccessResponse).data.signinWithPassword?.token || '', (result as SuccessResponse).data.signinWithPassword?.refreshToken || ''));
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }


    public async forgotPasswordAsync(query: RequestDocument, cookie: Cookie, variable?: ForgotPasswordRequest): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }

    public async changePasswordForForgot(query: RequestDocument, cookie: Cookie, variable?: ChangePasswordForForgotRequest): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }

    public async getMyProfileAsync(query: RequestDocument, cookie: Cookie): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie,)
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }

    public async changePasswordAsync(query: RequestDocument, cookie: Cookie, variable?: ChangePasswordRequest): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }

    public async updateAccountAsync(query: RequestDocument, cookie: Cookie, variable?: UpdateAccountRequest): Promise<RequestResponse> {

        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }

    public async getUserByRoleAsync(query: RequestDocument, cookie: Cookie, variable: GetUserByRoleRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }
    }

    public async getUsetById(query: RequestDocument, cookie: Cookie, variable: GetUserByRoleRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;

            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }
    }
}


