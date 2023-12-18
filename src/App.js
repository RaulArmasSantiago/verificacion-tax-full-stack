import './App.css';
import Router from './Router/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import toast, { Toaster } from 'react-hot-toast'


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Router/>
    </div>
  );
}

export default App;
