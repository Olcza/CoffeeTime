export const checkValidity = (value, rules) => {
    let isValid = true;

    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.numbersAndDashesOnly) {
        isValid = value.match(/^[\d -]+$/gm) && isValid;
    }

    if(rules.isEmail) {
        isValid = value.match(/\S+@\S+\.\S+/gm) && isValid;
    }

    return isValid;
}

export const generateErrorInfo = errorCode => {
    switch(errorCode){
        case 'INVALID_EMAIL':
            return 'Invalid email'
        case 'INVALID_PASSWORD':
            return 'Invalid password'
        case 'WEAK_PASSWORD : Password should be at least 6 characters':
            return 'Password is to weak. Password should be at least 6 characters'
        case 'EMAIL_EXISTS':
            return 'Email already exists.'
        case 'EMAIL_NOT_FOUND':
            return 'Email not found.'
        default: 
            return errorCode
    }
}