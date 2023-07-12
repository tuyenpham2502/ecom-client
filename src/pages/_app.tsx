import "assets/css/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import MainLayout from "src/infrastructure/common/layout/MainLayout";
import RecoilOutsideComponent from "src/infrastructure/common/libs/recoil-outside/Service";
import App from "next/app";
import { appWithTranslation } from "next-i18next";
import CookieService from "src/infrastructure/services/CookieService";
import { ThemeProvider } from "@emotion/react";
import Constants from "src/core/application/common/Constants";

const QlhsCommerceApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;

  return (
    <>
    <RecoilRoot>
      <RecoilOutsideComponent />
      <ThemeProvider theme={Constants.PoppinsTheme}>
      <MainLayout {...pageProps}>
        <AnyComponent {...pageProps} />
      </MainLayout>
      </ThemeProvider>
    </RecoilRoot>
    </>
  );
};

QlhsCommerceApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  let cookieService = new CookieService();
  let cookie = cookieService.readCookie(appContext.ctx);
  return {
    pageProps : {
      user: { ...cookie },
      ...appProps.pageProps,
    },
  };
};

export default appWithTranslation(QlhsCommerceApp);
