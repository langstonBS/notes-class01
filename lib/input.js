const minimist = require("minimist");

const parse = arr => {
    const obj = minimist(arr);
    delete obj._;

    const [[type, payload]] = Object.entries(obj);
    return notes = {
        type,
        payload
    };
}


class Input {

    constructor(arr, type, payload) {
        const thing = parse(arr);
        this.type = thing.type;
        this.payload = thing.payload;
    };
    valid() {
        return action.type === 'add' && action.payload  
    }
}

module.exports = Input;
