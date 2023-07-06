import React from "react";
import { PageKeys } from "src/core/application/common/domain/enums/MenuKeys";
import MainLayout from "src/infrastructure/common/layout/MainLayout";

export default function Contact (context) {
    return (
        <MainLayout context={context}>
            <div>Contact</div>
        </MainLayout>
    )
}

export async function getServerSideProps() {

    return {
        props: {
            defaultSelectedKeys: PageKeys.Contact
        }
    }
}