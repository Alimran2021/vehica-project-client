import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import PurchaseOrder from './Pages/PurchaseOrder/PurchaseOrder';
import Register from './Pages/Shared/Login/Register/Register';
import Login from './Pages/Shared/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRoute';
import PageNotFound from './Pages/PageNotFound/PageNotFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute exact path="/purchaseOrder/:productId">
              <PurchaseOrder />
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
