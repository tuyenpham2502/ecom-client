import { LoadingState } from 'src/core/application/common/atoms/global/LoadingState';
import { IRequestService } from "src/core/application/services/IRequestService";
import axios, { AxiosRequestConfig, AxiosResponse, CancelToken } from "axios";
import LoggerService from "./LoggerService";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import NetworkException from "src/core/application/common/exceptions/NetworkException";
import { setRecoilStateAsync, getRecoilStateAsync } from "src/infrastructure/common/libs/recoil-outside/Service";
import Cookie from 'src/core/application/common/models/Cookie';

export default class RequestService implements IRequestService {
    private readonly loggerService = new LoggerService();
    private readonly baseURL = process.env.NEXT_PUBLIC_DOMAIN;

    private  getOptions(context: Cookie ) {
        let token = context?.token || "";
        const opts = {
            headers: {
                "Authorization":`Bearer ${token}`
            },
            // cancelToken: cancellationToken
        };
        return opts;

    }


    /**
     * Convert AxiosResponse to app request
     * @param response
     */
    private processRequest(response: AxiosResponse): RequestResponse {
        try {
            if (response.status == 200) {
                return new SuccessResponse(response.statusText, response.data);
            }
            if (response.status == 202) {
                return new FailureResponse(response.data.errors);

            }
            if (response.status == 400) {
                return new InvalidModelStateResponse(response.data.errors);
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            new LoggerService().error(e);
            throw e;
        }
    }

    getCancellationToken() {
    }

    async makeGetRequestAsync(url: string, params: any, context: Cookie): Promise<RequestResponse> {
        try {
            const _params = params ? Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join("&") : "";
            const _url = `${this.baseURL}/${url}${(_params === "" ? "" : "?" + _params)}`;
            const _options = this.getOptions(context);
            return this.processRequest(await axios.get(_url, this.getOptions(context)));
        } catch (e) {
            // this.loggerService.error(e);
            return new FailureResponse(e.response?.errors || e.errors);
        }
        finally {
            await setRecoilStateAsync(LoadingState, { isLoading: false, uri: '' })
        }
    }

    async makePostRequestAsync(endpoint: string, params: object, context: Cookie): Promise<RequestResponse> {
        //const setIsLoading = useSetRecoilState(LoadingState);
        try {
            const _url = `${this.baseURL}/${endpoint}`;
            await setRecoilStateAsync(LoadingState, { isLoading: true, uri: _url })
            const _params = JSON.stringify(params);
            return this.processRequest(await axios.post(_url, _params, this.getOptions(context)));
        } catch (e) {
            // this.loggerService.error(e);
            // throw e;
            return new FailureResponse(e.response?.errors || e.errors);
        }
        finally {
            await setRecoilStateAsync(LoadingState, { isLoading: false, uri: '' })
        }
    }

    async makeUploadRequestAsync(endpoint: string, file: File, context: Cookie): Promise<RequestResponse> {
        //const setIsLoading = useSetRecoilState(LoadingState);
        try {
            const _url = `${this.baseURL}/${endpoint}`;
            await setRecoilStateAsync(LoadingState, { isLoading: true, uri: _url })
            const _form = new FormData();
            _form.append("file", file);

            const _options = this.getOptions(context);
            _options.headers["Content-Type"] = "multipart/form-data";
            return this.processRequest(await axios.post(_url, _form, this.getOptions(context)));

        } catch (e) {
            // this.loggerService.error(e);
            // throw e;
            return new FailureResponse(e.response?.errors || e.errors);
        }
        finally {
            await setRecoilStateAsync(LoadingState, { isLoading: false, uri: '' })
        }
    }

    makePutRequestAsync() {
    }

    makeDeleteRequestAsync() {
        axios.CancelToken.source().token
    }
}
