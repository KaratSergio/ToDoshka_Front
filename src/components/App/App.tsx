import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from '../SharedLayout/SharedLayout';
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

function App() {
  const isVisible = useSelector(selectModalIsVisible);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="auth/:id" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />}>
            <Route path=":boardName" element={<ScreensPage />} />
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
