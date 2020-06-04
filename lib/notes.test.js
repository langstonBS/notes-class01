const Notes = require('./Notes');

describe('Notes class', () => {

    
    it('retruns a note', () => {

        const notes = {
            type: 'add',
            payload: 'mytext'

        }
        const results = Notes.exicute(notes);
        expect(results).toEqual({
        id: expect.any(Number),
        text: 'mytext'})
    
    });

  



  });