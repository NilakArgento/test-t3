const checkMinimStep = (a, b, c) => {
    // If target is 0 and we start with 0, it's possible
    if (c === 0 && (a === 0 || b === 0)) return "YES";
    
    let minimStep = a;
    let rest = b;
    
    while (rest !== 0) {
        let t = rest;
        rest = minimStep % rest;
        minimStep = t;
    }

    if (minimStep !== 0 && c % minimStep === 0 && (c >= a || c >= b)) {
        return "YES";
    } else {
        return "NO";
    }
};

module.exports = { checkMinimStep };
