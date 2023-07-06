import React from "react";
import { PageKeys } from "src/core/application/common/domain/enums/MenuKeys";
import MainLayout from "src/infrastructure/common/layout/MainLayout";

export default function Shop (context) {
    return (
        <MainLayout context={context}>
            <div>Shop</div>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            defaultSelectedKeys: PageKeys.Shop
        }
    }
}


