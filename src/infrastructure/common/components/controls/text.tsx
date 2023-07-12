import { Typography, createTheme } from "@mui/material";

export const NormalText = ({className,children, ...props }: any) => {
    return (
        <Typography 
        className={className}
        {...props}
        >
            {children}
        </Typography>
    )
}
