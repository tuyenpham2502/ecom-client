import MessageErrors from "src/core/application/common/MessageErrors";

export const filterError = (errors: any) => {
    if (errors && errors.length) {
        const messageError = MessageErrors.Data.filter(it => it.code == errors[0]?.extensions?.code);
        return messageError[0]?.message || "An error has occurred. Please contact admin for more details!";
    }
    return "An error has occurred. Please contact admin for more details!";
};