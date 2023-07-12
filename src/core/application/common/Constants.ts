import { createTheme } from "@mui/material";
import { Poppins } from 'next/font/google';

const PoppinsFont = Poppins({
        subsets: ['latin'],
        weight: ['500', '100', '300', '400', '600', '700', '800', '900'],
    });


export default class Constants {

     static Logger = class {
        static DateTimeFormat = 'yyyy-MM-DD HH:mm:ss.SSSS';
    };

    static PoppinsTheme = createTheme({
        typography: {
            fontFamily: PoppinsFont.style.fontFamily,
            fontSize: 16,
        },
    });


}