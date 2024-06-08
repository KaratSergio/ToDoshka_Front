import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';

import FirstPage from '../../pages/FirstPage/FirstPage';
import SecondPage from '../../pages/SecondPage/SecondPage';
import HalfPage from '../../pages/HalfPage/HalfPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/first" element={<FirstPage />} />
              <Route path="/second" element={<SecondPage />}>
                <Route path=":half" element={<HalfPage />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
