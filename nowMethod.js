// https://rubaxa.github.io/playground/#now

function now(v) {
    if (!v) {
        return Date.now();
    }
    const argNumber = parseFloat(v);
    const argRegRex = v.match(/ms|sec|s|min|m|hours|h|days|d/);
    switch (argRegRex.toString()) {
        case 'ms':
            return Date.now() + argNumber;
        case 's':
        case 'sec':
            return Date.now() + argNumber * 1000;
        case 'm':
        case 'min':
            return Date.now() + argNumber * 1000 * 60;
        case 'h':
        case 'hours':
            return Date.now() + argNumber * 1000 * 60 * 60;
        case 'd':
        case 'days':
            return Date.now() + argNumber * 1000 * 60 * 60 * 24;
    }
}