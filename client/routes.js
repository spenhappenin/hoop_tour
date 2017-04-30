import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Locations from './components/Locations';
import SaltLake from './components/SaltLake';
import IdahoFalls from './components/IdahoFalls';
import Sponsorship from './components/Sponsorship';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Rules from './components/Rules';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={ App }>
    	<IndexRoute component={ Home } />
	    <Route path="/home" component={ Home } />
	    <Route path="/about" component={ About } />
	    <Route path="/locations" component={ Locations } />
	    <Route path='/salt-lake' component={ SaltLake } />
	    <Route path='/idaho-falls' component={ IdahoFalls } />
	    <Route path="/sponsorship" component={ Sponsorship } />
	    <Route path="/FAQ" component={ FAQ } />
	    <Route path="/contact" component={ Contact } />
	    <Route path="/rules" component={ Rules } />
	    <Route path="*" status={ 404 } component={ NoMatch }/>
    </Route>
  </Route>
)

