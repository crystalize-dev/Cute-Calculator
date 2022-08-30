export const isSpecial = (sign) => {
    return ((sign === "+") || (sign === "/") || (sign === "*") || (sign === "-"));
}

export const calculate = (string) => {
    // eslint-disable-next-line no-eval
    return String(eval(string))
}