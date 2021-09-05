import { Route, Switch } from 'react-router-dom';
import MainLayout from "../components/main-layout";

import UserTablePage from "../pages/user-table";
import Settings from "../pages/settings";
import Signup from "../pages/signup";
import Login from "../pages/login";

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact={true}>
          <UserTablePage />
        </Route>
        <Route path='/home'>
          <UserTablePage />
        </Route>
        <Route path='/user-table'>
          <UserTablePage />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default App;
