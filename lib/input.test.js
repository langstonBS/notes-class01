const Input = require('./input');


describe('parse and turn a valad class', () => {
    it('cant parse comand line arugments', () => {
        const argument = ['node', 'index.js', '--add', 'I am a note'];
        const action = new Input(argument);
        
        expect(action).toEqual({ type: 'add', payload:'I am a note'})
    })


})


