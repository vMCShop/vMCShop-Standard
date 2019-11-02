import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '@/admin/components/Route';

import { BaseLayout } from '@/common/components/Layout';
import { AdminLayout } from '@/admin/components/Layout';
import AuthenticationContext from '@/admin/contexts/AuthenticationContext';

import Login from './pages/Login';
import NotFound from './pages/errors/NotFound';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Modules from './pages/Modules';
import Servers from './pages/Servers';
import Profile from './pages/Profile';

class App extends React.Component {
  render() {
    return (
      <AuthenticationContext>
        <Router>
          <BaseLayout title="vMCShop.pro | Panel Administratora" />
          <Switch>
            <Route path="/admin/login" component={Login} />

            <PrivateRoute path="/admin">
              <AdminLayout>
                <Switch>
                  <Route path="/admin/profile" component={Profile} />
                  <Route path="/admin/dashboard" component={Dashboard} />
                  <Route path="/admin/users" component={Users} />
                  <Route path="/admin/servers" component={Servers} />
                  <Route path="/admin/modules" component={Modules} />
                </Switch>
              </AdminLayout>
            </PrivateRoute>

            <Route component={NotFound} />
          </Switch>
        </Router>
      </AuthenticationContext>
    );
  }
}

export default App;
