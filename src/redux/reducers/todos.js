let nextID = 0;

const reducer = (state = [], action)=>{
    if(action.type === 'ADD_TODO'){
        return [...state, { id: nextID++,text: action.payload.text}]
    }
    return state
    
}

export default reducer