import Todos from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todos items={[
        'Learn React',
        'Learn TypeScript'
      ]}/>
    </div>
  );
}

export default App;
