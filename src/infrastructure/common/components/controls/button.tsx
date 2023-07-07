import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import { Poppins } from 'next/font/google'
import { Constant } from "src/core/application/common/Constant";


export const NormalButton = ({className,children, ...props }: any) => {
    return (
        <ThemeProvider theme={Constant.PoppinsTheme}>
        <Button 
        className={className}
        {...props}
        >
            {children}
        </Button>
        </ThemeProvider>

    )
}
