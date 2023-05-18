import { RoutingLinks } from "./routing/routingLinks";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import { Register } from "./Register/Register";

function App() {
  return (
    <ErrorBoundary>
      <RoutingLinks />
      <Routes>
        <Route path="/" />
        <Route path="register">
          <Route index element={<div>login</div>} />
        </Route>

        <Route path="login">
          <Route index element={<Register />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
