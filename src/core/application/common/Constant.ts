import { createTheme } from "@mui/material";
import { Poppins } from 'next/font/google';

const PoppinsFont = Poppins({
        subsets: ['latin'],
        weight: ['500', '100', '300', '400', '600', '700', '800', '900'],
    });


export class Constant {

    

    static PoppinsTheme = createTheme({
        typography: {
            fontFamily: PoppinsFont.style.fontFamily,
            fontSize: 16,
        },
    });


}