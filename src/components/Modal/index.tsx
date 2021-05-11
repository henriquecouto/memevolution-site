import { FC } from "react";
import Card from "../Card";
import Fab from "../Fab";
import * as S from "./Modal.styles";
import { FiX } from "react-icons/fi";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <S.ModalWrapper
      animate={open ? { opacity: 1 } : { y: window.outerHeight, opacity: 0 }}
    >
      <Card disableMotion>
        <S.FabWrapper>
          <Fab onClick={onClose}>
            <FiX />
          </Fab>
        </S.FabWrapper>
        {children}
      </Card>
    </S.ModalWrapper>
  );
};

export default Modal;
