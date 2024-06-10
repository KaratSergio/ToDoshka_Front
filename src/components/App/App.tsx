import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../SharedLayout/SharedLayout';

import HomePage from '../../pages/HomePage/HomePage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import ScreensPage from '../../pages/ScreensPage/ScreensPage';

// interface IRouteObject {
//   path?: string;
//   id?: string;
//   element: React.ReactNode;
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />} />

        <Route path="/home" element={<HomePage />}>
          <Route path=":boardName" element={<ScreensPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
      {/* <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/first" element={<HomePage />} />
              <Route path="/second" element={<SecondPage />}>
                <Route path=":half" element={<HalfPage />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        }
      /> */}
    </Routes>
  );
}

export default App;
