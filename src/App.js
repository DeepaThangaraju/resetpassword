import './App.css';
import { Link,Route,Switch} from "react-router-dom";
import { Login } from './Login';
import { Signin } from './Signin';

function App() {
  return (
    <div className="App">
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/register">
        <Signin />
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
      </Switch>
       
       
    </div>
  );
}

export default App;
