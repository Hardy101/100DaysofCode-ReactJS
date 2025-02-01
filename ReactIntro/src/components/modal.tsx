import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={modalStyleClasses}>
      <div className={modalContentClasses}>
        <button onClick={onClose} className={closeButtonClasses}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") as HTMLElement
  );
};
const modalStyleClasses =
  "fixed top-0 left-0 w-screen h-screen bg-black flex justify-center align-center";
const modalContentClasses = "bg-white m-auto p-4 rounded-2xl";
const closeButtonClasses =
  "bg-red-500 rounded-2xl text-white border-none px-6 font-bold py-1 cursor-pointer";

export default Modal;
