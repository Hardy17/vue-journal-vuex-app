
/* Las mutations no son asincronas*/
 

// export const myAction = (state)=>{

// }

export const setEntries =(state, entries)=>{

    state.entries= [...state.entries, ...entries]
    state.isLoading=false
}

export const updateEntry =(state,entry)=>{// entry actualizada
    //state.entries => un arreglo debemos buscar con findex el elemento que vamos actualizar
     const idx = state.entries.map(e=>e.id).indexOf(entry.id)
     state.entries[idx]=entry
     // state.entries = ...entry

}

export const addEntry =(state,entry)=>{
//state -> entries la nueva entrada sera la primera del arreglo del estado
 //state.entries.unshift(entry)
 state.entries=[entry,...state.entries]
}

export const deleteEntry =(state, id)=>{
    // const index = state.entries.findIndex(element => element.id == id);
    // state.entries.splice(index, 1);
    state.entries= state.entries.filter(entry=>entry.id!==id)
}