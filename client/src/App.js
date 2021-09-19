import Main from './views/Main'
import AuthorForm from './views/AuthorForm';
import EditAuthor from './views/EditAuthor';
import { 
  BrowserRouter, 
  Link, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/new">
          <AuthorForm />
        </Route>
        <Route exact path="/edit/:id">
          <EditAuthor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
