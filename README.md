# pC4N2-eV
ToDoApp React-Js Funval 2023 Nivel 2

Este código es una aplicación de lista de tareas creada con React. Utiliza los hooks useState y useEffect para manejar el estado de las tareas y sincronizarlo con el almacenamiento local (localStorage) del navegador. La aplicación permite a los usuarios agregar nuevas tareas, marcarlas como completadas y eliminarlas.

El primer useEffect se ejecuta una sola vez al cargar la página y recupera las tareas almacenadas en el localStorage para mostrarlas en la interfaz de usuario. El segundo useEffect se ejecuta cada vez que el estado de las tareas cambia y almacena las tareas actualizadas en el localStorage.

La función addTodo agrega una nueva tarea al estado todo siempre que el campo de entrada no esté vacío. La función completeTodo marca una tarea como completada añadiendo un símbolo de check (✅) al inicio del texto y la función deleteTodo elimina una tarea del estado.

La aplicación muestra una interfaz con un formulario para agregar tareas y una lista de tareas mostrando su contenido. Cada tarea en la lista tiene dos botones, uno para completarla/descompletarla y otro para eliminarla. El diseño está diseñado con clases de Bootstrap.

En resumen, este código crea una sencilla aplicación de lista de tareas utilizando React y los hooks useState y useEffect, permitiendo a los usuarios agregar, marcar como completadas y eliminar tareas, con almacenamiento local para persistencia de datos.
