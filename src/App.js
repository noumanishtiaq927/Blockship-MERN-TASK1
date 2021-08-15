
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './Pages/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchPage}/>
      </Router>
     
    </div>
  );
}

export default App;
