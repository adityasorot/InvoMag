let timerId;

const throttle = (func, delay) => {
    if (timerId) {
        return;
    }

    timerId = setTimeout(() => {
        func();
        timerId = undefined;
    }, delay);
};

export default throttle;
