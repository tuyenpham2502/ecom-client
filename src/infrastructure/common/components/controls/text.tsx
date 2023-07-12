import { Typography, createTheme } from "@mui/material";

export const NormalText = ({className,children, ...props }: any) => {
    return (
        <Typography 
        sx={{
            fontSize: "16px"
        }}
        className={className}
        {...props}
        >
            {children}
        </Typography>
    )
}

export const BoldText = ({className,children, ...props }: any) => {
    return (
        <Typography
        sx={{
            fontWeight: "600"
        }}
        className={className}
        {...props}
        >
            {children}
        </Typography>
    )
}
