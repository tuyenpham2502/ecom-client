import { ThemeProvider } from "@emotion/react";
import { Typography, createTheme } from "@mui/material";
import { Constant } from "src/core/application/common/Constant";




export const NormalText = ({className,children, ...props }: any) => {
    return (
        <ThemeProvider theme={Constant.PoppinsTheme}>
        <Typography 
        className={className}
        {...props}
        >
            {children}
        </Typography>
        </ThemeProvider>

    )
}
