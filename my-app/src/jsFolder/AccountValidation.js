export const nameRgx = (name) => {
    const nameCheck = /^[a-z ,.'-]+$/i;
    return nameCheck.test(name)
}

export const passwordCheck = (pass) => {
    const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passCheck.test(pass);
}
///([A-Z][a-z]+)$/gm