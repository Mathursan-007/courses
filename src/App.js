import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Routes from './components/Route'

function App() {
  return (
    <Router>
    <Header/>
    <Routes/>
    </Router> 
  );
}

export default App;
