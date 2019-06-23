import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './pages/Home';
import Shop from './pages/Shop';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
            </Router>
        );
    }

}

export default App;
