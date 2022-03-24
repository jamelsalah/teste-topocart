import './App.css';
import DinamicForm from './components/DinamicForm'
import data from './data.js'

function App() {
  return (
    <div className="App">
        <DinamicForm data={data}></DinamicForm>
    </div>
  );
}

export default App;
