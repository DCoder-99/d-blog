const validateUsername = (value: string) => {
    let error;
    if (!value) {
        error = 'Username is required';
    } else if (value.length > 32) {
        error = 'Username is too long';
    } else if (value.length < 6) {
        error = 'Username is too short';
    } else if (!/^[a-z0-9]+$/.test(value)) {
        error = 'Username is invalid';
    }

    return error;
};

const validatePassword = (value: string) => {
    let error;
    if (!value) {
        error = 'Password is required';
    } else if (value.length > 32) {
        error = 'Password is too long';
    } else if (value.length < 8) {
        error = 'Password is too short';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~]).{8,32}$/.test(value)) {
        error = 'Password is invalid';
    }
    return error;
};

export { validateUsername, validatePassword };
