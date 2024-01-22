import { createContext ,useContext} from "react";
import React from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo:"todo hai ye thik",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    updateTodo:(id,todo)=>{}

})
export const TodoProvider = Todocontext.Provider;
export const useTodo = () => useContext(Todocontext)



