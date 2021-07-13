import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateEvent from "./components/createEvent";
import Home from './components/home'

const App = () => {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/create-event'>
          <CreateEvent />
        </Route>
      </Switch>

    </Router>

    </div>
  );
}

export default App
