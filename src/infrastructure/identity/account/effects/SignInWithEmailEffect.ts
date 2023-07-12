import { CancelTokenSource } from "axios";
import { NextRouter } from "next/router";
import { ProfileState } from "src/core/application/common/atoms/Identity/Profile";
import Cookie from "src/core/application/common/models/Cookie";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import { signInWithEmail } from "src/graphql/account/loginWithEmail";
import { SignInWithPasswordRequest } from "src/core/application/dto/identity/account/requests/SignInWithPasswordRequest";
import { filterError } from "src/infrastructure/helpers";
import showToast from "src/infrastructure/common/components/toast/Toast";
import { validateEmail, validateInputPassword } from "src/infrastructure/helpers/validate";
import LoggerService from "src/infrastructure/services/LoggerService";
import { AccountManagementService } from "../services/AccountManagementService";

export const loginWithEmailEffect = async (
    email: string,
    password: string,
    router: NextRouter,
    loggerService: LoggerService,
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
            signInWithEmail,
            cookie,
            new SignInWithPasswordRequest(email, password),
        );
        // Logged in ok, redirect to the home page
        if (response.status == 200) {
            let res = response as SuccessResponse;
            if (res.data.loginWithEmail?.status === "success") {
                showToast("success", "Logged in successfully");
                router.push('/');
            }
        }
        if (response.constructor.name == FailureResponse.name) {
            let errors = (response as FailureResponse).errors;
            if (errors != null && errors.length > 0)
                showToast("error",filterError(errors[0].message));
        }
        if (response.constructor.name == InvalidModelStateResponse.name) {
            loggerService.info((response as InvalidModelStateResponse).errors);
        }
    }
};