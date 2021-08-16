
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './Pages/SearchPage';


function App() {
  return (
    <div style={{backgroundColor:'aliceblue'}} className="App">
      <header style={{position:'sticky',top:'0',backgroundColor:'black'}}>  <h2  style={{backgroundColor:'black',color:'whitesmoke',textAlign:"center",  width:'99%',margin:'10px auto',height:'30px',borderRadius:'3px',padding:'10px'}}>MOVIE-SHELF</h2>  </header>
      <Home/>
     
     
    </div>
  );
}

export default App;
