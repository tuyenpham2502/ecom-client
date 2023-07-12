import LoggerService from "./LoggerService";
import { Variables, RequestDocument,GraphQLClient } from "graphql-request";
import Cookie from 'src/core/application/common/models/Cookie';
import { IRequestGraphQLService } from "src/core/application/services/IRequestGraphQLService";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import NetworkException from "src/core/application/common/exceptions/NetworkException";
import { LoadingState } from "src/core/application/common/atoms/global/LoadingState";
import { setRecoilStateAsync } from "../common/libs/recoil-outside/Service";
import CookieService from "./CookieService";
import { ProfileState } from "src/core/application/common/atoms/Identity/Profile";
import jwtDecode, { JwtPayload } from "jwt-decode";
export default class RequestGraphQLService implements IRequestGraphQLService {
    private readonly loggerService = new LoggerService();
    private readonly baseURL = process.env.NEXT_PUBLIC_API_URL;
    private readonly cookieService = new CookieService();

    private getOptions (context: Cookie) {
        let token = context?.token || "";
        const opts = {
            headers: {
                "Authorization":`Bearer ${token}`
            }
        };
        return opts;
    };

    /**
     * @param response
     */
    private processRequest(response: any): RequestResponse {
        try {
            if (response.status == 200) {
                if (response.errors && response.errors.length) {
                    return new FailureResponse(response.errors);

                }

                return new SuccessResponse(response.message, response.data);
            }
            if (response.status == 202) {
                return new FailureResponse(response.errors);

            }
            if (response.status == 400) {
                return new InvalidModelStateResponse(response.errors);
            }

            throw new NetworkException('No http status code handler');
        } catch (e) {
            new LoggerService().error(e);
            throw e;
        }


    }



    async makePostRequestAsync(query: any, context: Cookie, variables?: Variables, isSetRecoil: boolean = true): Promise<RequestResponse> {
        //const setIsLoading = useSetRecoilState(LoadingState);
        try {
            const _url = `${this.baseURL}`;
            if (isSetRecoil) {
                await setRecoilStateAsync(LoadingState, { isLoading: true, uri: _url });
            }

            return this.processRequest(await new GraphQLClient(this.baseURL, this.getOptions(context)).rawRequest(query, variables));
        } catch (e) {

            let expried = context?.token ? jwtDecode<JwtPayload>(context.token).exp : null;
            if (e.response?.Status == 500 && (e.response?.Payload?.Key == "ValidateJwtAsync" || e.response?.Payload?.Key == "InvokeAsync")) {
                this.cookieService.setCookie(document, new Cookie(false, '', ''));
            }

            if (e.response?.Status === 500 || e.response?.Status === 401 || e.response?.Status == 403) {
                if (expried && expried <= Date.parse(new Date().toUTCString())/1000) {
                    this.cookieService.setCookie(document, new Cookie(false, '', ''));
                    await setRecoilStateAsync(ProfileState, {
                        data: {},
                    });
                    setTimeout(() => {
                        window.location.href = window.location.origin;
                    }, 333);
                } 
            }
            
            return new FailureResponse(e.response?.errors || e.errors);

            // this.loggerService.error(e);
            // throw e;
        }
        finally {
            if (isSetRecoil) {
                await setRecoilStateAsync(LoadingState, { isLoading: false, uri: '' });
            }
        }
    }

    async makePostRequest2Async(query: any, context: Cookie, variables?: Variables, isSetRecoil: boolean = true): Promise<RequestResponse> {
        //const setIsLoading = useSetRecoilState(LoadingState);
        try {
            const _url = `${this.baseURL}`;
            if (isSetRecoil) {
                await setRecoilStateAsync(LoadingState, { isLoading: true, uri: _url });
            }

            return this.processRequest(await new GraphQLClient(this.baseURL, this.getOptions(context)).rawRequest(query, variables));
        } catch (e) {

            // let expried = context.token ? jwtDecode<JwtPayload>(context.token).exp : null;
            if (e.response?.Status == 500 && (e.response?.Payload?.Key == "ValidateJwtAsync" || e.response?.Payload?.Key == "InvokeAsync")) {
                this.cookieService.setCookie(document, new Cookie(false, '', ''));
            }

            // if (e.response?.Status === 401 || e.response?.Status == 403) {
            //     if (expried && expried <= Date.parse(new Date().toUTCString())/1000) {
            //         this.cookieService.setCookie(document, new Cookie(false, '', ''));
            //         await setRecoilStateAsync(ProfileState, {
            //             data: {},
            //         });
            //         setTimeout(() => {
            //             window.location.href = window.location.origin;
            //         }, 333);
            //     } 
            // }
            
            return new FailureResponse(e.response?.errors || e.errors);

            // this.loggerService.error(e);
            // throw e;
        }
        finally {
            if (isSetRecoil) {
                await setRecoilStateAsync(LoadingState, { isLoading: false, uri: '' });
            }
        }
    }
}
