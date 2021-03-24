import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movies from '../components/Movies';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const Routes = () => (
    <Router>
        <DefaultLayout>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/movies">
                    <Movies />
                </Route>
                <Route exact path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </DefaultLayout>
    </Router>
);

export default Routes;