import { useState, useEffect } from "react";

// TodoApp Function

function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
/* 
El hook useEffect me permite con el Arreglo vacio [] al final que necesito el efecto se ejecute,
una sola vez, cuando este componente se ejecute la primera vez. El metodo getItem me permite del localStorage
me permite recuperar el valor almacenado en la clave "todo", permitiendome recuperar todas las tareas que tenga almacenadas
en el localStorage. La condicional verifica si en storeTask tengo tareas almacenedas, si tiene utiliza el JSON.parse() para
convertir la cadena JSON en un objeto JS y luego actualiza el estado "todo" con setTodo, con esto logro que las tareas almacenas 
en TodoApp se muentren en la interfaz de usuario.

el otro useEffect de la misma forma a traves setItem toma primero la base de datos creada TodoApp y luego el valor que paso por el metodo JSON.stringify 
para que me muestre las tareas almacenas como cadenas de texto en la UI. siguiento este ejemplo localStorage.setItem(key, value);
*/
  useEffect(() => {
    // Recuperar las tareas almacenadas en el localStorage al cargar la página
    const storedTasks = localStorage.getItem("todo");
    if (storedTasks) {
      setTodo(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    //Almacenar las tareas en el localStorage cada vez que se actualicen
    localStorage.setItem("TodoApp", JSON.stringify(todo));
  }, [todo]);

  // button add
  const addTodo = () => {
    if (newTodo.trim() != "") {
      setTodo([...todo, newTodo]);
      setNewTodo("");
    }
  };

  //Metodo Completado de tareas con spread operator utilizo el codigo unicode &#x2705; que es el simbolo de check
  const completeTodo = (index) => {
    const updatedTasks = [...todo];
    if (updatedTasks[index] && updatedTasks[index].startsWith("✅ ")) {
      updatedTasks[index] = updatedTasks[index].substring(2);
    } else {
      updatedTasks[index] = `✅ ${updatedTasks[index]}`;
    }
    setTodo(updatedTasks);
  };

  // Button de Eliminar tareas usando splice diciendo cuantos elementos quiero eliminar splice(index, 1)
  const deleteTodo = (index) => {
    const updatedTasks = [...todo];
    updatedTasks.splice(index, 1);
    setTodo(updatedTasks);
  };
/*  Dise;o del Formulario tomando props para hacer el componente reutilizable si otro usuario desea recrear el mismo form pero con diferentes variantes y estilos */
  return (
    <div className="container">
      <div className="div">
        <h1> &#x3C; TodoApp /&#x3E;</h1>
      </div>

      <form className="form-control" onSubmit={handleSubmit}>
        <input
          className="input-group-text"
          type="text"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </form>
      <ul className="list-group">
        {todo.map((task, index) => (
          <li className="list-group-item" key={index}>
            {task}
            <div className="button">
              <button
                className="btn btn-success btn-sm mx-2"
                onClick={() => completeTodo(index)}
              >
                {task.startsWith("✅ ") ? "Descompletar" : "Completar"}
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
