import { CancelTokenSource } from "axios";
import { NextRouter } from "next/router";
import { ProfileState } from "src/core/application/common/atoms/Identity/Profile";
import Cookie from "src/core/application/common/models/Cookie";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import { SignInWithOAuthRequest } from "src/core/application/dto/identity/account/requests/SignInWithOAuthRequest";
import { SignInWithPasswordRequest } from "src/core/application/dto/identity/account/requests/SignInWithPasswordRequest";
import { OAuthProviders } from "src/core/domain/enums/OAuthProviders";
import { getMyProfileQuery } from "src/graphql/account/GetInformationCurrentUserQuery";
import { signInQuery, signInWithOAuthQuery } from "src/graphql/account/SignInQuery";
import { notifyError, notifyWarning } from "src/infrastructure/common/components/toast/ToastMessage";
import { setRecoilStateAsync } from "src/infrastructure/common/libs/recoil-outside/Service";
import { filterError } from "src/infrastructure/helper";
import { validateEmail, validateInputPassword } from "src/infrastructure/helper/validate";
import LoggerService from "src/infrastructure/services/LoggerService";
import { AccountManagementService } from "../services/AccountManagementService";

export const loginWithEmailEffect = async (
    translator: any,
    email: string,
    password: string,
    captchaToken: string,
    router: NextRouter,
    loggerService: LoggerService,
    source: CancelTokenSource,
    cookie: Cookie,
) => {
    if (
        email &&
        password &&
        email.length > 0 &&
        password.length > 0 &&
        validateEmail(email) && validateInputPassword(password)
    ) {

        let response =
        await new AccountManagementService().signInWithEmailAsync(
            signInQuery,
            cookie,
            new SignInWithPasswordRequest(email, password, captchaToken),
        );
        // Logged in ok, redirect to the home page
        if (response.status == 200) {
            let res = response as SuccessResponse;
            if (res.data.signinWithPassword?.success) {
                router.push('/');
            }
        }
        if (response.constructor.name == FailureResponse.name) {
            let errors = (response as FailureResponse).errors;
            if (errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        if (response.constructor.name == InvalidModelStateResponse.name) {
            loggerService.info((response as InvalidModelStateResponse).errors);
        }
    }
};