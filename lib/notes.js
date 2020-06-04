

class Notes {


    static add(action) {
        let note = {
            id: Date.now(),
            text: action.payload
        }
        return note
    }

    static exicute(action) {
        switch (action.type) {
            case 'add': {
                return Notes.add(action);
            }
            case 'list': {
                return this.find(action);
            }
            default: {
                return { error: 'Nothing' }
            }
                
        }
    }
}


module.exports =  Notes