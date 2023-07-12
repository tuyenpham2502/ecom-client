import { NextRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { PageKeys } from "src/core/domain/enums/PageKeys";
import { setRecoilStateAsync } from "../common/libs/recoil-outside/Service";


let timer = null;

export const middlewareCheckAuth = async (checkLogin: boolean, router: NextRouter, checkAuth: string, callbackFunction: Function) => {
    if (checkLogin && checkAuth && checkAuth[0] == PageKeys.GroupAuth) {
        router.push('/');
    }
    
    if (!checkLogin && checkAuth && (checkAuth[0] == PageKeys.GroupCart || checkAuth[0] == PageKeys.GroupQuotation || checkAuth[0] == PageKeys.CreateQuotation)) {
        router.push('/account/sign-in.html');
    }

    
    clearTimeout(timer);

    timer = setTimeout(() => {
        callbackFunction();
    }, 333);
};