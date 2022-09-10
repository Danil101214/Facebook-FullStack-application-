import logo from './logo.svg';
import './App.css';
import AppRouter from './Components/AppRouter';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <AppRouter />
    </div>
    <ToastContainer position='bottom-right'/>
    </>
  );
}

export default App;
