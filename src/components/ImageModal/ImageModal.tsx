import { useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
  image: string;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Image src={image} alt="Large preview" />
    </Overlay>
  );
};

export default Modal;