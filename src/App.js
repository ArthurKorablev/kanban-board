import './App.css';
import InputComponent from './containers/InputComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <InputComponent/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
