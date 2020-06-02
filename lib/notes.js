
const add = action => {
    const note = {
        id: Date.now(),
        text: action.payload
    }
    console.log(note);
    return note;
}


const exicute = action => {
    if (action === 'add') {
        return add(action);
    } else {
        return 'not suported'
    }
}

module.exports =  {add, exicute}