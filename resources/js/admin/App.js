import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BaseLayout } from '@/common/components/Layout';

import Login from './pages/Login';
import NotFound from './pages/errors/NotFound';

class App extends React.Component {
    render() {
        return (
            <Router>
                <BaseLayout title="vMCShop.pro | Panel Administratora" />
                <Switch>
                    <Route path="/admin/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
