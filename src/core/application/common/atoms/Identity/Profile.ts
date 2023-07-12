import {atom} from "recoil";

export const ProfileState = atom({
    key: 'PROFILE', // unique ID (with respect to other atoms/selectors)
    default: {
        data: {},
    }, // default value (aka initial value)
});