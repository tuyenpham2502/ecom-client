import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import { Poppins } from 'next/font/google'


export const NormalButton = ({className,children, ...props }: any) => {
    return (
        <Button 
        className={className}
        {...props}
        >
            {children}
        </Button>

    )
}
