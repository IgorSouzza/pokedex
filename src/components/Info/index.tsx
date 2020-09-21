import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';

import { Container, Content } from './styles';

export interface ModalHandles {
  openModal: () => void;
}

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.RefForwardingComponent<ModalHandles, ModalProps> = (
  { children, ...rest },
  ref,
) => {
  const [visible, setVisible] = useState(false);
  const [windowPosition, setWindowPosition] = useState(0);

  const openModal = useCallback(() => {
    setWindowPosition(window.pageYOffset);
    setVisible(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
    document.body.style.overflow = 'initial';
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Container style={{ top: windowPosition }} {...rest}>
      <Content>
        <button type="button" onClick={handleCloseModal} className="close">
          X
        </button>
        <p>{children}</p>
      </Content>
    </Container>
  );
};

export default forwardRef(Modal);
