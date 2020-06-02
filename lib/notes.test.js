const { add, exicute } = require('./notes');


describe('add funtion', () => {
    it('cant parse comand line arugments', () => {
        const action = add({ type: 'add', payload:'I am a note'});
        
        expect(action).toEqual({id: expect.any(Number), text: 'I am a note'})
    })
})

describe('add funtion', () => {
    it('cant parse comand line arugments', () => {
        const action = exicute({ type: '', payload: 'I am a note' });
        const valeue = 'not suported'
        
        expect(action).toEqual('not suported')
    })
})

