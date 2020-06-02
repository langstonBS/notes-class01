const {  parse, valid } = require('./input');


describe('parse funtion', () => {
    it('cant parse comand line arugments', () => {
        const argument = ['node', 'index.js', '--add', 'I am a note'];
        const action = parse(argument);
        
        expect(action).toEqual({ type: 'add', payload:'I am a note'})
    })
})

describe('parse funtion', () => {
    it('cant parse comand line arugments', () => {
        const argument ={ type: 'add', payload:'I am a note'};
        const action = valid(argument);
        
        expect(action).toBeTruthy()
    })
})

