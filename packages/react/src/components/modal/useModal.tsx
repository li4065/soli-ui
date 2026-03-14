import { useModalContext } from './ModalContext';
export const useModal = () => {
  const { openModal, closeModal, isOpen } = useModalContext();
  
  return {
    openModal,
    closeModal,
    isOpen,
  };
};