import './App.css';
import { Menu } from './Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer/Footer';
// import { Register } from './Register/Register';
// import { Login } from './Register/Login';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
