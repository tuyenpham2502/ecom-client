import Container from "@mui/material/Container";
import React from "react";

const Content = ({context, ...props}:any) => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default Content;