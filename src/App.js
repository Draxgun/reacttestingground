import './App.css';
import { Person } from './Components/Person';

function App() {

  return (
    <div className="App">
      <Person
        name = "Alejandro"
        email = "alex@cool.com"
        age = {25}
        isMarried = {false}
        friends = {["kenia","oscar","ponky","andrea","pablo"]}
      />

    </div>
  );
}


export default App;
