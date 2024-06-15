import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from '../SharedLayout/SharedLayout';
import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';
// pages*
import HomePage from '@pages/HomePage/HomePage';
import AuthPage from '@pages/AuthPage/AuthPage';
import WelcomePage from '@pages/WelcomePage/WelcomePage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import ScreensPage from '@pages/ScreensPage/ScreensPage';
// modal**
import Modal from '../Custom/CustomModal/Modal';
import ModalContent from '../Custom/CustomModal/ModalContent';
import { closeModal } from '@redux/modal/modalSlice';
import { selectModalIsVisible } from '@redux/modal/selectors';
import { useEffect } from 'react';
import { currentUserThunk } from '@src/redux/auth/thunks';
import { useAppDispatch } from '@src/redux/store';

function App() {
  const isVisible = useSelector(selectModalIsVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, []);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />

          <Route element={<PublicRoute />}>
            <Route path="auth/:id" element={<AuthPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage />}>
              <Route path=":boardName" element={<ScreensPage />} />
            </Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <Modal isVisible={isVisible} onClose={handleClose}>
        <ModalContent />
      </Modal>
    </>
  );
}

export default App;
