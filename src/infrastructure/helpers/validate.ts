export function validateEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // return url != null && reg.test(url);
    return email && reg.test(email);
}

export function validateInputPassword(val, oldVal = "") {
    if (oldVal && val == oldVal) {
        return false
    }
    // let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W_]).{8,}$/
    // let reg =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return val && reg.test(val);
}