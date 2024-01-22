import { useEffect, useState } from "react";
import { useTodo,TodoProvider,Todocontext } from "./contexts";
import TodoForm from "./components/Todoform";
import Todoitems from "./components/Todoitems";


function App() {
  const [todos, setTodos] = useState([]);
  // Get the current todos and add a new one.
 
  // const todoiteams = useTodo(); 

  const addTodo = (todo) => setTodos((prev) => {
  return [...prev, {...todo,id:Date.now()}];
  })
  
  const updateTodo = (id, todo) => setTodos((prevtodos) => prevtodos.map((todoss) => todoss.id === id ? todo : todoss));

  const deleteTodo = (id) => {
    setTodos((prevtodos) => prevtodos.filter((e) => e.id !== id))
  }
  // const toggleComplete = (id) => {
  //   //console.log(id);
  //   setTodos((prev) => 
  //   prev.map((prevTodo) => 
  //     prevTodo.id === id ? { ...prevTodo, 
  //       completed: !prevTodo.completed } : prevTodo))
  // }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => {
      if (prevtodo.id === id) {
        return { ...prevtodo, completed: !prevtodo.completed };
      } else {
        return prevtodo;
       }
    }))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  },[todos])
  return (   <TodoProvider  value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen w-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
         <TodoForm/></div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo?.id || Date.now()}
            className="w-full ">
              <Todoitems  todo={todo}/>
         </div>
       ))}
        
        </div>
      </div>
    </div>
  </TodoProvider>
  );
}

export default App;





