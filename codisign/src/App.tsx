import { RoutingLinks } from "./routing/routingLinks";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
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
          <Route index element={<Login />} />
        </Route>

        <Route path="login">
          <Route index element={<div>register</div>} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
