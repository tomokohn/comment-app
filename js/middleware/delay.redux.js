/**
 * Schedules actions with {delay: N} to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
const delay = store => next => action => {
    if (!action.delay) {
        return next(action);
    }

    let timeout = setTimeout(
        () => next(action),
        action.delay
    );

    return function cancel() {
        clearTimeout(timeout);
    };
};

export default delay;