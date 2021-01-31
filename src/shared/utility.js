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

    return isValid;
}