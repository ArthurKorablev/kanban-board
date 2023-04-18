import './App.css';
import InputComponent from './containers/InputComponent';
import Layout from './containers/Layout';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <InputComponent/>
        <Layout/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
