import { Route, Routes } from 'react-router-dom';

import Guard from './screens/Guard';
import NotFound from './screens/main/common/not-found/NotFound';
import Auth from './screens/auth';
import Login from './screens/auth/login/Login';
import Signup from './screens/auth/signup/Signup';
import PasswordReset from './screens/auth/password-reset';
import Home from './screens/main';

const App = () => {
  return (
    <Routes>
      <Route element={<Guard />}>
        <Route path="/*" element={<Home />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="password-reset" element={<PasswordReset />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
