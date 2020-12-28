import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import About from './Pages/About';
import Breakout from './Pages/Breakout';

import './styles/variables.scss';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Breakout</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Breakout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
