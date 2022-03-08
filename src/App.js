
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/Box';

function App() {
  return (
    <div className="App">
      <PersonCard last_name="Doe" first_name="Jane" age={45} hairColor="Black"/>
      <PersonCard last_name="Smith" first_name="John" age={88} hairColor="Brown"/>
      <PersonCard last_name="Fillmore" first_name="Jane" age={50} hairColor="Brown"/>
      <PersonCard last_name="Smith" first_name="Maria" age={62} hairColor="Brown"/>
    </div>

  );
}

export default App;
