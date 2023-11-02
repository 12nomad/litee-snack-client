import { Route, Routes } from "react-router-dom";

import Guard from "./screens/main/Guard";
import NotFound from "./screens/main/common/not-found/NotFound";
import Auth from "./screens/auth";
import Login from "./screens/auth/login";
import Signup from "./screens/auth/signup";
import PasswordReset from "./screens/auth/password-reset";
import Home from "./screens/main";
import Landing from "./screens/landing";

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
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
