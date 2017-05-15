import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Locations from './components/Locations';
import SaltLake from './components/locations/SaltLake';
import IdahoFalls from './components/locations/IdahoFalls';
import LasVegas from './components/locations/LasVegas';
import Logan from './components/locations/Logan';
import StGeorge from './components/locations/StGeorge';
import UtahCounty from './components/locations/UtahCounty';
import Sponsorship from './components/Sponsorship';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Rules from './components/Rules';
import NoMatch from './components/NoMatch';
import ComingSoon from './components/ComingSoon';

export default (
  <Route>
    <Route path="/" component={ App }>
    	<IndexRoute component={ Home } />
	    <Route path="/home" component={ Home } />
	    <Route path="/about" component={ About } />
	    <Route path="/locations" component={ Locations } />
	    <Route path='/salt-lake' component={ SaltLake } />
	    <Route path='/idaho-falls' component={ IdahoFalls } />
	    <Route path='/las-vegas' component={ LasVegas } />
	    <Route path='/logan' component={ Logan } />
	    <Route path='/st-george' component={ StGeorge } />
	    <Route path='/utah-county' component={ UtahCounty } />
	    <Route path="/sponsorship" component={ Sponsorship } />
	    <Route path="/FAQ" component={ FAQ } />
	    <Route path="/contact" component={ Contact } />
	    <Route path="/rules" component={ Rules } />
	    <Route path='/coming-soon' component={ ComingSoon } />
	    <Route path="*" status={ 404 } component={ NoMatch }/>
    </Route>
  </Route>
)

