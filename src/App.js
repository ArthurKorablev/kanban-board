import './App.css';
import InputComponent from './containers/InputComponent';
import Layout from './containers/Layout';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <InputComponent/>
        <Layout/> */}
        <Main key={"main"}/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
