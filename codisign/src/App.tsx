import { RoutingLinks } from "./routing/routingLinks";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./HomePage/HomePage";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";

function App() {
  return (
    <ErrorBoundary>
      <RoutingLinks />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="register">
          <Route index element={<Register />} />
        </Route>

        <Route path="login">
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
