import { RoutingLinks } from "./routing/routingLinks";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";

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
          <Route index element={<div>register</div>} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
