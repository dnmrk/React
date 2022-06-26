import NewTodo from './components/NewTodo';
import Todos from './components/Todo';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Lear TypeScrript')
  ];

  const addTodoHandler = (todoText: string) => {
    
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
