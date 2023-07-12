import {RequestResponse} from "../dto/common/responses/RequestResponse";
import { Variables, RequestDocument } from "graphql-request";
import Cookie from "../common/models/Cookie";

export interface IRequestGraphQLService {

    /**
     * Make POST request to the endpoint
     * @param query
     * @param variable
     * @param context
     */
    makePostRequestAsync(query: RequestDocument, context: Cookie, variable?: Variables): Promise<RequestResponse>

}
