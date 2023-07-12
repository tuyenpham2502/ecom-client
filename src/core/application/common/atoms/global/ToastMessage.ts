import { ToastTypes } from 'src/core/domain/enums/ToastTypes';
import { atom } from "recoil";

export const ToastMessageState = atom({
    key: 'TOAST_MESSAGE', // unique ID (with respect to other atoms/selectors)
    default: {
        isError: false,
        type: ToastTypes.Success,
        message: ''
    }, // default value (aka initial value)
});
