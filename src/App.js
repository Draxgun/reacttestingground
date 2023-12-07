import './App.css';
import { Cat } from './Components/Cat';
import { Counter } from './Components/Counter';
import { useToggle } from './Components/useToggle';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

function App() {

  const client = new QueryClient({
    defaultOptions: {
    }
  });


  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1> Hidden Text</h1>}

        <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
        {isVisible2 && <h1> Hidden Text 2</h1>}
        
        <Cat></Cat>

        <Counter></Counter>

      </div>
    </QueryClientProvider>

  );
}


export default App;
