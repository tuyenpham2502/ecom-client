import {NextPageContext} from "next";
import Cookie from "../common/models/Cookie";

export interface ICookieService {
    readCookie(context:NextPageContext):Cookie;
    setCookie(document:Document,cookie:Cookie);
}
