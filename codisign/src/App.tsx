import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./HomePage/HomePage";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Courses } from "./Courses/Courses";
import { AddCourse } from "./Courses/AddCourse";
import { MyCourses } from "./Courses/MyCourses";
import { UsersProvider } from "./contexts/UserContext";

function App() {
  return (
    <ErrorBoundary>
      <UsersProvider>
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

          <Route path="allCourses">
            <Route index element={<Courses />} />
          </Route>

          <Route path="addCourse">
            <Route index element={<AddCourse />} />
          </Route>

          <Route path="myCourses">
            <Route index element={<MyCourses />} />
          </Route>
        </Routes>
      </UsersProvider>
    </ErrorBoundary>
  );
}

export default App;
