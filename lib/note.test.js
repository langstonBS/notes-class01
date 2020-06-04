const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note');


const mongodb = new MongoMemoryServer();


describe('notes Test', () => {
    beforeAll(() => {
        return mongodb.getUri()
          .then(uri => mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
          }));
      });
    

    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close()
        .then(() => mongodb.stop());
    });

    it('can execute the notes test', () => {
        return Note.execute({
            type: 'add',
            payload: 'text'
        })
            .then(note => {
                expect(note.toJSON()).toEqual({
                    _id: expect.anything(),
                    text: 'text',
                    __v: 0
                })
            })
    })
    it('It can list the note', async() => {
        await Note.execute({
            type: 'add',
            payload: 'text'
        })
        await Note.execute({
            type: 'add',
            payload: 'text2'
        })

        return Note.execute({
            type: 'list',
            payload: true
        })
            .then(notes => {
                expect(notes.map(note => note.toJSON())).toEqual([
                    {
                    _id: expect.anything(),
                    text: 'text',
                    __v: 0
                    },
                    {
                        _id: expect.anything(),
                        text: 'text2',
                        __v: 0
                    }
                ])
            })
    })
    it('It can delete the note', async() => {
        
        const addNote = ({
            type: 'add',
            payload: 'text'
        })
        const note = await Note.execute(addNote)

        const deleteNote = {
            type: 'delete',
            payload: note._id
        }


        return Note.execute(deleteNote)
            .then(note => {
                expect(note.toJSON()).toEqual({
                    _id: deleteNote.payload,
                    text: 'text',
                    __v: 0
                })
            })
    })

})