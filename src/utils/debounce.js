const debounce = (func, delay) => {
    let debounce;
    return (...params) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => func(...params), delay);
    };
};

export default debounce;
