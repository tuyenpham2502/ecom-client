import React from "react";
import { PageKeys } from "src/core/application/common/domain/enums/MenuKeys";

export default function Shop (context) {
    return (
            <div>Shop</div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            defaultSelectedKeys: PageKeys.Shop
        }
    }
}


