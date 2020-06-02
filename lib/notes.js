
const add = action => {
    const note = {
        id: 1,
        text: action.payload
    }
    return note;
}


const exicute = action => {
    if (action === 'add') {
        return add(action);
    } else {
        return 'not suported'
    }
}