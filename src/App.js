import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import Books from './books';
import Shop from './shop';
import About from './about';

function App() {
  return (
    
      <Router>
       <Nav/>
       <div className="App">
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/books' component={Books}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/about' component={About}/>
        </Switch>
        </div>
      </Router>
      
   
  );
}

const HomePage = () => {
  return(
    <h2>HomePage</h2>
  )
};

const Nav = () => {
  return(
    <div>
      <h2>
      Navigation
    </h2>
      <ul>
        <Link to="/">
          <li>HomePage</li>
        </Link>
        <Link to="/books">
          <li>Books</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>           
    </div>
    
  )
}

export default App;
