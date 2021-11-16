import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponent from './FunctionalComponentDemo';
import JSXRules from './JSXRules';
import State from './State';
import Effects from './Effects';
import PropsDemo from './PropsDemo';
import Hooks from './Hooks';
import Timer from './apps/timer-apps/TimePiecesApp.js';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/jsxrules'>JSX Rules</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='propsdemo'>Props Demo</Link></li>
                    <li><Link to='Hooks'>Hooks</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/functionalcomponent'><FunctionalComponent /></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path='/hooks'><Hooks /></Route>
                    <Route exact path="/timer"><TimePiecesApp /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;