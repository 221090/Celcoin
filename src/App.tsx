import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Patient from './pages/Patient';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/pacientes' component={Patient} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
